# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Landing page for App Shot (https://github.com/chrisvanbuskirk/appshot), an open-source screenshot builder inspired by vibetunnel.sh aesthetics. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

## Development Commands

```bash
npm run dev        # Start development server (port 3000)
npm run build      # Build for production
npm run start      # Serve production build
npm run lint       # Run ESLint checks
```

Note: Both `dev` and `build` automatically copy the positioning guide from `/positioning-guide/` to `/public/positioning-guide/`.

## Architecture & Code Structure

### Tech Stack
- **Next.js 14** with App Router (not Pages Router)
- **React 18** with TypeScript
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for animations
- **Client Components**: Most components use `"use client"` directive

### Key Architectural Patterns

1. **Cosmic Glass Theme**: Dark background (#0b0b11) with gradient orbs, starfield, and glass morphism effects. Custom animations defined in `globals.css`:
   - `float`, `pulseSlow`, `wiggle`, `blob`, `grid` keyframes
   - Glass effects using backdrop-blur and transparency

2. **Component Organization**:
   - `/app/` - Next.js App Router pages and layouts
   - `/components/` - Reusable UI components (PascalCase naming)
   - Main interactive element: `TerminalPreview.tsx` with randomized appshot command demos

3. **Terminal Preview**: Core feature showing animated terminal output with:
   - Randomized commands, devices, gradients, and languages on each load
   - Auto-scrolling during animation
   - ASCII "Appshot" logo
   - Realistic terminal window styling

### Important Configuration Details

- **ESLint**: Keep version 8.x with eslint-config-next@14.x (don't upgrade to v9)
- **PostCSS**: Config must remain CommonJS (`.cjs`) to avoid ESM errors
- **Tailwind**: Keyframe values must be strings (e.g., `opacity: "0.6"`)
- **TypeScript**: Strict mode enabled with path aliases (`@/*`)

### Routing Structure
- `/` - Main landing page with hero, terminal demo, and install section
- `/guide` - Embedded positioning guide iframe
- `/positioning-guide/style-guide.html` - Full interactive style guide (copied from source during build)

## Development Guidelines from AGENTS.md

- **Style**: Tailwind utility-first, avoid inline styles, use Framer Motion for animations
- **Components**: React 18 hooks, TypeScript interfaces, functional components only
- **Testing**: Manual checks via development server (future: vitest + playwright)
- **Commits**: Use conventional commits (feat:, fix:, docs:, style:, refactor:, test:, chore:)
- **Security**: Never commit API keys or sensitive data

## Project-Specific Context

The landing page showcases appshot's capabilities through an animated terminal that demonstrates the tool's workflow. The terminal content randomizes on each page load to show different:
- Commands (build, frame, gradients, caption, watch)
- Devices (iPhone, iPad, MacBook, Pixel)
- Gradients with color codes
- Language localizations
- Optimization statistics

The positioning guide (`/positioning-guide/style-guide.html`) is a 7000+ line interactive reference that gets copied to public during build/dev via the `scripts/copy-positioning.js` script.