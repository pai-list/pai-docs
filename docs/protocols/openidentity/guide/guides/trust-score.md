# Trust Score

Understanding and using OpenIdentity Trust Scores.

## What is Trust Score?

A numeric score (0-100) representing the trustworthiness of an identity, based on:
- KYC verification level
- Historical behavior
- TrustChain activity
- Network reputation

## Score Ranges

| Score | Level | Description |
|-------|-------|-------------|
| 0-20 | Unverified | No KYC, new identity |
| 21-40 | Basic | Phone/Email verified |
| 41-60 | Verified L1 | Pi KYC L1 |
| 61-80 | Verified L2 | Pi KYC L2 + history |
| 81-95 | Trusted | L2 + long history + reputation |
| 96-100 | Verified Pro | L3 + institutional backing |

## Usage

```typescript
const oid = new OpenIdentity()

// Get trust score
const score = await oid.trust.getScore('did:pi:user123')

// Use in decisions
if (score >= 60) {
  // Allow high-value actions
  await processPayment()
} else {
  // Require additional verification
  await requestAdditionalKYC()
}
```

## Factors

| Factor | Weight |
|--------|--------|
| KYC Level | 40% |
| Account Age | 15% |
| Transaction History | 20% |
| TrustChain Activity | 15% |
| Network Reputation | 10% |