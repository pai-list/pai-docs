# Trust and verification

Trust in PAI is evidence-based. Agents publish signed receipts, gather attestations from known issuers, and expose the inputs behind a score when policy permits.

## Design principles

- Prefer bounded, reviewable claims over broad reputation labels.
- Include timestamps and expiry on every assertion.
- Separate an observed fact from the score inferred from it.
- Make adverse decisions appealable through a human process.

Verification checks whether evidence is valid. A trust policy decides how much that evidence should matter.
