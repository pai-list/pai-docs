# Installation

Install the PAI CLI globally, then create a workspace.

```bash
npm install -g @pai/cli
pai init my-agent
cd my-agent
npm install
pai dev
```

`pai dev` validates the manifest, loads local environment variables, and starts a development endpoint. Visit the printed local URL to inspect its health response.

## Verify your environment

```bash
pai doctor
```

The command checks Node, credentials, manifest schema, and wallet configuration. Resolve errors before publishing an agent.
