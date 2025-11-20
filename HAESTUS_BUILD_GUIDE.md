# HAESTUS.DEV - BUILD GUIDE

Quick reference for implementing the website from PRD specs. This guide bridges the PRD specifications to actual development.

---

## Tech Stack Quick Reference

### Initial Setup

```bash
# Create Next.js project (if starting fresh)
npx create-next-app@latest haestus-dev --typescript --tailwind --app

# Navigate to project
cd haestus-dev
```

### Required Dependencies

```bash
# Core Animation Libraries
npm install framer-motion gsap lenis

# 3D Graphics
npm install three @react-three/fiber @react-three/drei

# State Management
npm install zustand jotai

# Utilities
npm install clsx tailwind-merge
npm install @types/three --save-dev
```

### Configuration Snippets

**tailwind.config.js**
```javascript
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'accent-brand': '#ff6b35',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        signature: ['var(--font-signature)', 'cursive'],
      },
    },
  },
}
```

**next.config.js**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['pub-7824dae2ffd24193b52760c54972be1d.r2.dev'],
  },
}

module.exports = nextConfig
```

---

## Component Architecture

### Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles & CSS variables
├── components/
│   ├── PremiumHeader.tsx   # Global navigation
│   ├── ChatOrb.tsx         # AI chat widget
│   ├── Homepage/           # Homepage-specific components
│   ├── header/             # Header variations
│   └── modals/             # Modal components
├── sections/
│   ├── Hero.tsx            # Hero section
│   ├── Portfolio.tsx       # Portfolio showcase
│   ├── Connect.tsx         # Contact section
│   └── [Section].tsx       # Other sections
├── hooks/
│   └── useScrollPosition.ts
├── utils/
│   └── smoothScroll.ts
└── types/
    └── index.ts            # TypeScript interfaces
```

### Component Hierarchy

```
Page (src/app/page.tsx)
├── VideoBackground (global)
├── PremiumHeader (sticky)
├── Sections (in order)
│   ├── Hero (#home)
│   ├── Insights (#insights)
│   ├── Architecture (#architecture)
│   ├── Community (#community)
│   └── Connect (#connect)
└── ChatOrb (floating)
```

### Naming Conventions

- **Components**: PascalCase (e.g., `PremiumHeader.tsx`)
- **Sections**: PascalCase (e.g., `Hero.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useScrollPosition.ts`)
- **Utils**: camelCase (e.g., `smoothScroll.ts`)
- **IDs for sections**: kebab-case matching hash routes (e.g., `#home`, `#insights`)

---

## Animation Implementation

### Framer Motion Patterns

**Basic Fade In**
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

**Stagger Children**
```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

<motion.div variants={container} initial="hidden" animate="show">
  <motion.div variants={item}>Item 1</motion.div>
  <motion.div variants={item}>Item 2</motion.div>
</motion.div>
```

### GSAP Particle Grid Setup

```tsx
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function ParticleGrid() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const particles = containerRef.current.querySelectorAll('.particle')

    gsap.to(particles, {
      y: 'random(-20, 20)',
      x: 'random(-20, 20)',
      duration: 'random(2, 4)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: {
        amount: 1,
        from: 'random'
      }
    })
  }, [])

  return <div ref={containerRef}>{/* particles */}</div>
}
```

### Lenis Smooth Scroll Config

```tsx
'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
```

---

## Development Workflow

### Phase-by-Phase Checklist

**Phase 1: Foundation**
- [ ] Initialize Next.js 14+ project
- [ ] Install core dependencies
- [ ] Configure Tailwind CSS v4
- [ ] Set up fonts (Orbitron, Rajdhani, Dancing Script)
- [ ] Create base folder structure
- [ ] Set up CSS variables in `globals.css`

**Phase 2: Core Components**
- [ ] Build `PremiumHeader` component
- [ ] Implement hash-based navigation
- [ ] Create `VideoBackground` component
- [ ] Set up responsive layouts
- [ ] Test mobile breakpoints

**Phase 3: Sections**
- [ ] Hero section with animations
- [ ] Insights section
- [ ] Architecture section
- [ ] Community section
- [ ] Connect/Contact section

**Phase 4: Advanced Features**
- [ ] Implement Three.js 3D effects
- [ ] Add GSAP scroll animations
- [ ] Integrate Lenis smooth scroll
- [ ] Build ChatOrb widget
- [ ] Add particle effects

**Phase 5: Polish**
- [ ] Performance optimization
- [ ] Mobile testing
- [ ] Cross-browser testing
- [ ] Accessibility audit
- [ ] SEO optimization

**Phase 6: Deployment**
- [ ] Production build test
- [ ] Environment variables setup
- [ ] Deploy to Vercel/hosting platform
- [ ] Post-deployment testing

### Testing Procedures

```bash
# Local development
npm run dev
# Test at http://localhost:3000

# Production build test
npm run build
npm start

# Lint check
npm run lint

# Type check
npx tsc --noEmit
```

**Manual Testing Checklist**
- [ ] All sections load correctly
- [ ] Hash navigation works (#home, #insights, etc.)
- [ ] Animations trigger on scroll
- [ ] Videos autoplay and loop
- [ ] Mobile responsive (test 375px, 768px, 1024px, 1920px)
- [ ] Header sticky behavior
- [ ] ChatOrb opens/closes
- [ ] All links functional

### Deployment Steps

```bash
# 1. Ensure clean build
npm run build

# 2. Test production locally
npm start

# 3. Commit changes
git add .
git commit -m "feat: [description]"
git push origin [branch-name]

# 4. Deploy (Vercel example)
vercel --prod

# Or using Vercel Git integration - push triggers auto-deploy
```

---

## Code Patterns

### Reusable Component Templates

**Client Component with Animation**
```tsx
'use client'
import { motion } from 'framer-motion'

interface Props {
  title: string
  description: string
}

export default function Card({ title, description }: Props) {
  return (
    <motion.div
      className="bg-black/80 backdrop-blur p-6 rounded-lg border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="font-heading text-xl text-white">{title}</h3>
      <p className="font-body text-white/80 mt-2">{description}</p>
    </motion.div>
  )
}
```

**Section Template**
```tsx
'use client'
import { motion } from 'framer-motion'

export default function SectionName() {
  return (
    <section id="section-name" className="min-h-screen py-20 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-heading text-4xl md:text-6xl text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Section Title
        </motion.h2>

        {/* Content */}
      </div>
    </section>
  )
}
```

### TypeScript Interfaces

```typescript
// src/types/index.ts

export interface NavigationItem {
  label: string
  href: string
  external?: boolean
}

export interface ProjectCard {
  id: string
  title: string
  description: string
  imageUrl: string
  tags: string[]
  link?: string
}

export interface TechStackItem {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'ai' | 'infrastructure'
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
```

### Tailwind Config

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-brand': '#ff6b35',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        signature: ['var(--font-signature)', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

---

## Troubleshooting

### Common Animation Issues

**Framer Motion not triggering**
- Ensure component has `'use client'` directive
- Check `viewport={{ once: true }}` is set for scroll animations
- Verify element is actually in viewport when scrolling

**GSAP animations stuttering**
- Use `will-change: transform` CSS property
- Reduce number of animated elements
- Use `gsap.set()` for initial states

**Lenis conflicts with hash navigation**
- Disable Lenis temporarily during hash scroll
- Or manually trigger scroll with `lenis.scrollTo()`

### Performance Optimization Tips

**Video Backgrounds**
```html
<!-- Optimize video delivery -->
<video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="object-cover"
  style={{ minWidth: '100%', minHeight: '100%' }}
>
  <source src="video.mp4" type="video/mp4" />
</video>
```

**Lazy Load Sections**
```tsx
import dynamic from 'next/dynamic'

const Portfolio = dynamic(() => import('@/sections/Portfolio'), {
  loading: () => <div>Loading...</div>
})
```

**Image Optimization**
```tsx
import Image from 'next/image'

<Image
  src="/logos/logo.png"
  alt="Logo"
  width={200}
  height={50}
  priority // For above-fold images
/>
```

**Code Splitting**
- Use dynamic imports for heavy components
- Lazy load Three.js components
- Split vendor bundles

### Mobile-Specific Fixes

**Video not autoplaying on iOS**
- Always include `playsInline` attribute
- Ensure video is muted
- Test on actual iOS device (not just simulator)

**Animations janky on mobile**
- Reduce complexity of animations
- Use CSS transforms instead of position changes
- Disable parallax on mobile devices

**Touch scrolling issues**
```css
/* Add to globals.css */
* {
  -webkit-overflow-scrolling: touch;
}
```

**Viewport height on mobile**
```css
/* Use dvh (dynamic viewport height) for full-screen sections */
.hero {
  min-height: 100dvh; /* Falls back to 100vh */
}
```

---

## Quick Commands

### Development Server

```bash
# Start dev server
npm run dev

# Start on different port
npm run dev -- -p 3001

# Turbopack (faster)
npm run dev -- --turbo
```

### Build Commands

```bash
# Production build
npm run build

# Analyze bundle size
npm run build -- --analyze

# Type check
npx tsc --noEmit

# Lint
npm run lint

# Lint with auto-fix
npm run lint -- --fix
```

### Deployment Scripts

```bash
# Vercel
vercel --prod

# Build and export static
npm run build && npx next export

# Environment-specific builds
NODE_ENV=production npm run build
```

### Utility Commands

```bash
# Clear Next.js cache
rm -rf .next

# Clear node modules and reinstall
rm -rf node_modules package-lock.json && npm install

# Check outdated packages
npm outdated

# Update packages
npm update
```

---

## Additional Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Framer Motion**: https://www.framer.com/motion/
- **GSAP**: https://greensock.com/gsap/
- **Three.js**: https://threejs.org/docs/
- **Tailwind CSS**: https://tailwindcss.com/docs

---

**Last Updated**: 2025-11-20
**Maintainer**: Haestus Development Team
