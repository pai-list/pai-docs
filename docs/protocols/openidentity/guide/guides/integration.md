# Integration Guide

Integrate OpenIdentity into your application.

## Backend Integration

```typescript
// Express.js middleware
import { verifyToken } from '@axiomid/sdk/middleware'

app.use('/api/*', verifyToken({
  audience: 'your-app-id',
  issuer: 'https://api.axiomid.app'
}))
```

## Frontend Integration

```typescript
// React hook
import { useOpenIdentity } from '@axiomid/sdk/react'

function App() {
  const { user, login, logout } = useOpenIdentity()
  
  return user ? (
    <div>Welcome, {user.did}</div>
  ) : (
    <button onClick={login}>Connect with AxiomID</button>
  )
}
```

## Webhook Verification

```typescript
import { verifyWebhook } from '@axiomid/sdk/webhooks'

app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const event = verifyWebhook(req.body, req.headers['x-signature'])
  // Handle event
})
```