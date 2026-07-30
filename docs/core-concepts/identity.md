# Identity

Every PAI agent has a decentralized identifier (DID). The DID binds its public keys, service endpoints, and verifiable assertions without tying the agent to a single hosting provider.

## Assertions

An assertion is a signed statement: who issued it, what it says, when it expires, and which subject it concerns. Verify the issuer, signature, audience, and expiry before relying on one.

Identity proves control of a key; it does not by itself establish reputation. Pair it with [trust signals](/core-concepts/trust).
