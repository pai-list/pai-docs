# DID Method Specification: `did:agent`

## Overview

The `did:agent` method defines decentralized identifiers for autonomous agents on the Pi Network.

## Method Name
`agent`

## Method Syntax
```
did:agent:<network>:<identifier>
```

### Components
| Component | Description | Example |
|-----------|-------------|---------|
| `did:` | DID scheme | `did:` |
| `agent` | Method name | `agent` |
| `network` | Network identifier | `pi`, `testnet` |
| `identifier` | Unique agent identifier | `pioneer.username` |

### Example
```
did:agent:pi:pioneer.username
did:agent:testnet:agent.research-bot
```

## Operations

### Create (Register)
```typescript
async function registerAgent(identity: AgentIdentity): Promise<DIDDocument> {
  const did = `did:agent:${network}:${identifier}`
  const doc = await createDIDDocument(identity)
  
  // Anchor to Pi Network
  await anchorToPiNetwork(did, document)
  
  return document
}
```

### Read (Resolve)
```typescript
async function resolveDID(did: string): Promise<DIDDocument> {
  // 1. Parse DID
  const { network, identifier } = parseDID(did)
  
  // 2. Query Pi Network DID Registry
  const response = await fetch(
    `https://api.minepi.com/v1/did/${encodeURIComponent(did)}`
  )
  
  return response.json()
}
```

### Update (Rotate Keys)
```typescript
async function rotateKeys(did: string, newKeys: KeyPair[]): Promise<DIDDocument> {
  // 1. Create update operation
  const update = {
    did,
    action: 'update',
    verificationMethod: newKeys.map(k => ({
      id: `${did}#keys-${Date.now()}`,
      type: 'Ed25519VerificationKey2020',
      controller: did,
      publicKeyMultibase: toMultibase(k.publicKey)
    }),
    proof: await signUpdate(did, newKeys)
  }
  
  // Anchor to Pi Network
  await anchorToPiNetwork(update)
  
  return resolveDID(did)
}
```

### Deactivate (Revoke)
```typescript
async function deactivateDID(did: string, reason: string): Promise<void> {
  const deactivation = {
    did,
    action: 'deactivate',
    reason,
    proof: await signDeactivation(did)
  }
  
  await anchorToPiNetwork(deactivation)
}
```

## DID Document Structure

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/ed25519-2020/v1"
  ],
  "id": "did:agent:pi:pioneer.username",
  "verificationMethod": [{
    "id": "did:agent:pi:pioneer.username#keys-1",
    "type": "Ed25519VerificationKey2020",
    "controller": "did:agent:pi:pioneer.username",
    "publicKeyMultibase": "z6Mk..."
  }],
  "authentication": ["did:agent:pi:pioneer.username#keys-1"],
  "assertionMethod": ["did:agent:pi:pioneer.username#keys-1"],
  "keyAgreement": ["did:agent:pi:pioneer.username#keys-1"],
  "service": [{
    "id": "did:agent:pi:pioneer.username#agent",
    "type": "AgentService",
    "serviceEndpoint": "https://agent.axiomid.app/agent/pioneer.username"
  }]
}
```

## Resolution Process

```
Resolve DID
     │
     ▼
┌─────────────────────┐
│ Parse DID           │
│ did:agent:pi:xxx    │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│ Query Pi Network    │
│ DID Registry        │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│ Verify Signature    │
│ & Proof Chain       │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│ Return DID Document │
└─────────────────────┘
```

## Error Codes

| Code | Description |
|------|-------------|
| `notFound` | DID not found |
| `invalidFormat` | Invalid DID syntax |
| `deactivated` | DID deactivated |
| `networkError` | Network resolution failed |

## Security Considerations

1. **Key Rotation**: Rotate keys every 90 days
2. **Revocation**: Immediate revocation on compromise
3. **Recovery**: Social recovery via guardians
4. **Backup**: Encrypted backup to distributed storage

## References

- [W3C DID Core](https://www.w3.org/TR/did-core/)
- [Pi Network DID Registry](https://api.minepi.com/v1/did)
- [OpenIdentity Spec](https://github.com/pai-list/openidentity.md)
EOF