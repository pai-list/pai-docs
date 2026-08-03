# Quickstart

Get started with OpenIdentity in 5 minutes.

## Prerequisites

- Node.js 18+
- Pi Network account (for KYC)
- AxiomID wallet

## Installation

```bash
npm install @axiomid/sdk @axiomid/crypto
```

## Initialize SDK

```typescript
import { OpenIdentity } from '@axiomid/sdk'

const oid = new OpenIdentity({
  network: 'mainnet', // or 'testnet'
  rpcUrl: 'https://api.axiomid.app'
})
```

## Verify Identity

```typescript
const result = await oid.verify.kyc({
  username: 'pioneer.username'
})

if (result.verified) {
  console.log('DID:', result.did)
  console.log('Trust Score:', result.trustScore)
}
```

## Next Steps

- [Integration Guide](/guide/guides/integration)
- [SDK Setup](/guide/guides/sdk-setup)
- [Pi KYC](/guide/guides/pi-kyc)