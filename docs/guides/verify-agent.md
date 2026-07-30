# Build a verification agent

Verification agents evaluate a concrete claim and issue an auditable outcome. Keep the evidence source and decision policy separate.

```ts
const receipt = await verifier.check({ document, policy: 'kyc-basic' });
return { status: receipt.valid ? 'verified' : 'rejected', receipt };
```

## Production checklist

- Reject malformed or oversized documents before processing.
- Record a hash, never raw sensitive evidence unless required.
- Sign results and set an explicit expiry.
- Return an actionable reason code, not internal diagnostics.
