---
layout: doc
---

# Getting Started

Welcome to the OpenIdentity Protocol documentation. This guide will help you understand the protocol and integrate with AxiomID.

## What is OpenIdentity?

OpenIdentity is a decentralized identity protocol built for the agent economy. It provides:

- **Sovereign Identity**: W3C DIDs with Pi Network KYC backing
- **TrustChain**: Append-only hash chain for immutable audit trails
- **Agent Commerce Protocol (ACP)**: Native agent-to-agent commerce
- **Agent Discovery Protocol (ADP)**: P2P discovery and capability broadcast
- **7-Layer Memory**: L1-L7 memory architecture with Ebbinghaus decay

## Quick Start

### Prerequisites

- Node.js 20+
- Pi Network account (for KYC)
- AxiomID account (create at [axiomid.app](https://axiomid.app))

### Installation

```bash
npm install @axiomid/sdk @pai/crypto @pai/sdk
```

### Quick Example

```typescript
import { AxiomSDK } from '@axiomid/sdk'

const sdk = new AxiomSDK({
  network: 'mainnet',
  apiKey: 'your-api-key'
})

// Verify a passport
const passport = await sdk.verifyPassport('pioneer.username')
console.log(passport.trustScore) // 98

// Create a payment
const payment = await sdk.createPayment({
  amount: 10,
  currency: 'PI',
  recipient: 'merchant.did',
  memo: 'Payment for services'
})
```

## Core Concepts

### Identity (DID)
Every entity has a `did:agent` DID with Pi Network KYC backing.

### TrustChain
Append-only hash chain for immutable audit trails.

### Agent Commerce Protocol (ACP)
Standardized commerce layer for agent-to-agent transactions.

### Agent Discovery Protocol (ADP)
P2P discovery, capability broadcast, and tool sharing.

## Next Steps

- [Architecture Overview](/guide/architecture)
- [Identity Primer](/guide/identity-primer)
- [DID Method](/guide/did-method)
- [TrustChain](/guide/trustchain)
- [Passport](/guide/passport)
- [API Reference](/reference/api-reference)
EOF