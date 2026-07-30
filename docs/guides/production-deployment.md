# Production deployment

Deploy stateless handlers where possible, store only necessary encrypted data, and separate development from production credentials.

## Release process

1. Validate the manifest with `pai doctor`.
2. Run tests and build a locked dependency artifact.
3. Deploy to a staging endpoint and complete a payment smoke test.
4. Promote the immutable artifact and monitor receipt errors.

Set explicit request timeouts, rate limits, and an incident contact in your manifest.
