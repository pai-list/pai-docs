# PAI Docs

> **PAI** — *Pi + AI.* The developer documentation for Pi Network's agent layer.

Everything you need to build, deploy, and monetize AI agents on Pi Network.

## Site

VitePress documentation for PAI, ready to deploy to GitHub Pages.

## Contents

```
docs/
├── getting-started/
│   ├── installation.md       ← Install PAI CLI
│   ├── your-first-agent.md   ← Build an agent in 5 minutes
│   └── pi-wallet-setup.md   ← Connect Pi wallet
├── core-concepts/
│   ├── architecture.md       ← How PAI works
│   ├── skills.md            ← Composable skill system
│   └── identity.md          ← DIDs + OpenIdentity
├── guides/
│   ├── verify-agent.md      ← Build a verification agent
│   ├── trust-agent.md       ← Build a trust scoring agent
│   ├── identity-agent.md    ← Build a DID issuer agent
│   └── payment-agent.md     ← Build a payment agent
├── reference/
│   ├── pai-core.md          ← @pai/core API reference
│   ├── pai-verify.md        ← @pai/verify API reference
│   ├── pai-identity.md      ← @pai/identity API reference
│   ├── pai-cli.md           ← CLI command reference
│   └── pai-mcp.md           ← MCP tool reference
├── tutorials/
│   ├── hackathon-guide.md   ← How to run a PAI hackathon
│   ├── monetization.md      ← Pricing your agent services
│   ├── acp-integration.md   ← List on Virtuals marketplace
│   └── pi-browser-deploy.md ← Deploy to Pi Browser
└── ecosystem/
    ├── pai-list.md          ← Organization overview
    ├── contributing.md      ← How to contribute
    └── roadmap.md           ← What's coming
```

## Build Locally

```bash
git clone https://github.com/pai-list/docs
cd docs
npm ci
npm run dev
```

For a production build, run `npm run build`. GitHub Actions deploys pushes to `main`
using the repository's GitHub Pages environment.

## Quick Links

- [PAI Agent Kit](https://github.com/pai-list/agent-kit) — Core framework
- [PAI Skills](https://github.com/pai-list/skills) — Skill marketplace
- [PAI CLI](https://github.com/pai-list/cli) — Developer CLI
- [PAI MCP](https://github.com/pai-list/mcp) — MCP server

## License

PiOS — Pi Open Source License

---

**PAI Docs.** Documentation for the agent layer of Pi Network.
