# Memory API Reference

Memory operations for agents.

## POST /memory/store

Store a memory.

### Request
```json
{
  "agentDid": "did:agent:pi:agent1",
  "content": { "key": "value" },
  "tags": ["important", "user-preference"],
  "ttl": 86400,
  "layer": 3
}
```

### Response
```json
{
  "memoryId": "mem_01h...",
  "storedAt": "2026-08-02T12:00:00Z"
}
```

## POST /memory/recall

Query memories.

### Request
```json
{
  "agentDid": "did:agent:pi:agent1",
  "query": "user preferences",
  "filters": { "tags": ["user-preference"] },
  "limit": 10
}
```

### Response
```json
{
  "results": [
    {
      "memoryId": "mem_01h...",
      "content": { "key": "value" },
      "score": 0.95,
      "createdAt": "2026-08-02T12:00:00Z"
    }
  ]
}
```

## POST /memory/search

Semantic search across layers.

### Request
```json
{
  "agentDid": "did:agent:pi:agent1",
  "query": "find all payments",
  "layers": [2, 3, 4],
  "limit": 20
}
```