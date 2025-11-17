'use client';

import React, { useState } from 'react';

interface StackItem {
  title: string;
  category: string;
  description: string;
  initials: string;
}

const TECH_STACK: StackItem[] = [
  {
    title: 'Claude 4.5 Sonnet',
    category: 'AI & INTELLIGENCE',
    description: 'Enterprise-grade reasoning and orchestration for complex systems.',
    initials: 'CS',
  },
  {
    title: 'Claude 4.5 Haiku',
    category: 'AI & INTELLIGENCE',
    description: 'High-speed, low-latency AI for real-time products and workflows.',
    initials: 'CH',
  },
  {
    title: 'Claude 4.1 Opus',
    category: 'AI & INTELLIGENCE',
    description: 'Advanced intelligence for deep analysis, strategy, and architecture.',
    initials: 'CO',
  },
  {
    title: 'ChatGPT 5.1',
    category: 'AI & INTELLIGENCE',
    description: 'Multimodal AI with system-level capabilities and tool integration.',
    initials: 'G5',
  },
  {
    title: 'LangChain',
    category: 'AI FRAMEWORK',
    description: 'Pipelines, agents, and RAG framework for production AI systems.',
    initials: 'LC',
  },
  {
    title: 'Pinecone',
    category: 'AI MEMORY',
    description: 'Vector search and long-term memory for intelligent applications.',
    initials: 'PC',
  },
  {
    title: 'AWS',
    category: 'INFRASTRUCTURE',
    description: 'Cloud backbone for compute, storage, and enterprise security.',
    initials: 'AWS',
  },
  {
    title: 'Docker',
    category: 'INFRASTRUCTURE',
    description: 'Containerization and reproducible builds across all environments.',
    initials: 'DK',
  },
  {
    title: 'Kubernetes',
    category: 'INFRASTRUCTURE',
    description: 'Autoscaling, orchestration, and zero-downtime deployments.',
    initials: 'K8s',
  },
  {
    title: 'Vercel',
    category: 'INFRASTRUCTURE',
    description: 'Edge functions and CI/CD for modern web applications.',
    initials: 'V',
  },
  {
    title: 'Palo Alto Networks',
    category: 'SECURITY',
    description: 'Zero-Trust enterprise security and next-generation firewalling.',
    initials: 'PAN',
  },
  {
    title: 'Cloudflare',
    category: 'SECURITY',
    description: 'DDoS protection, global CDN, and programmable edge workers.',
    initials: 'CF',
  },
  {
    title: 'Next.js 14',
    category: 'FRONTEND',
    description: 'React framework with SSR, SSG, and the App Router.',
    initials: 'N',
  },
  {
    title: 'TypeScript',
    category: 'FRONTEND',
    description: 'Type-safe large-scale development with richer tooling.',
    initials: 'TS',
  },
  {
    title: 'Tailwind CSS',
    category: 'FRONTEND',
    description: 'Utility-first styling for a cohesive, responsive design system.',
    initials: 'TW',
  },
  {
    title: 'n8n',
    category: 'AUTOMATION',
    description: 'Workflow automation and AI agent orchestration across services.',
    initials: 'N8',
  },
];

function StackCard({ item }: { item: StackItem }) {
  return (
    <div className="group flex-shrink-0 min-w-[260px] md:min-w-[280px] lg:min-w-[300px] bg-[#0B0B0D] border border-white/5 rounded-2xl px-6 py-5 md:px-7 md:py-6 flex items-start gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(220,38,38,0.35)]">
      {/* Icon Circle */}
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-neutral-800/80 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <span className="text-xs md:text-sm font-semibold text-white/90">{item.initials}</span>
      </div>

      {/* Text Content */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm md:text-base font-semibold text-white tracking-wide">
          {item.title}
        </h4>
        <span className="block mt-1 text-[11px] tracking-[0.16em] uppercase text-red-400/80">
          {item.category}
        </span>
        <p className="mt-2 text-xs md:text-sm text-neutral-400 leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function TechStackMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the stack for seamless looping
  const duplicatedStack = [...TECH_STACK, ...TECH_STACK];

  return (
    <section id="stack" className="w-full bg-[#050506] py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
            Architecture, powered by a battle-tested stack.
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-neutral-400 md:text-neutral-500 text-base md:text-lg leading-relaxed">
            We combine enterprise infrastructure with modern AI tooling so your systems scale under
            real-world pressure.
          </p>
        </div>

        {/* Marquee Container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Edge Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#050506] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#050506] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div
            className={`flex gap-4 md:gap-5 ${isPaused ? 'animate-pause' : 'animate-marquee'}`}
          >
            {duplicatedStack.map((item, index) => (
              <StackCard key={`${item.title}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
          will-change: transform;
        }

        .animate-pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
