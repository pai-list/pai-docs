# Verify API Reference

Verification endpoints for KYC, identity, and proofs.

## POST /verify/kyc

Verify user KYC status.

### Request
```json
{
  "username": "pioneer.username",
  "level": "l2"
}
```

### Response
```json
{
  "verified": true,
  "did": "did:pi:user123",
  "kycLevel": "l2",
  "trustScore": 75,
  "passport": { ... }
}
```

## POST /verify/identity

Verify identity proof.

### Request
```json
{
  "did": "did:pi:user123",
  "proof": { "type": "Ed25519Signature2020", ... },
  "challenge": "random-challenge"
}
```

## POST /verify/proof

Verify arbitrary proof.

### Request
```json
{
  "proof": { ... },
  "verificationMethod": "did:pi:user123#keys-1"
}
```