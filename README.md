# PAI Docs

> **PAI** — *Pi + AI.* Developer documentation for Pi Network's agent layer.

---

## Status

| Component | Status | Notes |
|-----------|--------|-------|
| **VitePress Config** | ✅ **Scaffold** | VitePress docs site ready to deploy |
| **Getting Started** | ⏳ **Planned** | Installation, first agent, Pi wallet setup |
| **Core Concepts** | ⏳ **Planned** | Architecture, skills, identity (DIDs + OpenIdentity) |
| **Guides** | ⏳ **Planned** | Verify agent, trust agent, identity agent, payment agent |
| **Reference** | ⏳ **Planned** | @pai/core, @pai/verify, @pai/skills, @pai/verify API refs |
| **Deployment** | ⏳ **Planned** | GitHub Pages / Cloudflare Pages |

---

## Structure

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
│   ├── pai-skills.md        ← @pai/skills API reference
│   └── pai-wallet.md        ← @pai/wallet API reference
└── ...
```

---

## Quick Start

```bash
# Install
npm install

# Dev server
npm run docs:dev

# Build
npm run docs:build

# Preview
npm run docs:preview
```

---

## Deployment

- **Target:** GitHub Pages / Cloudflare Pages
- **Domain:** `docs.pai.build` (pending `pai.build` domain registration)

---

## License

MIT — Free for all agents, all humans, all purposes.

---

*Part of the PAI Universe. Documentation for Pi + AI.*