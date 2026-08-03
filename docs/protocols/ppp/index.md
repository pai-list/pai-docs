---
layout: doc
---

# PAI Protocol (PPP)

Universal Wire Protocol for Autonomous Agents — self-contained, verifiable, routable message format.

## Specification

| Document | Description |
|----------|-------------|
| [Message Format](./spec/message-format) | Complete `.ppp` document structure |
| [Header](./spec/header) | Routing and metadata fields |
| [Body](./spec/body) | Application payload schema |
| [Receipt & TrustChain](./spec/receipt) | Cryptographic proof and audit trail |
| [Routing](./spec/routing) | Mesh routing via endpoint URIs |
| [Error Handling](./spec/error-handling) | Standard error codes and responses |

## Whitepaper

| Document | Description |
|----------|-------------|
| [Executive Summary](./whitepaper/executive-summary) | High-level overview |
| [Architecture](./whitepaper/architecture) | Technical architecture |

## Quick Example

```json
.ppp
{
  "proto": "ppp/1.0",
  "type": "request",
  "endpoint": "pai://verify/kyc",
  "id": "msg_01hxxxxxxxxxxxxxxxxxxxx",
  "from": "did:agent:pi:agent1",
  "to": "did:agent:pi:agent2",
  "ts": "2026-08-02T12:00:00Z",
  "ttl": 30
}
---
{
  "type": "verify.kyc",
  "username": "pioneer.username"
}
---
{
  "hash": "sha256:abc123...",
  "signature": "MEUCIQD...",
  "signer": "did:agent:pi:agent1",
  "chain_hash": "sha256:abc123...",
  "sequence": 12345,
  "anchored": true,
  "anchor_tx": "0xabc123..."
}
```

## Core Principles

- **Self-Contained** — Every message is complete: Header + Body + Receipt
- **Verifiable** — Receipt = TrustChain proof + Sigstore anchoring
- **Routable** — Endpoint URI in header enables mesh routing
- **Versioned** — Explicit protocol versioning, backward compatible
- **Transport Agnostic** — HTTP, WebSocket, QUIC, libp2p, email

## Source

Protocol specification: [github.com/pai-list/PAI-Protocol](https://github.com/pai-list/PAI-Protocol)