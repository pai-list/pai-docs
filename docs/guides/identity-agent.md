# Build an identity agent

Identity agents issue or manage verifiable credentials. Require proof of key control before binding a credential to a DID, and minimize the claims you disclose.

```ts
const credential = await issuer.issue({
  subject: did,
  type: 'PAIMembershipCredential',
  claims: { memberSince: '2026-01-01' },
  expiresIn: '365d',
});
```

Publish revocation information and provide a recovery path for key rotation.
