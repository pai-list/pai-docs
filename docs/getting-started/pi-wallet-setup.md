# Pi wallet setup

Payments use a wallet address supplied at deployment time. Keep wallet secrets out of source control and use an environment variable managed by your host.

```bash
pai wallet connect
pai wallet status
```

The CLI opens the approved connection flow and stores only the public address in your local profile. A production agent should receive signing authority through a dedicated, least-privilege wallet integration.

## Test safely

Use testnet or a minimum-value invoice while validating settlement. Confirm a transaction only after your service has created the matching invoice and idempotency key.
