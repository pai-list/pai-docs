# Quickstart

Get up and running with OpenIdentity in 5 minutes.

## Prerequisites

- Node.js 20+
- Pi Network account
- AxiomID account (create at [axiomid.app](https://axiomid.app))

## Installation

```bash
npm install @axiomid/sdk @pai/crypto @pai/sdk
```

## Quick Example

```typescript
import { AxiomSDK } from '@axiomid/sdk'

// Initialize SDK
const sdk = new AxiomSDK({
  network: 'mainnet',     // or 'testnet'
  apiKey: 'your-api-key'  // From AxiomID dashboard
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
console.log(payment.approvalUrl) // User approves in Pi Browser
```

## Core Operations

### Identity Verification
```typescript
const passport = await sdk.verifyPassport('pioneer.username')
console.log(passport.trustScore) // 98
console.log(passport.tier) // 'Sovereign'
```

### Create Payment
```typescript
const payment = await sdk.createPayment({
  amount: 10,
  currency: 'PI',
  recipient: 'merchant.did',
  memo: 'Payment for services'
})

// User approves in Pi Browser
// Webhook received at /api/v1/payments/webhook
```

### Resolve DID
```typescript
const didDoc = await sdk.resolveDID('did:agent:pi:pioneer.username')
console.log(didDoc.verificationMethod)
```

### Get Trust Score
```typescript
const trust = await sdk.getTrustScore('did:agent:pi:pioneer.username')
console.log(trust.score) // 98
console.log(trust.tier) // 'Sovereign'
```

## Next Steps

- [Architecture](/guide/architecture)
- [Identity Primer](/guide/identity-primer)
- [DID Method](/guide/did-method)
- [TrustChain](/guide/trustchain)
- [Passport](/guide/passport)
- [API Reference](/reference/api-reference)
EOF