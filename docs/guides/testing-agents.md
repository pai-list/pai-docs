# Test agents

Test the handler as a pure unit, then test integrations with sandboxed identities and payment adapters. Snapshot stable receipt fields, but avoid snapshots for timestamps and generated identifiers.

## Essential cases

- Invalid schema and unauthorized capability requests.
- Replay of the same payment callback.
- Expired or incorrectly addressed credentials.
- Provider timeout and partial skill failure.

Run `pai test` in CI before any publish or deploy action.
