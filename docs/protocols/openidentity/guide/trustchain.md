# TrustChain

Immutable audit trail for agent actions.

## Overview

TrustChain is an append-only hash chain that provides an immutable audit trail for all agent actions. Every action an agent takes is recorded as an entry in the chain, creating an immutable, verifiable history.

## Core Concepts

### Chain Structure
```
Entry N
    │
    ├── hash: sha256(prev_hash + payload + timestamp + nonce)
    ├── prev_hash: "0xabc123..."
    ├── payload: { action: "payment", amount: 10, to: "user_b" }
    ├── timestamp: 1699900000000
    ├── nonce: 12345
    ├── signature: "MEUCIQD..."
    └── signer: "did:agent:pi:agent123"
         │
         ▼
Entry N-1
```

### Entry Structure
```typescript
interface TrustChainEntry {
  index: number                    // Sequential index
  hash: string                     // SHA-256 of this entry
  prevHash: string                 // Previous entry hash
  payload: TrustChainPayload       // Action data
  timestamp: number                // Unix milliseconds
  nonce: number                    // Proof-of-work nonce
  signature: string                // Ed25519 signature
  signer: string                   // DID of signer
  signature: string                // Ed25519 signature over hash
}

interface TrustChainPayload {
  action: string                   // Action type
  actor: string                    // DID of actor
  target?: string                  // Target DID (if applicable)
  actionData: Record<string, any>  // Action-specific data
  metadata?: Record<string, any>   // Additional metadata
}
```

## Hash Chain Mechanics

### Hash Calculation
```typescript
function computeHash(entry: TrustChainEntry): string {
  const data = JSON.stringify({
    index: entry.index,
    prevHash: entry.prevHash,
    payload: entry.payload,
    timestamp: entry.timestamp,
    nonce: entry.nonce
  })
  return '0x' + sha256(data).toString('hex')
}
```

### Proof of Work (Optional)
For high-value entries, optional PoW:
```typescript
function mineNonce(entry: TrustChainEntry, difficulty: number): number {
  let nonce = 0
  while (true) {
    const hash = computeHash({ ...entry, nonce })
    if (hash.startsWith('0'.repeat(difficulty))) {
      return nonce
    }
    nonce++
  }
}
```

## Verification

### Verify Single Entry
```typescript
function verifyEntry(entry: TrustChainEntry, prevHash: string): boolean {
  // 1. Check prevHash matches
  if (entry.prevHash !== prevHash) return false
  
  // 2. Verify hash
  const computed = computeHash(entry)
  if (entry.hash !== computed) return false
  
  // 3. Verify signature
  const payload = canonicalize({
    index: entry.index,
    prevHash: entry.prevHash,
    payload: entry.payload,
    timestamp: entry.timestamp,
    nonce: entry.nonce
  })
  const message = hash(payload)
  const valid = verifySignature(
    entry.signer,
    entry.signature,
    message
  )
  
  return valid
}
```

### Verify Chain
```typescript
async function verifyChain(entries: TrustChainEntry[]): Promise<boolean> {
  let prevHash = '0x0'.repeat(64) // Genesis
  
  for (const entry of entries) {
    if (!verifyEntry(entry, prevHash)) return false
    prevHash = entry.hash
  }
  return true
}
```

## Anchoring

### Pi Network Anchoring
Periodically anchor chain head to Pi Network blockchain:

```typescript
async function anchorToPiNetwork(chainHead: TrustChainEntry): Promise<string> {
  const anchor = {
    chainHash: chainHead.hash,
    chainLength: chain.length,
    timestamp: Date.now(),
    merkleRoot: computeMerkleRoot(chain)
  }
  
  const tx = await piNetwork.submitTransaction({
    to: 'trustchain.anchor.pi',
    data: anchor,
    fee: estimateFee()
  })
  
  return tx.hash
}
```

### Periodic Anchoring
- Every 100 entries OR every 10 minutes
- Whichever comes first
- Provides blockchain-level immutability

## Verification API

### Verify Single Entry
```bash
GET /api/v1/trustchain/verify?hash=0xabc123...
```

Response:
```json
{
  "valid": true,
  "entry": { ... },
  "anchored": true,
  "anchorTx": "0xabc123...",
  "confirmations": 12
}
```

### Verify Chain Segment
```bash
GET /api/v1/trustchain/verify?from=100&to=200
```

### Stream New Entries
```javascript
const ws = new WebSocket('wss://api.axiomid.app/trustchain/stream')
ws.onmessage = (event) => {
  const entry = JSON.parse(event.data)
  // Process new entry
}
```

## Verification Tools

### CLI Verification
```bash
# Verify single entry
pai trustchain verify --hash 0xabc123...

# Verify chain segment
pai trustchain verify --from 100 --to 200

# Verify entire chain
pai trustchain verify --all
```

### SDK Verification
```typescript
import { TrustChainVerifier } from '@axiomid/sdk'

const verifier = new TrustChainVerifier({
  network: 'mainnet',
  rpcUrl: 'https://api.axiomid.app'
})

const result = await verifier.verifyEntry(entryHash)
console.log(result.valid, result.anchored, result.confirmations)
```

## Security Considerations

1. **Key Compromise**: Immediate revocation + key rotation
2. **Replay Protection**: Nonce + timestamp validation
3. **Timestamp Validation**: Reject entries > 5 min clock skew
3. **Anchoring**: Verify Pi Network anchor confirmations
4. **Fork Detection**: Monitor for chain splits

## References

- [TrustChain Spec](https://github.com/pai-list/openidentity.md/blob/main/specs/trustchain.md)
- [Pi Network Anchoring](https://developers.minepi.com/docs/anchoring)
- [Sigstore Integration](https://docs.sigstore.dev/)
EOF