# @pai/identity

The identity package resolves DIDs, signs assertions, and verifies signatures.

```ts
const assertion = await identity.sign({ action: 'fulfilled', invoiceId });
const verified = await identity.verify(assertion);
```

Keys are accessed through the configured signer. Do not export private key material into application logs or browser code.
