# Architecture

## System Overview

OpenIdentity is built on a layered architecture that separates concerns while maintaining interoperability.

```
┌─────────────────────────────────────────────────────────────┐
│                    Application Layer                          │
├─────────────────────────────────────────────────────────────┤
│  Agents │ Wallets │ dApps │ Skills │ Marketplace            │
├─────────────────────────────────────────────────────────────┤
│                  OpenIdentity Protocol                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐   │
│  │  DID     │ │ Trust    │ │   ACP    │ │      ADP     │   │
│  │  Method  │ │ Chain    │ │  (Commerce)│ │ (Discovery)  │   │
│  └──────────┘ └──────────┘ └──────────┘ └──────────────┘   │
├─────────────────────────────────────────────────────────────┤
│              TrustChain (Immutable Audit Log)                 │
├─────────────────────────────────────────────────────────────┤
│                    Pi Network Layer                           │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────────────┐   │
│  │  KYC    │ │ Payments│ │  DID    │ │  Reputation     │   │
│  └─────────┘ └─────────┘ └─────────┘ └─────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Core Components

### 1. DID Method (`did:agent`)
- **Format**: `did:agent:<network>:<identifier>`
- **Resolution**: Via Pi Network DID resolver
- **Verification**: Pi Network KYC + Ed25519 keys

### 2. TrustChain
- Append-only hash chain
- Each entry: `hash(prev) + payload + signature`
- Anchored to Pi Network blockchain periodically
- Verifiable via Merkle proofs

### 3. Agent Commerce Protocol (ACP)
- Standardized agent-to-agent commerce
- Escrow, disputes, escrow release
- Pi Network native payments (PI/USDC)

### 3. Agent Discovery Protocol (ADP)
- P2P capability broadcast
- Capability manifests
- Capability negotiation

## Data Flow

```
User/Agent Request
       │
       ▼
┌──────────────────┐
│   TrustGate      │  ◄── Admission control
│  (Validation)    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  TrustChain      │  ◄── Append to audit log
│  (Write)         │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Route to Layer  │
│  (L1-L7)         │
└────────┬─────────┘
         │
         ▼
    Response
```

## Data Models

### DID Document
```json
{
  "@context": "https://www.w3.org/ns/did/v1",
  "id": "did:agent:pi:pioneer.username",
  "verificationMethod": [{
    "id": "did:agent:pi:pioneer.username#keys-1",
    "type": "Ed25519VerificationKey2020",
    "controller": "did:agent:pi:pioneer.username",
    "publicKeyMultibase": "z6Mk..."
  }],
  "authentication": ["did:agent:pi:pioneer.username#keys-1"],
  "service": [{
    "id": "did:agent:pi:pioneer.username#agent",
    "type": "AgentService",
    "serviceEndpoint": "https://agent.axiomid.app/agent/pioneer.username"
  }]
}
```

### Passport
```typescript
interface Passport {
  username: string
  walletAddress: string
  piWalletAddress: string
  did: string
  tier: string
  xp: number
  trustScore: number
  kyaStatus: string
  kycStatus: string
  stamps: Stamp[]
  issuedDate: string
  agentName: string | null
  agentStatus: string | null
  agentPublicKey: string | null
}
```

### TrustChain Entry
```typescript
interface TrustChainEntry {
  hash: string
  prevHash: string
  payload: any
  signature: string
  timestamp: number
  signer: string
}
```

## Next Steps

- [Identity Primer](/guide/identity-primer)
- [DID Method](/guide/did-method)
- [TrustChain](/guide/trustchain)
- [API Reference](/reference/api-reference)
EOF