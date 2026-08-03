# Pi KYC Integration

Verify users via Pi Network KYC.

## Overview

Pi Network provides KYC verification for users. OpenIdentity integrates with Pi KYC to provide verified DIDs.

## Flow

1. User initiates KYC in your app
2. Redirected to Pi Browser for KYC
3. Pi Network verifies identity
4. OpenIdentity issues verified DID
5. TrustChain records verification

## Implementation

```typescript
const oid = new OpenIdentity()

// Start KYC flow
const kycUrl = await oid.verify.startKYC({
  redirectUrl: 'https://yourapp.com/callback',
  level: 'l1' // or 'l2'
})

// Redirect user
window.location.href = kycUrl
```

## Callback Handling

```typescript
// On callback page
const result = await oid.verify.handleKYCCallback({
  code: new URLSearchParams(window.location.search).get('code'),
  state: new URLSearchParams(window.location.search).get('state')
})

if (result.verified) {
  // User is verified
  console.log('DID:', result.did)
  console.log('Passport:', result.passport)
}
```

## KYC Levels

| Level | Requirements | Trust Score |
|-------|--------------|-------------|
| L1 | Phone + Email | 50 |
| L2 | Government ID | 80 |
| L3 | Biometric + Liveness | 95 |