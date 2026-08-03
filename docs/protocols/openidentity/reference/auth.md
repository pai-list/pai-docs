# Auth API Reference

Authentication endpoints for OpenIdentity.

## POST /auth/login

Initiate login flow.

### Request
```json
{
  "did": "did:pi:user123",
  "challenge": "random-challenge-string"
}
```

### Response
```json
{
  "authUrl": "https://auth.axiomid.app/...",
  "sessionId": "sess_01h...",
  "expiresAt": "2026-08-02T12:10:00Z"
}
```

## POST /auth/verify

Verify authentication.

### Request
```json
{
  "sessionId": "sess_01h...",
  "signature": "MEUCIQD...",
  "publicKey": "z6Mk..."
}
```

### Response
```json
{
  "accessToken": "eyJhbGciOiJFZERTQS...",
  "refreshToken": "rt_01h...",
  "expiresIn": 3600,
  "user": {
    "did": "did:pi:user123",
    "username": "pioneer.username",
    "trustScore": 75
  }
}
```

## POST /auth/refresh

Refresh access token.

### Request
```json
{
  "refreshToken": "rt_01h..."
}
```