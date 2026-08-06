---
title: AOR — Agent Operating Record
---

# AOR — Agent Operating Record (Specification v0.1)

> "المواصفة قبل المنتجات" — Spec first. AOR is the shared contract that makes an agent operable inside the PAI economy.

**Version:** 0.1
**Status:** Draft — this is the seed of the primary AxiomID research paper.
**Interop scope:** `@pai/adk`, Marketplace, PAI-Gspace, pai-memory, pai-mcp, Pi Network, AxiomID, earn/skills/memory subdomains.

## 1. The core question

> If any company or framework wants to make an Agent operable inside the PAI economy, what is the minimum specification it must conform to?

AOR is the answer. **Every Agent, every Repo, every Runtime generates an AOR** — one signed, unified record that any system (ADK, marketplace, memory, MCP, Pi, AxiomID) can read and verify.

## 2. The record

```json
{
  "id": "did:axiomid:...",
  "intent": "...",
  "mission": "...",
  "workspace": "...",
  "capabilities": ["..."],
  "constitution": { "...": "..." },
  "runtime": { "...": "..." },
  "memory": { "...": "..." },
  "proofs": ["..."],
  "economy": { "...": "..." },
  "trust": { "...": "..." }
}
```

## 3. Principle design rules

1. **Spec-first:** @pai/adk implements the spec; agentic.txt is the discovery file; AOR is the operating record; PAI-Gspace is the runtime environment; `earn.axiomid.app` is just one consumer app — never the protocol itself.
2. **Readable & verifiable by any system** — agents, marketplaces, humans all consume the same shape.
3. **Signed** — AOR is governed by identity (DID) and integrity (TrustChain hash-chains), no forging.
4. **One record, many views:** the AxiomID Agent Control Center renders `intent` → `mission` → `workspace` → `capabilities` → `memory` → `proofs` → `economy` → `trust` — these are exactly the OS sections.
5. **Honest data (Muraqabah):** the record only reflects what is real and verifiable; `proofs` reference live endpoints (e.g. `/api/status`, `/api/did-document`). No invented numbers — the Control Center's `zero fake numbers` rule is inherited by AOR.

## 4. File layout per repo/Runtime (AOR on disk)

Every PAI repo ships at the root:

| File | Role in AOR |
|------|-------------|
| `agentic.txt` | discovery — readable by other agents |
| `AGENTS.md` | human/agent instructions |
| `CONSTITUTION.md` | constitution (SOUL + governance) |
| `CAPABILITIES.json` | `capabilities[]` |
| `SECURITY.md` | trust boundaries |
| `runtime.json` | `runtime{}` |
| `memory/` | `memory{}` (append-only logs) |
| `workspace/` | `workspace` state |

The ADK `init` generator creates this layout + a starter AOR.

## 5. Open questions (Shura)

- AOR signing/verification boundaries: verify with AxiomID credential-status (requires auth today) — should AOR be public-readable and auth only for write/sign?
- Does AOR serve the research paper first (publishable spec) or the product first (used by ADK)?
- Where does `trust{}` live — derived from TrustChain events (read = derived, not stored)?

## 6. References

- WS3 ADK (`@pai/adk init` scaffold)
- WS5 repo standard (5 files)
- Agent Control Center redesign (`2026-08-06-agentic-control-center-design.md`)
- TrustChain append-only — the record's hash chain underpinning.