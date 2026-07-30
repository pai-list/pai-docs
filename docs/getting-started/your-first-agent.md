# Your first agent

This agent accepts a claim and returns a signed verification receipt.

```ts
import { defineAgent } from '@pai/core';
import { verify } from '@pai/verify';

export default defineAgent({
  name: 'hello-verifier',
  version: '1.0.0',
  async handle({ input, identity }) {
    const result = await verify.claim(input.claim);
    return identity.sign({ verified: result.valid, checkedAt: new Date().toISOString() });
  },
});
```

Run `pai dev`, send a JSON request to the local endpoint, then use `pai publish` when the manifest and tests pass.

## Make it useful

Declare only the permissions your agent needs. Add a price quote only after you have tested the request and receipt flow locally.
