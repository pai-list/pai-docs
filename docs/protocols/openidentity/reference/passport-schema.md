# Passport Schema

OpenIdentity Passport JSON Schema.

## Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["id", "holder", "claims", "proof"],
  "properties": {
    "id": { "type": "string", "pattern": "^passport_01h[a-z0-9]{22}$" },
    "holder": { "type": "string", "format": "did" },
    "claims": {
      "type": "object",
      "required": ["username", "kycLevel", "verifiedAt"],
      "properties": {
        "username": { "type": "string", "pattern": "^[a-z0-9.]{3,30}$" },
        "kycLevel": { "enum": ["l1", "l2", "l3"] },
        "verifiedAt": { "type": "string", "format": "date-time" },
        "piUserId": { "type": "string" },
        "email": { "type": "string", "format": "email" },
        "phone": { "type": "string" }
      }
    },
    "proof": {
      "type": "object",
      "required": ["type", "created", "proofValue", "verificationMethod"],
      "properties": {
        "type": { "const": "Ed25519Signature2020" },
        "created": { "type": "string", "format": "date-time" },
        "proofValue": { "type": "string" },
        "verificationMethod": { "type": "string", "format": "did" }
      }
    }
  }
}
```