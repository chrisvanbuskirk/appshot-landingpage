# App Shot — Landing Page

Tiny Next.js + Tailwind site for App Shot (open‑source screenshot builder). It riffs on vibetunnel.sh with animated orbs, a starfield, and a glassy UI.

## Quick start (local)

Requirements: Node 18+ or 20+

```
npm install
npm run dev
```

Open http://localhost:3000

## Vercel setup

- Framework Preset: `Next.js`
- Root: `./`
- Build: `next build`
- Output: `.next`

## Positioning Guide

- Source: `positioning-guide/style-guide.html`
- Public: `/positioning-guide/style-guide.html?theme=appshot` (auto‑copied on dev/build)
- Embedded route: `/guide`

## Configure Quick Start Install Snippet

Customize the landing page’s install commands without code changes via env vars:

- `NEXT_PUBLIC_INSTALL_CMD` (default: `npm install -g appshot`)
- `NEXT_PUBLIC_NPX_CMD` (default: `npx appshot@latest build ./screenshots`)

Set them in Vercel → Project → Settings → Environment Variables, then redeploy.

## Where to edit

- `app/page.tsx` – main content (hero, preview, quick start)
- `components/` – UI parts (nav, background, terminal preview)
- `app/globals.css` – Tailwind + custom effects
