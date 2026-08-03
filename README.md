# PAI Docs

> **PAI** — *Pi + AI.* Unified developer documentation for Pi Network's agent layer.

---

## Status

| Component | Status | Notes |
|-----------|--------|-------|
| **VitePress Config** | ✅ **Complete** | Multi-protocol docs site |
| **Getting Started** | ✅ **Complete** | Installation, first agent, Pi wallet setup |
| **Core Concepts** | ✅ **Complete** | Architecture, skills, identity, trust |
| **Guides** | ✅ **Complete** | Verify, trust, identity, payment agents |
| **Reference** | ✅ **Complete** | @pai/core, @pai/verify, @pai/identity, @pai/payments, CLI, MCP |
| **Protocols: PPP** | ✅ **Complete** | Full spec, whitepaper, implementations |
| **Protocols: OpenIdentity** | ✅ **Complete** | Guide, API reference, DID spec, TrustChain |
| **Deployment** | ✅ **Complete** | Cloudflare Pages → `docs.axiomid.app` |

---

## Structure

```
docs/
├── getting-started/           # Onboarding
├── core-concepts/             # Architecture, skills, identity, trust
├── guides/                    # Production agent guides
├── reference/                 # Package API references
├── tutorials/                 # Hackathon, monetization, ACP, Pi Browser
├── ecosystem/                 # PAI List, contributing, security, roadmap
├── protocols/
│   ├── ppp/                   # PAI Protocol (PPP) - wire protocol
│   │   ├── spec/              # Message format, header, body, receipt, routing, errors
│   │   ├── whitepaper/        # Executive summary, architecture
│   │   └── implementations/   # TypeScript, Rust, Go, Python
│   └── openidentity/          # OpenIdentity Protocol - decentralized identity
│       ├── guide/             # Getting started, architecture, DID method, TrustChain
│       ├── guide/guides/      # Quickstart, integration, SDK, Pi KYC, passport, trust score
│       └── reference/         # Auth, memory, verify, webhooks, DID, passport, TrustChain, errors, rate limits
└── ...
```

---

## Protocols Documented

### PAI Protocol (PPP)
Universal wire protocol for autonomous agent communication.
- **Spec repo:** [github.com/pai-list/PAI-Protocol](https://github.com/pai-list/PAI-Protocol)
- **Docs:** `/protocols/ppp/`

### OpenIdentity Protocol
Decentralized identity for the agent economy (W3C DIDs + Pi Network KYC).
- **Spec repo:** [github.com/pai-list/openidentity.md](https://github.com/pai-list/openidentity.md)
- **Docs:** `/protocols/openidentity/`

---

## Quick Start

```bash
# Install
pnpm install

# Dev server
pnpm run dev

# Build
pnpm run build

# Preview
pnpm run preview
```

---

## Deployment

- **Platform:** Cloudflare Pages
- **Project:** `pai-docs`
- **Production URL:** https://pai-docs.pages.dev
- **Custom Domain:** `docs.axiomid.app` (configured via Cloudflare custom domains)
- **Build Command:** `pnpm run build`
- **Output Directory:** `docs/.vitepress/dist`

---

## DNS Configuration

| Subdomain | Target | Status |
|-----------|--------|--------|
| `docs.axiomid.app` | `pai-docs.pages.dev` | ✅ Proxied |
| `ppp.axiomid.app` | `PAI-Protocol` Pages (separate) | ⏳ Pending |
| `openidentity.axiomid.app` | `openidentity.md` Pages (separate) | ⏳ Pending |

---

## License

MIT — Free for all agents, all humans, all purposes.

---

*Part of the PAI Universe. Documentation for Pi + AI.*