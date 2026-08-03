import { defineConfig } from 'vitepress';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  title: 'PAI',
  description: 'Build, deploy, and monetize trustworthy AI agents on Pi Network.',
  base: isGitHubPages ? '/pai-docs/' : '/',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#0a0d14' }],
    ['meta', { property: 'og:title', content: 'PAI Documentation' }],
    ['meta', { property: 'og:description', content: 'The agent layer for Pi Network.' }],
  ],
  themeConfig: {
    logo: '/mark.svg',
    siteTitle: 'PAI Docs',
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        translations: {
          button: { buttonText: 'Search', buttonAriaLabel: 'Search documentation' },
        },
      },
    },
    nav: [
      { text: 'Guides', link: '/guides/verify-agent' },
      { text: 'Reference', link: '/reference/pai-core' },
      { text: 'Protocols', link: '/protocols/ppp', activeMatch: '/protocols/' },
      { text: 'Ecosystem', link: '/ecosystem/pai-list' },
      { text: 'GitHub ↗', link: 'https://github.com/pai-list' },
    ],
    sidebar: {
      '/getting-started/': section('Getting started', [
        ['Overview', '/getting-started/overview'],
        ['Installation', '/getting-started/installation'],
        ['Your first agent', '/getting-started/your-first-agent'],
        ['Pi wallet setup', '/getting-started/pi-wallet-setup'],
      ]),
      '/core-concepts/': section('Core concepts', [
        ['Architecture', '/core-concepts/architecture'],
        ['Skills', '/core-concepts/skills'],
        ['Identity', '/core-concepts/identity'],
        ['Trust & verification', '/core-concepts/trust'],
      ]),
      '/guides/': section('Guides', [
        ['Verification agent', '/guides/verify-agent'],
        ['Trust agent', '/guides/trust-agent'],
        ['Identity agent', '/guides/identity-agent'],
        ['Payment agent', '/guides/payment-agent'],
        ['Testing agents', '/guides/testing-agents'],
        ['Production deployment', '/guides/production-deployment'],
      ]),
      '/reference/': section('Reference', [
        ['@pai/core', '/reference/pai-core'],
        ['@pai/verify', '/reference/pai-verify'],
        ['@pai/identity', '/reference/pai-identity'],
        ['@pai/payments', '/reference/pai-payments'],
        ['PAI CLI', '/reference/pai-cli'],
        ['PAI MCP', '/reference/pai-mcp'],
        ['Configuration', '/reference/configuration'],
      ]),
      '/tutorials/': section('Tutorials', [
        ['Hackathon guide', '/tutorials/hackathon-guide'],
        ['Monetization', '/tutorials/monetization'],
        ['ACP integration', '/tutorials/acp-integration'],
        ['Pi Browser deploy', '/tutorials/pi-browser-deploy'],
      ]),
      '/ecosystem/': section('Ecosystem', [
        ['PAI List', '/ecosystem/pai-list'],
        ['Contributing', '/ecosystem/contributing'],
        ['Security', '/ecosystem/security'],
        ['Roadmap', '/ecosystem/roadmap'],
        ['Changelog', '/ecosystem/changelog'],
      ]),
      '/protocols/ppp/': section('PAI Protocol (PPP)', [
        ['Overview', '/protocols/ppp'],
        ['Message Format', '/protocols/ppp/spec/message-format'],
        ['Header', '/protocols/ppp/spec/header'],
        ['Body', '/protocols/ppp/spec/body'],
        ['Receipt & TrustChain', '/protocols/ppp/spec/receipt'],
        ['Routing', '/protocols/ppp/spec/routing'],
        ['Error Handling', '/protocols/ppp/spec/error-handling'],
        ['Executive Summary', '/protocols/ppp/whitepaper/executive-summary'],
        ['Architecture', '/protocols/ppp/whitepaper/architecture'],
      ]),
      '/protocols/openidentity/': section('OpenIdentity Protocol', [
        ['Overview', '/protocols/openidentity'],
        ['Getting Started', '/protocols/openidentity/guide/getting-started'],
        ['Architecture', '/protocols/openidentity/guide/architecture'],
        ['Identity Primer', '/protocols/openidentity/guide/identity-primer'],
        ['DID Method', '/protocols/openidentity/guide/did-method'],
        ['TrustChain', '/protocols/openidentity/guide/trustchain'],
        ['Passport', '/protocols/openidentity/guide/passport'],
        ['Quickstart', '/protocols/openidentity/guide/guides/quickstart'],
        ['Integration', '/protocols/openidentity/guide/guides/integration'],
        ['SDK Setup', '/protocols/openidentity/guide/guides/sdk-setup'],
        ['Pi KYC', '/protocols/openidentity/guide/guides/pi-kyc'],
        ['Passport Verify', '/protocols/openidentity/guide/guides/passport-verify'],
        ['Trust Score', '/protocols/openidentity/guide/guides/trust-score'],
        ['Auth API', '/protocols/openidentity/reference/auth'],
        ['Memory API', '/protocols/openidentity/reference/memory'],
        ['Verify API', '/protocols/openidentity/reference/verify'],
        ['Webhooks', '/protocols/openidentity/reference/webhooks'],
        ['DID Spec', '/protocols/openidentity/reference/did-spec'],
        ['Passport Schema', '/protocols/openidentity/reference/passport-schema'],
        ['TrustChain API', '/protocols/openidentity/reference/trustchain'],
        ['Errors', '/protocols/openidentity/reference/errors'],
        ['Rate Limits', '/protocols/openidentity/reference/rate-limits'],
      ]),
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/pai-list' }],
    footer: {
      message: 'Released under the Pi Open Source License.',
      copyright: 'Copyright © 2026 PAI List',
    },
    editLink: {
      pattern: 'https://github.com/pai-list/pai-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    outline: { level: [2, 3], label: 'On this page' },
  },
});

function section(text: string, items: [string, string][]) {
  return [{ text, items: items.map(([text, link]) => ({ text, link })) }];
}
