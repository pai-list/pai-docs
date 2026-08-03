# TrustChain Reference

TrustChain API and verification.

## GET /trustchain/head

Get current chain head.

### Response
```json
{
  "head": "sha256:abc123...",
  "sequence": 12345,
  "anchored": true,
  "anchorTx": "0xabc123...",
  "anchoredAt": "2026-08-02T12:00:00Z"
}
```

## GET /trustchain/verify

Verify a receipt against chain.

### Request
```json
{
  "receipt": { ... },
  "chainHead": "sha256:abc123..."
}
```

### Response
```json
{
  "valid": true,
  "sequence": 12345,
  "anchored": true
}
```

## GET /trustchain/history

Get chain history.

### Query
```
?from=12000&to=12345&limit=100
```