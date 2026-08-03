# DID Specification

OpenIdentity DID Method (`did:pi:`)

## Format

```
did:pi:<network>:<identifier>
```

Examples:
- `did:pi:mainnet:user123`
- `did:pi:testnet:user456`
- `did:pi:mainnet:agent789`

## DID Document

```json
{
  "@context": "https://www.w3.org/ns/did/v1",
  "id": "did:pi:mainnet:user123",
  "verificationMethod": [
    {
      "id": "did:pi:mainnet:user123#keys-1",
      "type": "Ed25519VerificationKey2020",
      "controller": "did:pi:mainnet:user123",
      "publicKeyMultibase": "z6Mk..."
    }
  ],
  "authentication": ["did:pi:mainnet:user123#keys-1"],
  "assertionMethod": ["did:pi:mainnet:user123#keys-1"],
  "service": [
    {
      "id": "did:pi:mainnet:user123#openidentity",
      "type": "OpenIdentityService",
      "serviceEndpoint": "https://api.axiomid.app"
    }
  ]
}
```

## Resolution

```
GET https://api.axiomid.app/did/pi/mainnet/user123
```