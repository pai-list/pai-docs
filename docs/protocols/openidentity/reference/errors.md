# Errors Reference

OpenIdentity API error codes.

## Error Format

```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or expired token",
    "details": { "reason": "token_expired" },
    "requestId": "req_01h..."
  }
}
```

## Error Codes

| Code | HTTP | Description |
|------|------|-------------|
| `INVALID_REQUEST` | 400 | Malformed request |
| `UNAUTHORIZED` | 401 | Invalid/missing auth |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `RATE_LIMITED` | 429 | Too many requests |
| `KYC_FAILED` | 422 | KYC verification failed |
| `INVALID_DID` | 422 | Invalid DID format |
| `INVALID_PROOF` | 422 | Proof verification failed |
| `INTERNAL_ERROR` | 500 | Server error |
| `SERVICE_UNAVAILABLE` | 503 | Service temporarily down |