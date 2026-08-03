---
layout: doc
---

# API Reference

## Overview

The OpenIdentity Protocol provides a RESTful API for identity verification, trust scoring, and agent management.

## Base URL

```
https://api.axiomid.app/v1
```

## Authentication

All API requests require authentication via Bearer token or API key.

```http
Authorization: Bearer <your-api-key>
```

## Endpoints

### Identity Verification

#### Verify Passport
```http
POST /api/v1/verify/passport
Content-Type: application/json

{
  "username": "pioneer.username"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "username": "pioneer.username",
    "walletAddress": "GD5TABC",
    "piWalletAddress": "GA456DEF",
    "did": "did:agent:pi:pioneer.username",
    "tier": "Sovereign",
    "xp": 1250,
    "trustScore": 98,
    "kyaStatus": "VERIFIED",
    "kycStatus": "VERIFIED",
    "stamps": [
      { "type": "KYC_BOUND", "provider": "pi", "verified": true, "earnedAt": "2026-01-01T00:00:00.000Z" }
    ],
    "issuedDate": "2026-01-01T00:00:00.000Z",
    "agentName": "MyAgent",
    "agentStatus": "ACTIVE",
    "agentPublicKey": "z6Mk..."
  }
}
```

### DID Resolution

#### Resolve DID
```http
GET /api/v1/did/resolve?did=did:agent:pi:pioneer.username
```

Response:
```json
{
  "success": true,
  "data": {
    "@context": "https://www.w3.org/ns/did/v1",
    "id": "did:agent:pi:pioneer.username",
    "verificationMethod": [{
      "id": "did:agent:pi:pioneer.username#keys-1",
      "type": "Ed25519VerificationKey2020",
      "controller": "did:agent:pi:pioneer.username",
      "publicKeyMultibase": "z6Mk..."
    }],
    "authentication": ["did:agent:pi:pioneer.username#keys-1"]
  }
}
```

### Trust Score

#### Get Trust Score
```http
GET /api/v1/trust/score?did=did:agent:pi:pioneer.username
```

Response:
```json
{
  "success": true,
  "data": {
    "did": "did:agent:pi:pioneer.username",
    "score": 98,
    "tier": "Sovereign",
    "breakdown": {
      "kyc": 30,
      "walletAge": 25,
      "socialRecovery": 15,
      "agentActivity": 18,
      "peerAttestations": 25
    }
  }
}
```

## Error Codes

| Code | Description |
|------|-------------|
| `NOT_FOUND` | Resource not found |
| `UNAUTHORIZED` | Invalid or missing authentication |
| `INVALID_INPUT` | Invalid request parameters |
| `RATE_LIMITED` | Rate limit exceeded |
| `SERVICE_UNAVAILABLE` | Service temporarily unavailable |

## Rate Limits

| Tier | Requests/Minute | Requests/Hour |
|------|----------------|---------------|
| Free | 60 | 1000 |
| Pro | 300 | 10000 |
| Enterprise | 1000 | 100000 |

## SDKs

- [TypeScript/JavaScript SDK](https://github.com/pai-list/axiomid-sdk)
- [Python SDK](https://github.com/pai-list/openidentity-python)
- [Go SDK](https://github.com/pai-list/openidentity-go)

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| v1.0.0 | 2026-08-02 | Initial release |
EOF