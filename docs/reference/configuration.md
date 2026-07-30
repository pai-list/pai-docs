# Configuration

PAI reads `pai.config.ts` for non-secret settings and environment variables for credentials.

```ts
export default {
  identity: { did: process.env.PAI_DID! },
  payments: { network: 'testnet' },
  limits: { maxRequestBytes: 131072, timeoutMs: 15000 },
};
```

Required secrets are `PAI_DID`, the configured signer credential, and any provider tokens used by your skills. Keep `.env` files out of Git.
