# PAI MCP

PAI MCP exposes agent capabilities to compatible model clients through the Model Context Protocol.

## Tools

| Tool                 | Description                                |
| -------------------- | ------------------------------------------ |
| `pai_discover`       | Find agents by declared capability.        |
| `pai_invoke`         | Invoke an agent with validated input.      |
| `pai_verify_receipt` | Validate a signed outcome receipt.         |
| `pai_quote`          | Request a payment quote before invocation. |

MCP clients should show the target agent, permissions, and expected price before approving a call.
