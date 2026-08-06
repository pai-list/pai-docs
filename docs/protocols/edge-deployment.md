# Edge Deployment Model & Subdomain Registry

Status: PoC (Phase 0 — spec first, per AGENTS.md)
Date: 2026-08-06
Signed: did:axiom:issuer (see `/api/did-document`)

## Deployment model per protocol

| Kind | Platform | Example |
|---|---|---|
| UI (SPA / doc pages) | Cloudflare Pages or Vercel (static subdomain) | `https://gspace.axiomid.app` (PAI-Gspace UI), `https://pai-website.axiomid.app` (marketing) |
| API / Edge endpoints | Cloudflare Workers / Routes | `https://mcp.axiomid.app` → Worker (`pai-mcp`), `https://aip.axiomid.app` → Worker (AIP token introspection + VC issuance) |
| Blobs | R2 | PPP bundles, signed memory packs |
| Tiny stateful coordination | Durable Objects | per-connection MCP sessions, presence |
| Config | Workers KV | router weights, subdomain table, feature flags |

DNS: apex `axiomid.app` on Cloudflare; each service subdomain → A/CNAME to its Pages/Worker host.

## Subdomain registry (canonical)

| Subdomain | Service | Target |
|---|---|---|
| `aip.axiomid.app` | AIP protocol endpoints (token introspection, VC issuance) | Worker |
| `auth.axiomid.app` | Auth UI / flows / consent | Pages/UI |
| `earn.axiomid.app` | Agentic labor marketplace (earn) | Pages/UI |
| `jobs.axiomid.app` | Jobs listing / agent tasks | Pages/UI |
| `ppp.axiomid.app` | PPP endpoints / PPP URIs (portable profile packs) | Worker |
| `mcp.axiomid.app` | MCP gateway (A2A) | Worker — `pai-mcp` (stub live) |
| `gspace.axiomid.app` | G-space Universe UI | Pages/UI |
| `openid.axiomid.app` | DID / OIDC-like metadata — LIVE, keep | Pages |
| `mail.axiomid.app` / `email.axiomid.app` | Inbound email webhook endpoints | Worker (email routing) |
| `memory.axiomid.app`, `skills.axiomid.app`, `agdp.axiomid.app` | WS2 capability one-pagers | Pages/UI |

Notes: `api.axiomid.app` → 404 (unpublished — reserved for AxiomID API). Wildcard `*.axiomid.app` handled by `pai-api-gateway/workers/subdomain-redirect`.

## PoC phases per protocol

0. Spec file here, signed (this is #0 for the edge model).
1. Frontend stubs in the minirepo (`pai-api-gateway` / `pai-mcp`).
2. Deploy frontend → Pages (subdomain), Worker stub → subdomain API.
3. Minimal VC/token: signed JWT with `did:peer`/`did:key` subject; verify issuance flow and how KYA is granted.
4. E2E: Playwright + kernel smoke + portless dev.
5. Document results + ADR in `pai-docs`.

## Current PoC status (2026-08-06)

- **Redirect worker**: passthrough now covers the full subdomain registry (aip/auth/earn/jobs/ppp/mcp/gspace/openid/memory/skills/agdp/docs/mail/api/www/pai-website). No unknown subdomain is hijacked to `/passport/*`;
- **`pai-mcp`** edge stub live at `mcp.axiomid.app` (`src/worker.ts`: GET probe + JSON-RPC `tools/list`); stdio CLI untouched.
- **`protocol-stubs` worker live** (infrastructure/protocol-stubs): `aip`, `auth`, `earn`, `jobs`, `ppp`, `memory`, `skills` each serve honest PoC landing pages + `/health` JSON probe.
- **Workers relocated**: `pai-1loop-router` + `subdomain-redirect` → `layer-4-mcp-gateway/pai-api-gateway/workers/`.
- Verified live (200): mcp, aip, auth, earn, jobs, ppp, memory, skills, gspace, openid. `pai-website`/`docs` serve origin (404/302 onboard pending real deployment).
