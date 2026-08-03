# SDK Setup

Configure the OpenIdentity SDK for your environment.

## Configuration Options

```typescript
import { OpenIdentity } from '@axiomid/sdk'

const oid = new OpenIdentity({
  // Network: 'mainnet' | 'testnet' | 'local'
  network: 'mainnet',
  
  // Custom RPC endpoint
  rpcUrl: 'https://api.axiomid.app',
  
  // App credentials
  clientId: 'your-app-id',
  clientSecret: 'your-app-secret',
  
  // Webhook secret for verification
  webhookSecret: 'whsec_...',
  
  // Cache configuration
  cache: {
    ttl: 300, // 5 minutes
    store: 'redis' // or 'memory'
  },
  
  // Logging
  logLevel: 'info'
})
```

## Environment Variables

```bash
OID_NETWORK=mainnet
OID_RPC_URL=https://api.axiomid.app
OID_CLIENT_ID=your-app-id
OID_CLIENT_SECRET=your-app-secret
OID_WEBHOOK_SECRET=whsec_...
```

## TypeScript Configuration

```json
{
  "compilerOptions": {
    "types": ["@axiomid/sdk"]
  }
}
```