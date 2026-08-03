# Rate Limits

API rate limits for OpenIdentity.

## Limits

| Endpoint | Limit | Window |
|----------|-------|--------|
| `/auth/*` | 10 req | 1 minute |
| `/verify/kyc` | 5 req | 1 hour |
| `/verify/identity` | 20 req | 1 minute |
| `/memory/*` | 100 req | 1 minute |
| `/trustchain/*` | 50 req | 1 minute |
| Webhooks | 1000 req | 1 minute |

## Headers

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1690987200
Retry-After: 60
```

## Exceeding Limits

Returns `429 Too Many Requests` with `Retry-After` header.

## Best Practices

- Cache responses when possible
- Use exponential backoff on 429
- Batch operations where available
- Monitor `X-RateLimit-Remaining`