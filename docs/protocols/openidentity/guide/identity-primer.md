# Identity Primer

Understanding decentralized identity in the OpenIdentity Protocol.

## What is Decentralized Identity?

Traditional identity systems are centralized — you log in with Google, Apple, or Facebook. They own your identity.

**OpenIdentity flips this model:**
- You own your identifier (DID)
- You control your keys
- You choose what to share
- No central authority can revoke your identity

## Core Concepts

### DID (Decentralized Identifier)
```
did:agent:pi:pioneer.username
  │    │    │
  │    │    └── Unique identifier
  │    └────── Network (pi = Pi Network)
  └────────── Method (agent = agent identity)
```

### Verifiable Credentials (VCs)
Tamper-evident claims about an entity:
```json
{
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  "type": ["VerifiableCredential", "KYCCredential"],
  "issuer": "did:agent:pi:pi-network",
  "credentialSubject": {
    "id": "did:agent:pi:pioneer.username",
    "kycStatus": "VERIFIED",
    "kycLevel": "L2"
  },
  "issuanceDate": "2026-01-01T00:00:00Z",
  "proof": { ... }
}
```

## Key Types

### Ed25519 Keys
- Used for signing and verification
- Compact (32 bytes private, 32 bytes public)
- Fast verification (~1ms)

### Key Derivation
```
Master Seed (BIP39)
    │
    ├── Identity Key (Ed25519)
    ├── Encryption Key (X25519)
    ├── Signing Key (Ed25519)
    └── Encryption Key (X25519)
```

## Key Management

### Key Storage
- **Hot Keys**: In memory / secure enclave (active signing)
- **Cold Keys**: Hardware wallet / encrypted backup (recovery)

### Key Rotation
```typescript
async function rotateKeys(identity: Identity) {
  const newKeys = await generateKeyPair()
  await identity.addKey(newKeys.publicKey, 'signing')
  await identity.revokeKey(oldKeyId)
  await anchorToTrustChain({ type: 'key-rotation', newKey: newKeys.publicKey })
}
```

## Verification Methods

| Method | Type | Use Case |
|--------|------|----------|
| Ed25519VerificationKey2020 | Ed25519 | Standard signing |
| EcdsaSecp256k1VerificationKey2019 | secp256k1 | Ethereum compatibility |
| EcdsaSecp256r1VerificationKey2019 | P-256 | WebAuthn compatibility |

## Verification Flow

```
Presentation Request
        │
        ▼
┌─────────────────────┐
│  Holder App         │
│ (Wallet App)        │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  Verifier           │
│ (Service/App)       │
└─────────┬───────────┘
          │
          ▼
    Verification Result
```

## Next Steps

- [DID Method](/guide/did-method) — Deep dive into `did:agent`
- [TrustChain](/guide/trustchain) — Audit trail mechanics
- [Passport](/guide/passport) — User-facing identity document
EOF