# Passport Verification

Verify and manage OpenIdentity Passports.

## What is a Passport?

A Passport is a verifiable credential containing user identity claims, backed by Pi Network KYC.

## Structure

```json
{
  "id": "passport_01h...",
  "holder": "did:pi:user123",
  "claims": {
    "username": "pioneer.username",
    "kycLevel": "l2",
    "verifiedAt": "2026-08-02T12:00:00Z",
    "piUserId": "user_abc123"
  },
  "proof": {
    "type": "Ed25519Signature2020",
    "created": "2026-08-02T12:00:00Z",
    "proofValue": "MEUCIQD...",
    "verificationMethod": "did:pi:user123#keys-1"
  }
}
```

## Verification

```typescript
const oid = new OpenIdentity()

// Verify a passport
const result = await oid.passport.verify({
  passportId: 'passport_01h...',
  holder: 'did:pi:user123'
})

if (result.valid) {
  console.log('Claims:', result.claims)
}
```

## Refresh Passport

```typescript
const newPassport = await oid.passport.refresh('passport_01h...')
```