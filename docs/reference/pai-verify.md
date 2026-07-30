# @pai/verify

`@pai/verify` validates signed credentials, evidence references, and policy constraints.

```ts
const result = await verify.credential(token, {
  audience: 'did:pai:my-agent',
  requiredTypes: ['ProofOfHumanity'],
});
```

The result includes `valid`, `claims`, and failure reasons. Always check `valid` before reading claims.
