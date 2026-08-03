# Webhooks API Reference

Webhook events and verification.

## Events

| Event | Description |
|-------|-------------|
| `identity.verified` | User completed KYC |
| `identity.revoked` | Identity revoked |
| `trustscore.updated` | Trust score changed |
| `agent.registered` | New agent registered |
| `payment.received` | Payment received |

## Payload Format

```json
{
  "id": "evt_01h...",
  "type": "identity.verified",
  "createdAt": "2026-08-02T12:00:00Z",
  "data": { ... },
  "signature": "MEUCIQD..."
}
```

## Verification

```typescript
import { verifyWebhook } from '@axiomid/sdk/webhooks'

const event = verifyWebhook(payload, signature, webhookSecret)
```