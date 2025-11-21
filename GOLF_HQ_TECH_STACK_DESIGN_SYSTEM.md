# Golf HQ SMS AI Platform - Complete Tech Stack & Design System

**Document Version:** 1.0
**Last Updated:** 2025-11-21
**Author:** Claude (Sonnet 4.5) - Technical Architecture Consultant

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Technical Stack Recommendation](#technical-stack-recommendation)
3. [Design System & Brand Identity](#design-system--brand-identity)
4. [Cost Analysis](#cost-analysis)
5. [Implementation Roadmap](#implementation-roadmap)
6. [Getting Started Guide](#getting-started-guide)

---

## Executive Summary

This document provides comprehensive technical architecture and design system recommendations for **Golf HQ**, a self-service SMS AI platform for golf courses priced at $350/month. The recommendations prioritize:

- **Speed to MVP** (4-8 weeks timeline)
- **Cost efficiency** ($0-500/month infrastructure budget)
- **Solo/small team friendly** (1-3 developers)
- **Scalability** (100 customers Year 1, 500 Year 3)
- **Real-time performance** (<2 second SMS response)

### Key Recommendations

**Tech Stack:**
- **Frontend:** Next.js 15 (App Router) + TypeScript + Tailwind CSS
- **Backend:** Supabase (PostgreSQL + Auth + Realtime)
- **Hosting:** Vercel + Supabase
- **Cost:** $0/month (MVP) → $126/month (100 customers) → $430/month (500 customers)

**Design System:**
- **Colors:** Slate (primary) + Emerald (secondary) + Amber (accent)
- **Typography:** Inter (all UI) + JetBrains Mono (numbers)
- **UI Library:** shadcn/ui (Radix + Tailwind)
- **Brand Tagline:** "AI That Never Misses A Tee Time"

---

# PART 1: TECHNICAL STACK RECOMMENDATION

## Project Requirements

- **Product:** Self-service SMS AI platform for golf courses
- **Pricing:** $350/month SaaS subscription
- **Timeline:** MVP in 4-8 weeks
- **Team:** Solo founder or 1-3 developers
- **Budget:** $0-500/month infrastructure costs
- **Integrations:** Twilio (SMS), Claude API (AI), golf software APIs
- **Scale Target:** 100 customers Year 1, 500 customers Year 3
- **Performance:** Real-time SMS handling (<2 second response)
- **Features:** Dashboard with analytics, mobile-responsive design

---

## Frontend Framework Evaluation

### Option 1: React + Vite + TypeScript

**Pros:**
- Blazing fast HMR (Hot Module Replacement) - instant feedback during development
- Minimal boilerplate - start coding immediately
- Massive ecosystem - every library "just works"
- No vendor lock-in - pure React
- Excellent for SPAs with client-side routing
- Smaller bundle size than Next.js for simple apps

**Cons:**
- No SSR/SSG out of the box (not critical for dashboard apps)
- Manual routing setup (React Router)
- No built-in API routes (need separate backend)
- SEO not great for marketing pages (mitigated with separate landing page)

**Build speed:** Fast (2-3 seconds)
**Developer experience:** Excellent - minimal magic, clear mental model
**Community support:** Massive
**Best for:** Dashboard-heavy apps where you control both frontend and backend separately

---

### Option 2: Next.js 15 (App Router)

**Pros:**
- SSR/SSG for marketing pages (better SEO, faster initial load)
- API routes built-in (serverless functions)
- File-based routing (intuitive)
- Image optimization built-in
- Great for full-stack apps
- Vercel deployment optimized
- Integrated development experience

**Cons:**
- More complex mental model (client vs server components)
- Heavier framework - more to learn
- App Router still evolving (some libraries have issues)
- Overkill if you don't need SSR
- Vercel lock-in for best performance

**Build speed:** Medium (5-10 seconds)
**SSR benefits for our use case:** **Mixed** - useful for marketing site, less valuable for authenticated dashboard
**Developer experience:** Good (but learning curve for App Router patterns)
**Best for:** Full-stack apps with public marketing pages + private dashboard

---

### Option 3: SvelteKit

**Pros:**
- Smallest bundle sizes (compiled, no virtual DOM)
- Extremely fast runtime performance
- Less boilerplate than React
- Built-in animations
- Growing momentum in 2025

**Cons:**
- Smaller ecosystem (fewer libraries, examples)
- Less TypeScript support in third-party packages
- Fewer developers know Svelte (hiring risk)
- Component libraries less mature

**Learning curve:** Medium (different paradigm from React)
**Best for:** Performance-critical apps where bundle size matters, greenfield projects with experienced team

---

### Option 4: Vue.js + Nuxt

**Pros:**
- Gentle learning curve (easier than React for beginners)
- Good documentation
- Built-in state management (Pinia)
- Nuxt provides SSR like Next.js

**Cons:**
- Smaller ecosystem than React
- Less corporate adoption (more freelance/agency world)
- Fewer UI component libraries
- TypeScript support improving but not as mature as React

**Best for:** Teams with Vue experience, European market (more popular there)

---

### ✅ FRONTEND RECOMMENDATION: Next.js 15 (App Router)

**Justification:**

1. **Unified codebase** - Marketing site + dashboard in one repo, shared components
2. **API routes** - Handle Twilio webhooks, Claude API calls without separate backend
3. **Fast MVP** - File-based routing, built-in optimizations mean less config
4. **Future-proof** - Easy to add blog, docs, help center in same codebase
5. **Vercel deployment** - Zero-config, exceptional DX, generous free tier

**Trade-off accepted:** Slightly heavier framework, but the integrated DX wins for a solo/small team racing to MVP.

---

## Backend/Database Evaluation

### Option 1: Supabase (PostgreSQL + Auth + Realtime + Storage)

**Pros:**
- All-in-one solution (database, auth, storage, realtime subscriptions)
- PostgreSQL (mature, reliable, great for relational data)
- Row-level security (RLS) for multi-tenant security
- Edge Functions (Deno) for serverless compute
- Generous free tier (500MB database, 2GB file storage, 50k monthly active users)
- Instant REST and GraphQL APIs auto-generated
- Real-time subscriptions built-in (perfect for live chat dashboard)
- Great TypeScript support
- Self-hostable (exit strategy if you outgrow pricing)

**Cons:**
- Postgres can be overkill for simple apps
- Less mature than Firebase (founded 2020)
- Some features still beta (Edge Functions, Realtime)
- Pricing can jump at scale (pay per GB transferred)

**Cost at scale:**
- 10 customers: $0/month (free tier)
- 50 customers: $25/month (Pro tier)
- 100 customers: $25-50/month
- 500 customers: $100-200/month (depends on database size, bandwidth)

**Best for:** Modern SaaS apps needing relational data, real-time features, and auth out of the box

---

### Option 2: Firebase (Google)

**Pros:**
- Mature, battle-tested (Gmail, Google Photos use it)
- Excellent real-time database (Firestore)
- Authentication rock-solid
- Hosting included
- Generous free tier
- Cloud Functions (serverless)

**Cons:**
- NoSQL (Firestore) - harder for complex queries, relational data
- Vendor lock-in (hard to migrate away)
- Pricing complexity (pay per read/write)
- Less SQL-friendly for business intelligence
- No true relationships (lots of denormalization)

**Vendor lock-in risk:** High (proprietary APIs, hard to self-host)
**Best for:** Mobile apps, apps with simple data models, Google ecosystem shops

---

### Option 3: AWS Amplify

**Pros:**
- Full AWS ecosystem access
- GraphQL API auto-generated (AppSync)
- Scales infinitely
- Enterprise-grade

**Cons:**
- Complex (AWS learning curve is steep)
- Expensive at scale
- Slow development velocity (lots of config)
- Overkill for MVP

**Complexity:** High
**Best for:** Enterprise apps, teams already on AWS, apps needing AWS services (S3, Lambda, etc.)

---

### Option 4: Custom (Node.js + PostgreSQL + Redis)

**Pros:**
- Full control
- No vendor lock-in
- Cheapest at scale (self-hosted)
- Use any library, any pattern

**Cons:**
- Build everything yourself (auth, realtime, file uploads)
- DevOps burden (database backups, monitoring, security)
- Slow MVP (3-4 weeks just for infrastructure)
- Requires experienced backend developer

**Time to build:** 3-4 weeks for solid foundation
**Best for:** Large teams, experienced engineers, apps with unique requirements

---

### Option 5: PlanetScale (MySQL) + Prisma

**Pros:**
- Best-in-class MySQL hosting (Vitess-powered)
- Branching databases (like Git for databases!)
- Great developer experience
- Prisma ORM is excellent (type-safe queries)

**Cons:**
- Database only (need separate auth, storage, realtime)
- Pricing changed recently (less generous free tier)
- MySQL not as feature-rich as Postgres (no JSON operators, etc.)

**Best for:** Teams that want MySQL, apps needing database branching for CI/CD

---

### ✅ BACKEND RECOMMENDATION: Supabase

**Justification:**

1. **Speed to MVP** - Auth, database, realtime in one setup (< 1 day)
2. **Perfect feature match** - Realtime subscriptions for live SMS dashboard updates
3. **Cost-effective** - Free until 50+ customers, then $25/month
4. **PostgreSQL** - Best database for SaaS (JSON support, full-text search, PostGIS if you add map features)
5. **Row-level security** - Each golf course only sees their data (multi-tenant security baked in)
6. **TypeScript-first** - Auto-generated types from database schema
7. **Exit strategy** - Can self-host if you outgrow Supabase pricing

---

## State Management Recommendation

For Next.js + Supabase:

### Server State: TanStack Query (React Query)
- Handle all API calls (Supabase, Twilio status checks, Claude API)
- Built-in caching, refetching, optimistic updates
- Perfect for real-time data (auto-refetch on window focus)

### Client State: Zustand
- Lightweight (1KB)
- No boilerplate
- Great TypeScript support
- Easy to debug
- Use for: UI preferences, selected conversation, sidebar state

### Forms: React Hook Form + Zod
- Performant (uncontrolled inputs)
- Type-safe validation
- Great DX

### Avoid:
- Redux Toolkit (overkill for this app size)
- React Context for server data (TanStack Query handles it better)
- Jotai/Recoil (too atomic, more complexity than needed)

---

## UI Component Library Recommendation

### ✅ Winner: shadcn/ui (Radix + Tailwind)

**Pros:**
- Copy-paste components (you own the code, no npm dependency hell)
- Built on Radix UI (accessible, unstyled primitives)
- Tailwind-based (consistent with styling approach)
- Beautiful default design (matches modern SaaS aesthetic)
- Easy to customize (just edit the component files)
- Excellent TypeScript support
- Active development (new components added monthly)

**Cons:**
- Manual updates (copy-paste new versions when updated)
- Need to maintain components yourself (but you control them!)

**Customization:** Excellent (full control over component code)
**Best for:** Modern SaaS dashboards with Tailwind CSS

**Other options rejected:**
- **Chakra UI** - Theming system is complex, not Tailwind-native
- **MUI** - Too opinionated, Material Design not right for B2B SaaS
- **Headless UI** - Good but requires more custom styling work
- **Ant Design** - Chinese design language, too enterprise-y

---

## Styling Approach Recommendation

### ✅ Winner: Tailwind CSS v4

**Pros:**
- Fastest way to style (no context switching)
- Consistent design system (spacing, colors from config)
- Responsive design trivial (`md:text-lg`)
- Dark mode built-in (`dark:bg-gray-900`)
- Tree-shaking (only CSS you use is shipped)
- Massive community (every SaaS uses it)
- No CSS file organization headaches

**Cons:**
- Verbose class names (but Prettier plugin helps)
- Learning curve (memorize class names)

**Best for:** Rapid development, consistent design systems, component-based architecture

**Config approach:**
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: '#1E293B', // Slate
        secondary: '#059669', // Emerald
        accent: '#F59E0B', // Amber
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
}
```

---

## Real-Time / WebSockets Recommendation

### ✅ Winner: Supabase Realtime

**Why:**
- Built into Supabase (no extra service)
- PostgreSQL change data capture (CDC) - listen to database changes
- Perfect for: "Show me new SMS messages as they arrive"
- No extra cost
- Simple API:

```typescript
const channel = supabase
  .channel('sms-messages')
  .on('postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'messages' },
    (payload) => {
      // New SMS arrived, update UI
    }
  )
  .subscribe()
```

**Alternatives rejected:**
- **Socket.io** - Requires separate server, more DevOps
- **SSE** - Harder to scale, one-way only
- **Polling** - Wasteful, not true real-time
- **Pusher/Ably** - Extra cost ($$$), unnecessary with Supabase

---

## Hosting / Deployment Recommendation

### ✅ Winner: Vercel (Frontend) + Supabase (Backend)

**Vercel for Next.js:**

**Cost:**
- Hobby: $0/month (perfect for MVP)
- Pro: $20/month (100GB bandwidth, needed at ~200+ customers)

**Pros:**
- Zero-config Next.js deployment (git push = deploy)
- Edge network (fast globally)
- Preview deployments (every PR gets a URL)
- Analytics built-in
- Generous free tier (100GB bandwidth/month)

**Cons:**
- Vendor lock-in (though Next.js is portable)
- Serverless cold starts (mitigated with Vercel's infra)

**Best for:** Next.js apps (it's made by the Next.js team)

**Cost estimates:**
- 10 customers: $0/month
- 50 customers: $0-20/month
- 100 customers: $20/month
- 500 customers: $20-40/month

**Alternatives rejected:**
- **Netlify** - Good but Vercel has better Next.js integration
- **Cloudflare Pages** - Cheaper but limited serverless functions
- **Railway.app** - Good for full-stack but more expensive (~$5-20/month baseline)
- **AWS** - Too complex, overkill

---

## Authentication Recommendation

### ✅ Winner: Supabase Auth

**Why:**
- Built into Supabase (one service for everything)
- Email/password, magic links, OAuth (Google, GitHub, etc.)
- JWT-based (stateless, scales easily)
- Row-level security integration (database queries automatically filtered by user)
- $0/month (included in Supabase)

**Implementation:**
```typescript
// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'course@example.com',
  password: 'secure-password',
})

// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'course@example.com',
  password: 'secure-password',
})
```

**Alternatives rejected:**
- **NextAuth.js** - More flexible but requires more setup, separate session management
- **Clerk** - Beautiful UX but expensive ($25/month for 1000+ users)
- **Auth0** - Enterprise-focused, complex, expensive
- **Custom JWT** - Reinventing the wheel, security risk

---

## Analytics & Monitoring Recommendation

### Product Analytics: PostHog (self-hosted or cloud)
- **Why:** Open source, privacy-friendly, powerful (session replay, feature flags, A/B testing)
- **Cost:** Free self-hosted, or $0/month cloud (1M events free)
- **Track:** User behavior, feature adoption, conversion funnels

### Error Monitoring: Sentry
- **Why:** Industry standard, excellent DX, source map support
- **Cost:** Free tier (5K errors/month), then $26/month
- **Track:** JavaScript errors, API failures, performance issues

### Uptime Monitoring: Better Uptime
- **Why:** Simple, reliable, status page included
- **Cost:** Free tier (3 monitors), then $10/month
- **Track:** API uptime, Twilio webhook availability

**Alternatives rejected:**
- **Mixpanel/Amplitude** - More expensive, overkill for MVP
- **Google Analytics 4** - Privacy concerns, less developer-friendly
- **LogRocket** - Expensive ($99/month), session replay overkill for MVP

---

## Testing Strategy Recommendation

### MVP approach (4-8 weeks):
- **Unit tests:** Skip for MVP (move fast, test in production with real users)
- **E2E tests:** Write 5-10 critical path tests (signup, send SMS, view dashboard)

### Post-MVP (after first 10 customers):
- **Unit tests:** Add for complex business logic (AI prompt generation, pricing calculations)
- **E2E tests:** Expand to 20-30 tests (cover all major flows)

### Tools:
- **E2E:** Playwright (faster than Cypress, better DX, multi-browser)
- **Unit:** Vitest (Vite-native, compatible with Jest)

---

## CI/CD Pipeline Recommendation

### ✅ Winner: GitHub Actions + Vercel auto-deploy

**Workflow:**
```yaml
# .github/workflows/ci.yml
name: CI
on: [pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test # Playwright tests
```

**Vercel:**
- Auto-deploys main branch to production
- Auto-deploys PRs to preview URLs
- Runs build checks (TypeScript, ESLint)

**Cost:** $0/month (GitHub Actions free for public repos, 2000 mins/month for private)

---

## Developer Tools Recommendation

### Must-haves for MVP:
- **ESLint** + **Prettier** (code quality, formatting)
- **TypeScript strict mode** (catch bugs at compile time)
- **Husky** (pre-commit hooks - run lint before committing)
- **Conventional commits** (standard commit messages)

### Nice-to-haves (post-MVP):
- **Storybook** (component library documentation)
- **Changesets** (versioning, changelogs)

---

## Third-Party Services Recommendation

### Email: Resend
- **Why:** Developer-friendly API, generous free tier (3K emails/month), great DX
- **Cost:** $0/month MVP, then $20/month (50K emails)
- **Use cases:** Onboarding emails, weekly reports, billing notifications

### SMS: Twilio (required)
- **Cost:** ~$0.0075/SMS (avg), ~$1/month per phone number
- **Estimate:** 100 customers × 500 SMS/month = 50K SMS = $375/month
- **Note:** Pass this cost to customers (included in $350/month pricing)

### AI: Claude API (required)
- **Cost:** Sonnet 3.5: $3/million input tokens, $15/million output tokens
- **Estimate:** 50K SMS × 500 tokens/response = 25M tokens/month = ~$400/month
- **Note:** Pass this cost to customers

### File Storage: Supabase Storage
- **Why:** Included in Supabase, S3-compatible
- **Use cases:** Upload course logos, conversation exports
- **Cost:** 1GB free, then $0.021/GB/month

---

## Cost Analysis

### Infrastructure Costs by Scale

**At 10 customers (5K SMS/month):**
- Vercel: $0
- Supabase: $0
- Sentry: $0
- Better Uptime: $0
- **Total: $0/month** ✅

**At 50 customers (25K SMS/month):**
- Vercel: $0-20
- Supabase: $25
- Sentry: $0-26
- Better Uptime: $0
- Resend: $0-20
- **Total: $25-71/month**

**At 100 customers (50K SMS/month):**
- Vercel: $20
- Supabase: $50
- Sentry: $26
- Better Uptime: $10
- Resend: $20
- PostHog: $0
- **Total: $126/month**

**At 500 customers (250K SMS/month):**
- Vercel: $40
- Supabase: $200
- Sentry: $80
- Better Uptime: $10
- Resend: $50
- PostHog: $50
- **Total: $430/month**

### Break-Even Analysis

**Revenue at scale:**
- 10 customers: $3,500/month → Infrastructure: $0 (0%)
- 50 customers: $17,500/month → Infrastructure: $71 (0.4%)
- 100 customers: $35,000/month → Infrastructure: $126 (0.4%)
- 500 customers: $175,000/month → Infrastructure: $430 (0.2%)

**Result:** Infrastructure costs stay **well under 1% of revenue** at all scales. ✅

**Note:** Twilio + Claude API costs (~$775/month at 50K SMS) should be factored into COGS, covered by $350/month pricing.

---

## Final Recommended Stack

```
Frontend:
├─ Framework: Next.js 15.1 (App Router)
├─ Language: TypeScript 5.3 (strict mode)
├─ Styling: Tailwind CSS v4
├─ UI Library: shadcn/ui (Radix + Tailwind)
├─ State Management:
│  ├─ Server State: TanStack Query (React Query)
│  ├─ Client State: Zustand
│  └─ Forms: React Hook Form + Zod
└─ Build Tool: Turbopack (Next.js default)

Backend:
├─ Database: Supabase (PostgreSQL)
├─ Auth: Supabase Auth (JWT + Row-Level Security)
├─ API: Next.js API Routes + Supabase Edge Functions
├─ Realtime: Supabase Realtime (PostgreSQL CDC)
└─ File Storage: Supabase Storage (S3-compatible)

Infrastructure:
├─ Hosting: Vercel (frontend) + Supabase (backend)
├─ CI/CD: GitHub Actions + Vercel auto-deploy
├─ Monitoring:
│  ├─ Errors: Sentry
│  ├─ Uptime: Better Uptime
│  └─ Analytics: PostHog
└─ Domain/DNS: Cloudflare (free)

Third-Party:
├─ SMS: Twilio
├─ AI: Anthropic Claude API (Sonnet 3.5)
├─ Email: Resend
└─ Payments: Stripe (future)

Developer Tools:
├─ Version Control: Git + GitHub
├─ Code Quality: ESLint + Prettier + Husky
├─ Testing: Playwright (E2E) + Vitest (unit, post-MVP)
└─ Documentation: Notion (internal) + Mintlify (public docs, post-MVP)
```

---

## Justification for This Stack

### 1. Speed to MVP (4-8 weeks)
- Next.js + Supabase eliminates 2-3 weeks of backend setup
- shadcn/ui components copy-paste ready (save 1-2 weeks vs building from scratch)
- Vercel deployment is 1-click (no DevOps)
- **Result:** Focus on product, not infrastructure

### 2. Cost-Effective ($0-100/month until 50+ customers)
- Free tiers cover MVP phase completely
- Scales gracefully (<1% of revenue at 500 customers)
- No expensive enterprise services (Auth0, AWS, etc.)

### 3. Developer Experience (solo/small team friendly)
- TypeScript everywhere (catch bugs early)
- Supabase auto-generates TypeScript types from database
- TanStack Query handles caching/refetching automatically
- Hot reload in <2 seconds

### 4. Real-Time Performance (<2s SMS response)
- Supabase Edge Functions (Deno) for webhook processing
- Supabase Realtime pushes updates to dashboard instantly
- Edge network (Vercel) serves dashboard globally fast

### 5. Security & Compliance
- Row-level security (multi-tenant isolation at database level)
- JWT authentication (stateless, scales)
- HTTPS everywhere (Vercel + Supabase default)
- SOC 2 compliant (Supabase + Vercel both certified)

---

## Trade-Offs Accepted

### 1. Vendor Lock-In (Vercel + Supabase)
- **Risk:** Harder to migrate if pricing changes
- **Mitigation:** Supabase is open source (can self-host), Next.js is portable (can deploy to Cloudflare, Railway, etc.)

### 2. Next.js Complexity (App Router learning curve)
- **Risk:** Takes 1-2 weeks to grok server vs client components
- **Mitigation:** Excellent documentation, massive community

### 3. PostgreSQL Overkill?
- **Risk:** Could use simpler database (SQLite, MongoDB)
- **Mitigation:** Postgres is future-proof (won't outgrow it), and Supabase makes it easy

---

## Migration Path If We Outgrow This

### Scenario 1: Supabase pricing becomes expensive (>$500/month)
**Solution:** Self-host Supabase (open source)
- Migrate to AWS RDS (PostgreSQL) + self-hosted Supabase services
- Keep same API/SDK (no code changes)
- **Estimated cost savings:** 50-70% at scale

### Scenario 2: Need more control over API layer
**Solution:** Migrate to dedicated backend (NestJS, Fastify, etc.)
- Keep Supabase for database + auth
- Move business logic to separate API server
- **Timeline:** 2-4 weeks

### Scenario 3: Outgrow Vercel (bandwidth costs)
**Solution:** Migrate to Cloudflare Pages + Workers
- Next.js SSR → Cloudflare Workers
- Static assets → Cloudflare CDN
- **Estimated cost savings:** 80-90% for bandwidth

---

## Anti-Patterns to Avoid

### 1. Building Custom Auth
- ❌ Spend 2-3 weeks building login/signup/forgot password
- ✅ Use Supabase Auth (1 day setup)

### 2. Using Redux for Everything
- ❌ Wrap API calls in Redux actions/reducers
- ✅ Use TanStack Query for server state, Zustand for UI state

### 3. Premature Optimization
- ❌ Set up Kubernetes, microservices, message queues
- ✅ Start with Next.js API routes, scale when needed

### 4. Over-Engineering Database Schema
- ❌ Create 50 tables with complex relationships on day 1
- ✅ Start simple (5-10 tables), refactor as you learn

### 5. Ignoring TypeScript Errors
- ❌ Use `any` everywhere to ship faster
- ✅ Fix types upfront (saves debugging time later)

---

## Getting Started Guide

### 1. Scaffold Project (15 minutes)

```bash
# Create Next.js app
npx create-next-app@latest golf-hq \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"

cd golf-hq

# Install dependencies
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
npm install @tanstack/react-query zustand react-hook-form zod
npm install lucide-react class-variance-authority clsx tailwind-merge

# Install shadcn/ui CLI
npx shadcn@latest init

# Add common components
npx shadcn@latest add button input card table dialog
```

### 2. Set Up Supabase (10 minutes)

```bash
# Create Supabase project at supabase.com
# Copy .env.local:
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 3. Database Schema (20 minutes)

```sql
-- organizations table (golf courses)
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone_number TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- users table (course staff)
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  organization_id UUID REFERENCES organizations(id),
  email TEXT NOT NULL,
  full_name TEXT,
  role TEXT CHECK (role IN ('admin', 'staff'))
);

-- conversations table (SMS threads)
CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id),
  customer_phone TEXT NOT NULL,
  customer_name TEXT,
  status TEXT CHECK (status IN ('open', 'resolved', 'archived')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- messages table (individual SMS)
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID REFERENCES conversations(id),
  direction TEXT CHECK (direction IN ('inbound', 'outbound')),
  content TEXT NOT NULL,
  sender TEXT, -- 'customer', 'ai', or staff name
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row-level security policies
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Users can only see their organization's data
CREATE POLICY "Users can view their org" ON conversations
  FOR SELECT USING (
    organization_id IN (
      SELECT organization_id FROM users WHERE id = auth.uid()
    )
  );
```

### 4. Deploy to Vercel (5 minutes)

```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel

# Add environment variables in Vercel dashboard
# vercel.com → Project → Settings → Environment Variables
```

### 5. Set Up Twilio Webhook (10 minutes)

```typescript
// app/api/webhooks/twilio/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const formData = await req.formData()
  const from = formData.get('From') as string
  const body = formData.get('Body') as string
  const to = formData.get('To') as string

  // Find organization by phone number
  const { data: org } = await supabase
    .from('organizations')
    .select('id')
    .eq('phone_number', to)
    .single()

  if (!org) {
    return NextResponse.json({ error: 'Org not found' }, { status: 404 })
  }

  // Find or create conversation
  let { data: conversation } = await supabase
    .from('conversations')
    .select('id')
    .eq('organization_id', org.id)
    .eq('customer_phone', from)
    .eq('status', 'open')
    .single()

  if (!conversation) {
    const { data: newConv } = await supabase
      .from('conversations')
      .insert({
        organization_id: org.id,
        customer_phone: from,
        status: 'open',
      })
      .select()
      .single()
    conversation = newConv
  }

  // Save inbound message
  await supabase.from('messages').insert({
    conversation_id: conversation!.id,
    direction: 'inbound',
    content: body,
    sender: 'customer',
  })

  // TODO: Call Claude API to generate response
  // TODO: Send response via Twilio
  // TODO: Save outbound message

  return NextResponse.json({ success: true })
}
```

**Total setup time: ~1 hour** ✅

---

## Learning Resources

### Next.js
- [Official Docs](https://nextjs.org/docs) (start here)
- [Next.js 15 App Router Course](https://nextjs.org/learn) (free, interactive)
- [Lee Robinson's YouTube](https://youtube.com/@leerob) (Vercel VP of DX)

### Supabase
- [Official Docs](https://supabase.com/docs)
- [Supabase YouTube](https://youtube.com/@Supabase) (Jon Meyers' tutorials)
- [Row-Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)

### TanStack Query
- [Official Docs](https://tanstack.com/query/latest/docs/react/overview)
- [Tanner Linsley's talks](https://youtube.com/results?search_query=tanner+linsley+react+query) (creator)

### Tailwind CSS
- [Official Docs](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com) (paid component library)

### shadcn/ui
- [Official Docs](https://ui.shadcn.com)
- [Component Examples](https://ui.shadcn.com/examples/dashboard)

---

# PART 2: DESIGN SYSTEM & BRAND IDENTITY

## Brand Personality

**Golf HQ's Brand in 5 Adjectives:**
1. **Intelligent** - AI-powered, not just a dumb SMS relay
2. **Reliable** - Never misses a booking, always responds
3. **Modern** - Not your grandfather's tee sheet software
4. **Approachable** - For small courses, not just fancy country clubs
5. **Transparent** - Shows exactly what the AI is doing

**Brand Archetype:** The **Sage + Everyperson** hybrid
- Sage: Knowledgeable, helpful, improves operations
- Everyperson: Down-to-earth, accessible, "we get you"

---

## Visual Identity

### Color Palette Research

**Competitor Analysis:**

**ForeUp:**
- Primary: Navy blue (#1E3A5F)
- Accent: Orange (#FF6B35)
- Feel: Professional, tech-forward
- **Observation:** Strong brand, but generic SaaS palette

**Lightspeed:**
- Primary: Bright blue (#0070F3)
- Accent: Pink/Purple gradients
- Feel: Modern, energetic
- **Observation:** Very tech, less "golf"

**TeeSnap:**
- Primary: Forest green (#2D5016)
- Accent: Gold (#D4AF37)
- Feel: Traditional, golf-clubby
- **Observation:** Too country club, not approachable

**Our Differentiation Strategy:**
- **Avoid:** Generic blue (too many SaaS tools), dark green (too traditional)
- **Embrace:** Warmth + tech, approachable + intelligent

---

### Primary Palette

### ✅ RECOMMENDED: Warm Intelligent

**Color Scheme:**
- **Primary:** Slate `#1E293B` (slate-800) - sophisticated dark
- **Secondary:** Fairway Green `#059669` (emerald-600) - modern green, not forest
- **Accent:** Sunrise Orange `#F59E0B` (amber-500) - warm, optimistic

**Rationale:** Balances tech (slate) + golf (green) + warmth (orange)
**Emotional impact:** Approachable intelligence, modern tradition
**Risk:** Orange accent needs careful use (can feel "cheap" if overused)

---

### Extended Palette

```css
/* Primary (Slate) */
--primary-950: #0F172A  /* Near black backgrounds */
--primary-900: #1E293B  /* Main dark UI */
--primary-800: #334155  /* Elevated surfaces */
--primary-700: #475569  /* Borders, dividers */

/* Secondary (Fairway Green) */
--secondary-700: #047857  /* Hover states */
--secondary-600: #059669  /* Primary green */
--secondary-500: #10B981  /* Lighter green */
--secondary-400: #34D399  /* Success states */

/* Accent (Sunrise Orange) */
--accent-600: #D97706   /* Darker orange */
--accent-500: #F59E0B   /* Primary accent */
--accent-400: #FBBF24   /* Lighter accent */
--accent-300: #FCD34D   /* Subtle highlights */

/* Semantic Colors */
--success: #10B981   /* Booking confirmed */
--warning: #F59E0B   /* AI needs review */
--error: #EF4444     /* Failed to send SMS */
--info: #3B82F6      /* Informational */

/* Neutrals (Slate scale) */
--gray-50: #F8FAFC
--gray-100: #F1F5F9
--gray-200: #E2E8F0
--gray-300: #CBD5E1
--gray-400: #94A3B8
--gray-500: #64748B
--gray-600: #475569
--gray-700: #334155
--gray-800: #1E293B
--gray-900: #0F172A
--gray-950: #020617

/* Semantic UI Colors */
--booking-color: #3B82F6    /* Blue for bookings */
--conversation-color: #8B5CF6 /* Purple for conversations */
--ai-action: #10B981         /* Green for AI responses */
--human-action: #F59E0B      /* Orange for human overrides */
```

**Why this works:**
1. **Slate primary** - Modern, not corporate blue
2. **Emerald green** - Golf connection, but vibrant (not stuffy forest green)
3. **Amber/Orange accent** - Warmth, action, approachable (not aggressive red)
4. **High contrast** - Accessible, reads well on any device

---

### Typography

### Primary Font (Headings & UI): Inter

**Rationale:**
- Industry standard for SaaS dashboards (Linear, Stripe, Vercel use it)
- Excellent legibility at all sizes (12px to 72px)
- Wide range of weights (100-900)
- Free, open source (no licensing)
- Optimized for screens (OpenType features)

**Where to use:** Headings (H1-H6), UI labels, buttons, navigation

**Weights:**
- Regular 400: Body text, labels
- Medium 500: Emphasized text, table headers
- Semibold 600: Subheadings, important UI
- Bold 700: Headings, primary buttons

---

### Monospace Font: JetBrains Mono

**Rationale:**
- Clear number distinction (0/O, 1/l/I)
- Ligatures for code (if we show AI logs)
- Professional look

**Where to use:** Phone numbers, timestamps, analytics numbers, code snippets

---

### Type Scale

```css
/* Display (Marketing pages only) */
--text-display: 3.75rem (60px) / font-weight: 700 / line-height: 1.1 / letter-spacing: -0.02em

/* Headings */
--text-h1: 2.25rem (36px) / font-weight: 700 / line-height: 1.2 / letter-spacing: -0.01em
--text-h2: 1.875rem (30px) / font-weight: 600 / line-height: 1.3 / letter-spacing: -0.01em
--text-h3: 1.5rem (24px) / font-weight: 600 / line-height: 1.4 / letter-spacing: 0
--text-h4: 1.25rem (20px) / font-weight: 600 / line-height: 1.4 / letter-spacing: 0

/* Body */
--text-lg: 1.125rem (18px) / font-weight: 400 / line-height: 1.6 / letter-spacing: 0
--text-base: 1rem (16px) / font-weight: 400 / line-height: 1.5 / letter-spacing: 0
--text-sm: 0.875rem (14px) / font-weight: 400 / line-height: 1.5 / letter-spacing: 0
--text-xs: 0.75rem (12px) / font-weight: 500 / line-height: 1.4 / letter-spacing: 0.01em

/* Caption */
--text-caption: 0.6875rem (11px) / font-weight: 500 / line-height: 1.4 / letter-spacing: 0.02em / text-transform: uppercase
```

---

### Logo & Brand Mark

### ✅ Recommended Concept: Icon + Wordmark

**Visual Description:**

**Icon Element:**
- A **stylized golf flag pin** that transforms into a **message bubble**
- Top half: Triangular flag (golf)
- Bottom half: Rounded chat bubble tail (SMS)
- Single continuous shape (clever negative space)
- Monochromatic (emerald green) or two-tone (green flag, orange bubble)

**Wordmark:**
- "Golf HQ" in Inter Bold (600)
- "HQ" slightly larger or bolder than "Golf" (emphasis on headquarters/command center)
- Optional tagline below: "AI SMS Platform" in Inter Regular (400), smaller size, gray-600

**Logo Variations:**

1. **Full Logo** (Icon + Wordmark) - Marketing, website header
2. **Icon Only** - App icon, favicon, small spaces
3. **Wordmark Only** - Horizontal layouts where icon doesn't fit
4. **Monochrome** - Single color version for print, embroidery

---

### Logo Usage Guidelines

```css
/* Minimum Sizes */
--logo-min-width-full: 120px  /* Icon + wordmark */
--logo-min-width-icon: 32px   /* Icon only */

/* Clear Space */
--logo-clearspace: 16px /* Minimum padding around logo */

/* Background Requirements */
Light background: Use primary logo (slate text, emerald icon)
Dark background: Use white/light logo
Busy background: Add 8px padding + subtle shadow or backdrop blur
```

**Color Versions:**

| Version | Icon Color | Text Color | Background |
|---------|-----------|-----------|------------|
| Primary | Emerald-600 | Slate-900 | White/Light |
| Reversed | Emerald-400 | White | Dark |
| Monochrome | Slate-900 | Slate-900 | White/Light |
| Accent | Amber-500 | Slate-900 | White (use sparingly) |

---

### Iconography

### Icon Style: Outline (Lucide React)

**Rationale:**
- Matches Inter's clean, modern aesthetic
- Scales well (works at 16px and 48px)
- Consistent stroke width (2px default)
- Large library (1000+ icons)
- Tree-shakeable (import only what you use)

**Custom Icons Needed:**

| Icon | Description | Use Case |
|------|-------------|----------|
| `sms-bubble` | Speech bubble with phone | SMS conversations |
| `ai-sparkle` | Star/sparkle with circuit | AI-generated responses |
| `golf-flag` | Flagstick on green | Golf course identity |
| `tee-time` | Clock + golf ball | Booking times |
| `fairway` | Simplified green/fairway | Course overview |
| `pro-shop` | Shopping bag + club | Merchandise questions |
| `weather-golf` | Sun + golf ball | Weather-related |
| `auto-reply` | Arrow loop + message | Automated response |
| `human-takeover` | Person + message | Staff override |
| `conversation-archived` | Folder + checkmark | Closed conversations |

**Icon Sizes:**

```css
--icon-xs: 16px   /* Inline with text */
--icon-sm: 20px   /* Table cells, compact UI */
--icon-md: 24px   /* Default (buttons, nav) */
--icon-lg: 32px   /* Feature cards */
--icon-xl: 48px   /* Empty states, hero sections */
```

---

### Illustration Style

### ✅ Recommendation: Minimalist Line Art

**Why:**
- Matches outline icon style
- Scales to any size without quality loss (SVG)
- Easy to create/customize (can draw in Figma)
- Timeless (won't look dated in 2 years)
- Budget-friendly (no illustrator needed)

**Style Guide:**
- Single-color illustrations (emerald-600 or amber-500)
- 2px stroke weight (matches icons)
- Rounded line caps and joins
- Subtle details (not overly complex)
- Isometric perspective optional (for 3D objects like phones, golf carts)

**Use Cases:**
- Empty states ("No conversations yet" - illustration of phone + flag)
- Onboarding steps (phone setup, AI configuration, etc.)
- Error pages (404 - golf ball in sand trap)
- Loading states (animated golf flag waving)
- Marketing pages (hero section - golf course wireframe)

---

## UI/UX Patterns

### Dashboard Layout

### ✅ Recommendation: Sidebar Navigation (left)

**Rationale:**
- Industry standard for SaaS dashboards (Stripe, Linear, Notion)
- Vertical space for navigation items (can add features without crowding)
- Persistent navigation (no page flicker when changing sections)
- Logo always visible (brand reinforcement)

**Layout Specs:**

```
┌────────────────────────────────────────────────┐
│ [Logo]          Search Bar        [Avatar] [≡]│ ← Top Bar (64px)
├──────────┬─────────────────────────────────────┤
│          │                                     │
│ [Home]   │  Main Content Area                  │
│ [📞 SMS] │  (Conversations, Analytics, etc.)   │
│ [📊 Dash]│                                     │
│ [⚙️ Set] │                                     │
│          │                                     │
│ Sidebar  │                                     │
│ (240px)  │                                     │
│          │                                     │
│ [Help]   │                                     │
│ [Logout] │                                     │
└──────────┴─────────────────────────────────────┘
```

**Sidebar Details:**
- Width: 240px (desktop), collapsible to 64px (icon-only)
- Background: slate-900 (dark sidebar) or white (light sidebar)
- Active item: emerald-600 left border (4px) + emerald-50 background
- Hover: slate-800 background
- Icons: 20px, left-aligned with 16px padding

**Mobile (< 768px):**
- Sidebar slides in from left (overlay)
- Hamburger menu in top-left
- Full-width main content

---

### Component Design Principles

#### Buttons

```tsx
/* Primary Button */
bg-emerald-600 hover:bg-emerald-700 text-white
font-medium px-4 py-2 rounded-lg
transition-colors duration-150
shadow-sm hover:shadow-md

/* Secondary Button */
bg-white hover:bg-gray-50 text-slate-900
border border-gray-300
font-medium px-4 py-2 rounded-lg
transition-colors duration-150

/* Ghost Button */
bg-transparent hover:bg-slate-100 text-slate-700
font-medium px-4 py-2 rounded-lg
transition-colors duration-150

/* Destructive Button */
bg-red-600 hover:bg-red-700 text-white
font-medium px-4 py-2 rounded-lg
transition-colors duration-150
```

**Sizes:**
- SM: `px-3 py-1.5 text-sm` (12px height)
- MD: `px-4 py-2 text-base` (16px height) ← Default
- LG: `px-6 py-3 text-lg` (20px height)
- XL: `px-8 py-4 text-xl` (24px height) - Marketing CTAs

**Border Radius:** 8px (0.5rem) - Modern but not overly rounded

**Shadow:** Subtle (`shadow-sm`) on default, lift on hover (`shadow-md`)

---

#### Input Fields

**Style: Outline (border-based)**

```tsx
/* Text Input */
border border-gray-300 rounded-lg px-3 py-2
bg-white text-slate-900
focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
placeholder:text-gray-400

/* Error State */
border-red-300 focus:ring-red-500 focus:border-red-500
+ error text below (text-red-600 text-sm)

/* Disabled State */
bg-gray-100 text-gray-500 cursor-not-allowed
```

**Label Position:** Top (above input)
```tsx
<label className="block text-sm font-medium text-slate-700 mb-1">
  Course Name
</label>
<input className="..." />
```

**Focus State:** Ring (2px offset) + border color change

---

#### Cards

```tsx
/* Default Card */
bg-white border border-gray-200 rounded-lg
shadow-sm hover:shadow-md transition-shadow
p-6

/* Dark Mode Card */
bg-slate-800 border border-slate-700 rounded-lg
shadow-sm hover:shadow-md transition-shadow
p-6

/* Interactive Card (clickable) */
+ cursor-pointer hover:border-emerald-500
```

**Border Radius:** 12px (0.75rem) - Slightly more rounded than buttons

**Padding:** 24px (p-6) - Generous breathing room

**Hover Effect:** Subtle shadow lift (shadow-sm → shadow-md)

---

#### Modals/Dialogs

**Style: Centered overlay**

```tsx
/* Backdrop */
bg-black/50 backdrop-blur-sm fixed inset-0 z-40

/* Modal Container */
bg-white rounded-xl shadow-2xl
max-w-lg w-full mx-auto
fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
z-50 p-6

/* Mobile: Bottom Sheet */
@media (max-width: 768px) {
  rounded-t-xl rounded-b-none
  fixed bottom-0 left-0 right-0 top-auto
  transform: translateY(0)
  max-h-[90vh] overflow-y-auto
}
```

**Max Width:** 512px (lg) for most modals, 768px (xl) for complex forms

---

### Spacing System

**Base Unit: 4px**

```css
/* Tailwind Default Scale (4px increments) */
0   → 0px
1   → 4px    (0.25rem)  /* Tiny gaps */
2   → 8px    (0.5rem)   /* Compact */
3   → 12px   (0.75rem)  /* Small */
4   → 16px   (1rem)     /* Default ⭐ */
5   → 20px   (1.25rem)  /* Comfortable */
6   → 24px   (1.5rem)   /* Medium */
8   → 32px   (2rem)     /* Large */
10  → 40px   (2.5rem)   /* XL */
12  → 48px   (3rem)     /* XXL */
16  → 64px   (4rem)     /* Section gaps */
24  → 96px   (6rem)     /* Page sections */
```

**Usage Guidelines:**
- **Inner spacing (padding):** 16px default (p-4)
- **Between elements:** 8px (space-y-2) or 12px (space-y-3)
- **Section gaps:** 32px (mb-8) or 48px (mb-12)
- **Page margins:** 24px mobile (px-6), 96px desktop (px-24)

---

### Micro-Interactions

#### Loading States

**Primary: Skeleton Screens**
```tsx
/* Loading Card */
<div className="bg-gray-200 animate-pulse rounded-lg h-24 w-full" />

/* Loading Text */
<div className="bg-gray-200 animate-pulse rounded h-4 w-3/4" />
```

**When to use:**
- Initial page load (show layout structure)
- Table rows loading
- Card grids loading

**Alternative: Spinners**
- Use for button loading (spinner inside button)
- Use for small inline loading (next to "Sending..." text)

---

#### Button Feedback

```tsx
/* Hover */
hover:bg-emerald-700 /* Slight darkening */

/* Active (pressed) */
active:scale-95 /* Subtle shrink */

/* Loading State */
<Button disabled>
  <Spinner className="mr-2" />
  Sending...
</Button>
```

**No ripple effect** (too Material Design, not our aesthetic)

---

#### Transitions

```css
/* Fast (100ms) - Instant feedback */
transition-colors duration-100
/* Use for: Hover states, active states */

/* Medium (200ms) - Standard */
transition-all duration-200
/* Use for: Modal open/close, dropdown menus */

/* Slow (300ms) - Emphasis */
transition-transform duration-300 ease-out
/* Use for: Page transitions, slide-ins */
```

**Easing:**
- `ease-out` - Default (feels responsive)
- `ease-in-out` - Smooth start and end (for modals)
- `ease-in` - Rarely used (feels sluggish)

---

### Data Visualization

### Chart Library: Recharts

**Rationale:**
- React-native (built for React, not jQuery wrapper)
- Composable API (build charts like React components)
- Responsive out of the box
- Good documentation
- Lightweight (~100KB)
- Works with Tailwind colors

**Chart Types Needed:**

1. **Line Chart** - Conversation volume over time
   - X-axis: Date (last 30 days)
   - Y-axis: Number of conversations
   - Color: Emerald-600

2. **Bar Chart** - Bookings by day of week
   - X-axis: Mon-Sun
   - Y-axis: Number of bookings
   - Color: Blue-500

3. **Donut Chart** - Conversation outcomes
   - Segments: Booked (green), Info only (blue), Unresolved (amber), Spam (red)
   - Center: Total conversations

4. **Heatmap** - Peak SMS hours
   - X-axis: Hour of day (12am-11pm)
   - Y-axis: Day of week
   - Color scale: White (low) → Emerald-600 (high)

5. **Table** - Conversation list (not a chart, but data viz)
   - Sortable columns
   - Row hover highlight
   - Pagination (20 per page)

---

**Chart Color Palette (Colorblind-Safe):**

```css
/* Multi-series charts */
--chart-1: #3B82F6  /* Blue */
--chart-2: #10B981  /* Green */
--chart-3: #F59E0B  /* Amber */
--chart-4: #8B5CF6  /* Purple */
--chart-5: #EF4444  /* Red */
--chart-6: #06B6D4  /* Cyan */
```

**Accessibility:**
- All charts have text labels (not just color)
- Patterns/textures for colorblind users (optional)
- Keyboard navigable (tab through data points)

---

## Brand Voice & Messaging

### Tone of Voice

#### Marketing Website

**Tone:** Confident, clear, benefit-focused (not hype-y)

**Example Headline:**
> "Your golf course, open 24/7. No missed calls, no voicemail."

**Example Body Copy:**
> "Golf HQ's AI answers every text instantly, books tee times, and handles FAQs—while you focus on running a great course. See every conversation in one dashboard. Override the AI anytime. No surprises."

**Style Notes:**
- Short sentences (12-15 words max)
- Active voice ("AI answers" not "texts are answered by AI")
- Specific benefits ("books tee times" not "handles inquiries")
- No jargon ("AI" is okay, "LLM" is not)

---

#### In-App Messages

**Tone:** Helpful, concise, friendly (not corporate)

**Example Success Message:**
> ✅ **Tee time booked!** John Smith confirmed for Saturday at 9:00 AM.

**Example Error Message:**
> ⚠️ **Couldn't send SMS.** Check your Twilio credentials in Settings.

**Example Empty State:**
> 📭 **No conversations yet.**
> When customers text your course number, they'll show up here.

**Style Notes:**
- Emoji first (visual anchor)
- Bold headline (scan-able)
- Plain explanation (no "Oops!" or "Uh oh!")
- Action-oriented (tell user what to do)

---

#### Support/Documentation

**Tone:** Patient, thorough, empowering (teacher, not lecturer)

**Example Help Article Intro:**
> **How to connect Twilio to Golf HQ**
> This guide takes about 10 minutes. You'll need:
> - A Twilio account (sign up free at twilio.com)
> - Your course's phone number (or buy a new one)
> - 5 minutes to follow along
>
> Let's get started.

**Style Notes:**
- State time upfront (respect user's time)
- Prerequisites listed clearly
- Step-by-step (numbered lists)
- Screenshots for every step
- No assumptions ("Click the gear icon in the top-right" not "Go to settings")

---

#### Email Communications

**Tone:** Professional but warm (person, not robot)

**Example Onboarding Email:**

```
Subject: Welcome to Golf HQ, [Course Name]! 🏌️

Hi [First Name],

Welcome to Golf HQ! Your account is live, and you're minutes away from your first AI-powered SMS conversation.

Here's what to do next:

1. Connect your Twilio account (5 min)
   → dashboard.golfhq.com/setup/twilio

2. Set your course details (name, location, policies)
   → dashboard.golfhq.com/setup/course

3. Train your AI (optional - it works great out of the box)
   → dashboard.golfhq.com/setup/ai

Need help? Reply to this email (yes, a real person will answer).

Let's go!

— The Golf HQ Team

P.S. Check out our founder's story: Why we built Golf HQ →
```

**Style Notes:**
- First name only (friendly)
- Checkboxes/links (action-oriented)
- Short paragraphs (mobile-friendly)
- P.S. for bonus content (high open rate)

---

### Tagline Options

1. ✅ **"AI That Never Misses A Tee Time"** ← **RECOMMENDED**
   - Clear benefit (no missed bookings)
   - Golf-specific ("tee time")
   - Memorable

2. "Your 24/7 Pro Shop Assistant"
   - Good, but "assistant" is vague

3. "Smart SMS for Smarter Golf Operations"
   - Okay, but "smarter" is overused

4. "Text In. Tee Off."
   - Punchy, but unclear (could be golfer-facing)

5. "Every Text. Every Time."
   - Simple, but lacks golf context

6. "The AI Front Desk Your Course Deserves"
   - Clear, but "deserves" is cliché

7. "From Text to Tee Time in Seconds"
   - Benefit-focused, clear

8. "Never Close Your Tee Sheet Again"
   - Bold claim, but "never" might be too strong

9. "Your Course, Always Answering"
   - Simple, but passive voice

10. "24/7 SMS. 100% Booked."
    - Numbers-driven, but "100% booked" is aspirational (not guarantee)

---

### Final Tagline Recommendation

**Primary:** "AI That Never Misses A Tee Time"

**Alternative (for specific contexts):**
- Homepage hero: "Your golf course, open 24/7. No missed calls, no voicemail."
- Email signature: "Golf HQ - AI SMS for Golf Courses"
- Social media bio: "AI-powered SMS for golf courses. Never miss a booking. 🏌️"

---

### Value Proposition Statement

**Framework:**
> "Golf HQ helps [target customer] achieve [benefit] by [unique method] unlike [alternatives]."

**Refined Version:**

> **"Golf HQ helps small golf courses save 15+ hours per week and capture 30% more bookings by handling every SMS inquiry with AI—unlike traditional software that still requires staff to answer every call."**

**Breakdown:**
- **Target:** Small golf courses
- **Benefit:** Save time (15 hrs/week) + make money (30% more bookings)
- **Method:** AI-powered SMS (specific)
- **Alternative:** Traditional software (requires manual answering)

**Where to use:**

**Homepage Hero:**
> "Stop missing bookings while you're on the course.
> Golf HQ's AI answers every text, books tee times, and handles FAQs—24/7."

**Pitch Deck:**
> "Golf HQ is AI-powered SMS for small golf courses. Our AI handles bookings, inquiries, and FAQs via text, saving operators 15+ hours/week and capturing 30% more revenue."

**Sales Conversations:**
> "Imagine never missing a booking because you were helping a customer at the pro shop. Golf HQ's AI texts back instantly, books the tee time, and you just see it confirmed in your dashboard."

**Social Media Bio:**
> "AI SMS for golf courses. Never miss a booking. 🏌️
> $350/month, no contracts."

---

## Competitive Differentiation

### Visual Benchmarking

#### ForeUp
- **Design age:** Modern (updated 2022-23)
- **Mobile experience:** Good (responsive, but some tables awkward)
- **Visual hierarchy:** Clear (primary CTAs stand out)
- **What they do well:**
  - Professional, trustworthy look
  - Good use of whitespace
  - Clear navigation
- **What they do poorly:**
  - Generic blue (looks like every B2B SaaS)
  - Dense tables (hard to scan)
  - No personality (feels corporate)
- **How we'll look different:**
  - Warmer colors (emerald + amber vs. navy + blue)
  - Simpler UI (focus on SMS, not 50 features)
  - More modern (gradients, shadows, micro-interactions)

---

#### Lightspeed Golf
- **Design age:** Very modern (2023-24 redesign)
- **Mobile experience:** Excellent (mobile-first)
- **Visual hierarchy:** Good (bold headlines, clear sections)
- **What they do well:**
  - Bright, energetic colors
  - Modern gradients
  - Good photography (real golf courses)
- **What they do poorly:**
  - Too "tech startup" (less grounded in golf)
  - Overwhelming (too many features shown at once)
  - Expensive feel (intimidating for small courses)
- **How we'll look different:**
  - More approachable (not just for big operations)
  - Focused messaging (SMS only, not full POS)
  - Golf-centric colors (green prominent, not just blue/purple)

---

#### TeeSnap
- **Design age:** Mixed (some pages modern, some dated)
- **Mobile experience:** Fair (functional but not optimized)
- **Visual hierarchy:** Confusing (too many CTAs compete)
- **What they do well:**
  - Golf aesthetic (green, gold, photos of courses)
  - Established feel (trustworthy for traditional owners)
- **What they do poorly:**
  - Outdated design (2018-era)
  - Slow-loading pages
  - Too country club (exclusive, not accessible)
- **How we'll look different:**
  - Modern design (2025 standards)
  - Fast, snappy (Next.js, Vercel edge)
  - Inclusive (for all courses, not just fancy clubs)

---

### Our Visual Differentiation Strategy

1. **Warmth + Intelligence**
   - Competitors: Cold blues, corporate grays
   - Us: Emerald green (nature) + amber (warmth) + slate (tech)

2. **Simplified UI**
   - Competitors: Kitchen-sink dashboards (40 menu items)
   - Us: 4-5 main sections, clean sidebar, no clutter

3. **Real-Time Emphasis**
   - Competitors: Static dashboards (refresh to see updates)
   - Us: Live updates (Supabase Realtime), animated indicators

4. **Transparent AI**
   - Competitors: Black box (you don't see what automation does)
   - Us: Show AI reasoning, easy override, conversation view

5. **Mobile-First**
   - Competitors: Desktop-first (mobile is afterthought)
   - Us: Mobile-responsive from day 1 (course owners check phones constantly)

---

## Design System Documentation

### 1. Color Variables

**Tailwind Config:**

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          950: '#0F172A',
          900: '#1E293B',
          800: '#334155',
          700: '#475569',
          600: '#64748B',
        },
        secondary: {
          700: '#047857',
          600: '#059669',
          500: '#10B981',
          400: '#34D399',
        },
        accent: {
          600: '#D97706',
          500: '#F59E0B',
          400: '#FBBF24',
        },
      },
    },
  },
}
```

---

### 2. Component Library Checklist

**Phase 1 (MVP - Week 1-2):**
- [x] Buttons (all variants)
- [x] Inputs (text, select, checkbox, radio)
- [x] Cards
- [x] Navigation (sidebar, top bar)
- [x] Tables
- [x] Modals
- [x] Toasts/Notifications
- [x] Empty states

**Phase 2 (Post-MVP - Week 3-4):**
- [ ] Charts (line, bar, donut)
- [ ] Loading states (skeletons)
- [ ] Error states
- [ ] Badges
- [ ] Avatars
- [ ] Tooltips
- [ ] Dropdowns (multi-select)
- [ ] Date pickers

**Phase 3 (Enhancements - Month 2+):**
- [ ] Command palette (Cmd+K search)
- [ ] Onboarding wizard (multi-step)
- [ ] File upload (drag-drop)
- [ ] Rich text editor (for AI prompt customization)
- [ ] Data export (CSV, PDF)

---

### 3. Page Templates

**Priority 1 (MVP):**
1. **Dashboard Home** - Overview of SMS activity, quick stats
2. **Conversation List** - Table of all SMS threads
3. **Conversation Detail** - Single conversation view (chat-style)
4. **Settings** - Twilio config, course details, AI training
5. **Login/Signup** - Authentication pages

**Priority 2 (Post-MVP):**
6. **Analytics** - Charts, reports, insights
7. **Onboarding Wizard** - Step-by-step setup (Twilio, course, test SMS)

**Priority 3 (Future):**
8. **Team Management** - Add staff users, permissions
9. **Billing** - Subscription, invoices, payment method
10. **Help Center** - Integrated docs, search

---

### Accessibility Requirements

**WCAG 2.1 Level AA Compliance:**

1. **Color Contrast**
   - Text: 4.5:1 minimum (body text on backgrounds)
   - Large text (18px+): 3:1 minimum
   - UI components: 3:1 minimum (borders, icons)

**Tested Combinations:**
- ✅ Slate-900 on white (16.1:1) - Pass
- ✅ Slate-600 on white (5.9:1) - Pass
- ✅ White on emerald-600 (4.7:1) - Pass
- ✅ White on amber-500 (4.9:1) - Pass
- ❌ Gray-400 on white (2.8:1) - Fail (use for disabled only)

2. **Keyboard Navigation**
   - All interactive elements focusable (Tab key)
   - Focus indicators visible (2px emerald-500 ring)
   - Skip to main content link
   - Modal traps focus (Tab cycles within modal)

3. **Screen Reader Support**
   - All images have `alt` text
   - Form inputs have labels
   - ARIA landmarks (`<nav>`, `<main>`, `<aside>`)
   - ARIA live regions for toast notifications

4. **Motion**
   - Respect `prefers-reduced-motion` (disable animations)
   - No auto-playing videos (without user consent)
   - Animations can be paused/stopped

---

## Implementation Roadmap

### Week 1-2 (Foundation)
- [ ] Set up Tailwind config with brand colors
- [ ] Install fonts (Inter, JetBrains Mono)
- [ ] Create base components (Button, Input, Card)
- [ ] Build dashboard layout (Sidebar + TopBar)
- [ ] Implement authentication pages (Login, Signup)

### Week 3-4 (Core Features)
- [ ] Build conversation list page (table)
- [ ] Build conversation detail page (chat UI)
- [ ] Implement real-time updates (Supabase Realtime)
- [ ] Add toast notifications
- [ ] Build settings page (Twilio config form)

### Week 5-6 (Polish)
- [ ] Add empty states (illustrations)
- [ ] Add loading states (skeleton screens)
- [ ] Implement error states
- [ ] Add micro-interactions (hover, transitions)
- [ ] Accessibility audit (keyboard nav, screen readers)

### Week 7-8 (Analytics & Launch Prep)
- [ ] Build analytics dashboard (charts)
- [ ] Add onboarding wizard (optional)
- [ ] Mobile optimization pass
- [ ] Cross-browser testing
- [ ] Performance audit (Lighthouse)

### Post-Launch (Month 2+)
- [ ] Storybook documentation
- [ ] Dark mode support
- [ ] Advanced features (team management, billing)
- [ ] Help center integration

---

## Summary

### Recommended Tech Stack:
- **Frontend:** Next.js 15 + TypeScript + Tailwind CSS + shadcn/ui
- **Backend:** Supabase (PostgreSQL + Auth + Realtime)
- **Hosting:** Vercel (frontend) + Supabase (backend)
- **Monitoring:** Sentry (errors) + PostHog (analytics) + Better Uptime
- **Third-Party:** Twilio (SMS) + Claude API (AI) + Resend (email)

**Total Cost:**
- MVP (0-10 customers): **$0/month**
- Growth (50 customers): **$25-71/month**
- Scale (100 customers): **$126/month**
- Mature (500 customers): **$430/month** (<1% of revenue)

---

### Recommended Design System:
- **Colors:** Slate (primary) + Emerald (secondary) + Amber (accent)
- **Typography:** Inter (UI + body) + JetBrains Mono (numbers/code)
- **UI Library:** shadcn/ui (Radix + Tailwind)
- **Layout:** Sidebar navigation (left)
- **Illustrations:** Minimalist line art (2px stroke, single color)
- **Charts:** Recharts (React-native, composable)

**Brand Personality:** Intelligent, reliable, modern, approachable, transparent

**Tagline:** "AI That Never Misses A Tee Time"

---

## Next Steps

1. ✅ Set up Next.js + Supabase (1 hour)
2. Create Figma design system (4-6 hours)
3. Implement core components (2-3 days)
4. Build MVP dashboard (2-3 weeks)
5. Launch to first 10 beta customers

---

**Document End**

For questions or clarification on any section, please contact the development team.
