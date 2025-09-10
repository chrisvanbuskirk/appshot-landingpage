# App Shot — Landing Page

This is a tiny Next.js site for the App Shot project (an open‑source screenshot builder). It’s inspired by the vibes of vibetunnel.sh — gradient orbs, subtle starfield, and glassy UI.

Live deploy is intended for Vercel.

## Quick start (local)

- Requirements: Node 18+ or 20+
- Install and run:

```
npm install
npm run dev
```

Open http://localhost:3000

## Vercel setup

- Framework Preset: `Next.js`
- Root Directory: `./`
- Build Command: `next build` (default)
- Output Directory: `.next` (default)
- No environment variables required.

After the first deploy, Vercel will detect Next.js automatically.

## Positioning Guide

- Static asset: `positioning-guide/style-guide.html`
- Copied into `public/positioning-guide/style-guide.html` by a pre-dev/build script.
- In-app route: `/guide` (embeds the HTML). Full page: `/positioning-guide/style-guide.html?theme=appshot` (uses the App Shot dark theme).

## Where to edit

- `app/page.tsx` — main landing page content
- `components/*` — small UI pieces (nav, background orbs, stars)
- `app/globals.css` — Tailwind and custom effects

## Links

- App Shot repo: https://github.com/chrisvanbuskirk/appshot
