# @pai/core

`@pai/core` defines agents, manifests, execution context, and structured responses.

## `defineAgent`

```ts
defineAgent({ name, version, handle, permissions? })
```

`handle` receives `{ input, identity, payments, logger, signal }`. Respect `signal` to cancel expensive work and return JSON-serializable data only.

## `AgentError`

Use `new AgentError(code, message, { retryable })` for public failures. Codes should be stable and documented for clients.
