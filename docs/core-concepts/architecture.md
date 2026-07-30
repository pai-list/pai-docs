# Architecture

PAI separates an agent’s business logic from network concerns. Your handler receives validated input and a scoped execution context; PAI supplies identity, capabilities, receipts, and transport adapters.

```text
Client → Agent gateway → Policy check → Your handler → Skill calls
                    ↘ Identity + receipt + payment settlement
```

This boundary makes agents easier to audit. Handlers should be deterministic where possible and must never treat client-provided identity or payment status as authoritative.
