# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 portfolio/marketing website for Haestus, an AI architecture and full-stack engineering firm. The site features heavy visual effects including video backgrounds, 3D animations with Three.js, and smooth scroll animations with GSAP and Framer Motion.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
next build

# Run production build locally
npm start

# Run linter
npm run lint
```

The dev server runs at http://localhost:3000

## Architecture & Code Structure

### Component Organization

The codebase uses a clear separation between components and sections:

- **`src/components/`** - Reusable UI components
  - `PremiumHeader.tsx` - Global navigation header
  - `ChatOrb.tsx` - Floating AI chat widget
  - `Homepage/` - Homepage-specific components (hero sections, tech stack displays, video backgrounds)
  - `header/` - Header variations
  - `modals/` - Modal components

- **`src/sections/`** - Full-page sections that compose the main page
  - Each section represents a distinct content area (Hero, Portfolio, Connect, etc.)
  - Sections are imported and arranged in `src/app/page.tsx`

- **`src/hooks/`** - Custom React hooks (e.g., `useScrollPosition.ts`)

- **`src/utils/`** - Utility functions (e.g., `smoothScroll.ts`)

### Page Structure

The main page (`src/app/page.tsx`) is a client component that:
- Composes sections in a specific order
- Uses hash-based navigation for scroll-to-section behavior
- Overlays a `VideoBackground` component behind all content
- Includes a floating `ChatOrb` chat widget

All sections are wrapped in divs with IDs (`#home`, `#insights`, `#architecture`, `#community`, `#connect`) for hash navigation.

### Styling Approach

- **Tailwind CSS v4** - Primary styling system
- **CSS Variables** - Defined in `src/app/globals.css` for colors and theme tokens
- **Custom Fonts** - Multiple Google Fonts loaded in layout:
  - Orbitron (headings) - `--font-heading`
  - Rajdhani (body) - `--font-body`
  - Geist Sans/Mono (system fonts)
  - Dancing Script (signature) - `--font-signature`

### Animation Stack

Multiple animation libraries are used throughout:
- **Framer Motion** - Component animations and transitions
- **GSAP** - Complex scroll-based animations
- **Three.js + React Three Fiber** - 3D graphics and effects
- **Lenis** - Smooth scrolling

### Video Assets

Video backgrounds are hosted on Cloudflare R2 CDN:
- Main background: `https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/`
- Videos are autoplaying, muted, looping, and use `playsInline` for mobile compatibility

### State Management

- **Zustand** - Client state management
- **Jotai** - Atomic state management
- Client components use `'use client'` directive (Next.js App Router requirement)

### Path Aliases

TypeScript path alias configured in `tsconfig.json`:
- `@/*` maps to `src/*`

Example: `import Hero from '@/sections/Hero'`

## Key Technical Patterns

### Client vs Server Components

Most components use `'use client'` due to:
- Heavy use of React hooks (useState, useEffect)
- Browser APIs (window, scroll listeners)
- Animation libraries requiring DOM access

### Hash Navigation

The site implements custom hash-based section navigation:
- Header offset calculated based on screen size (64px mobile, 80px desktop)
- Smooth scroll behavior enabled globally via `scroll-behavior: smooth` in CSS
- `useEffect` hook in main page handles initial hash navigation on page load

### Responsive Design

- Mobile-first approach with Tailwind breakpoints
- Video elements have `minWidth`/`minHeight` constraints for small screens
- Responsive text sizing using Tailwind's `md:` prefix

## Asset Management

- **Logos/Icons** - Stored in `public/logos/` and `public/logos/TechStack/`
- **Favicons** - Multiple sizes in `public/` (referenced in layout metadata)
- **Videos** - External CDN (Cloudflare R2)

## Dependencies Note

The project uses React 19 and Next.js 16 (cutting edge versions). Some third-party libraries may show peer dependency warnings but are generally compatible.

## Styling Philosophy

The design emphasizes:
- Dark theme (black backgrounds: `#000` or `bg-black`)
- High contrast white text with transparency layers (`text-white/90`)
- Glassmorphism effects (`backdrop-blur`, `bg-black/80`)
- Orange accent color (`#ff6b35`, `--accent-brand`)
- Minimal borders with `border-white/20` style transparency
