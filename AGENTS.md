# Repository Guidelines

## Project Structure & Module Organization
- `app/` – Next.js App Router pages and layout. Main entry: `app/page.tsx`; guide embed: `app/guide/page.tsx`.
- `components/` – Reusable UI (e.g., `NavBar.tsx`, `Orbs.tsx`, `Stars.tsx`, `TerminalPreview.tsx`). PascalCase filenames.
- `public/` – Static assets served at `/`. Social image lives here; the style guide HTML is copied here on build.
- `positioning-guide/style-guide.html` – Source of the interactive guide. Do NOT edit the copy under `public/`.
- `scripts/copy-positioning.js` – Copies the guide into `public/positioning-guide/` during `dev`/`build`.
- Config: `tailwind.config.ts`, `postcss.config.cjs`, `next.config.mjs`, `.eslintrc.json`.

## Build, Test, and Development Commands
- `npm install` – Install dependencies (Node 18+).
- `npm run dev` – Start Next.js in dev. Also copies the positioning guide into `public/`.
- `npm run build` – Production build (runs the copy script first).
- `npm start` – Serve the production build.
- `npm run lint` – ESLint (Next core‑web‑vitals rules).

Examples
- Open: `/` (landing), `/guide` (embedded), `/positioning-guide/style-guide.html?theme=appshot` (full page).

## Coding Style & Naming Conventions
- Language: TypeScript + React 18, Next.js App Router.
- Components: Function components, PascalCase filenames. Add `"use client"` where needed.
- Routes: Lowercase folder names under `app/`.
- Styling: Tailwind utility‑first in JSX, shared tweaks in `app/globals.css`. Prefer Tailwind over ad‑hoc CSS.
- Linting: Keep `eslint@8.x` + `eslint-config-next@14.x`. Fix warnings before PRs.

## Testing Guidelines
- No formal test runner yet. Use `npm run lint` and manual checks.
- Manual checklist: load `/`, `/guide`, and the full guide URL; verify animations and no console errors.
- If adding tests, use `vitest` for unit and/or `playwright` for e2e under `tests/` or `e2e/`.

## Commit & Pull Request Guidelines
- Conventional commit style: `feat: …`, `fix: …`, `chore: …`, `docs: …`.
  - Example: `fix: tailwind keyframes typing in config`.
- PRs should include: short description, screenshots/GIFs for UI changes, and confirmation you ran `npm run lint` and `npm run dev` locally.

## Security & Configuration Tips
- No secrets required. Do not commit `.env*`.
- Keep `postcss.config.cjs` (CJS) to avoid ESM errors.
- Tailwind keyframe CSS values should be strings (e.g., `opacity: "0.6"`).
- Update `metadataBase` in `app/layout.tsx` when adding a custom domain.
