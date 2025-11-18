'use client';

import Image from 'next/image';
import { useMemo } from 'react';

interface Tech {
  name: string;
  category: string;
  description: string;
  logo: string;
}

const techStack: Tech[] = [
  {
    name: 'Claude 4.5 Sonnet',
    category: 'AI & INTELLIGENCE',
    description: 'High-speed, high-context AI for real-time systems.',
    logo: '/logos/claude-sonnet.svg',
  },
  {
    name: 'Claude 4.5 Haiku',
    category: 'AI & INTELLIGENCE',
    description: 'Ultra-fast, low-latency AI for production workloads.',
    logo: '/logos/claude-haiku.svg',
  },
  {
    name: 'Claude 4.1 Opus',
    category: 'AI & INTELLIGENCE',
    description: 'Advanced reasoning and complex analysis.',
    logo: '/logos/claude-opus.svg',
  },
  {
    name: 'ChatGPT 5.1',
    category: 'AI & INTELLIGENCE',
    description: 'Multimodal AI with system-level capabilities.',
    logo: '/logos/chatgpt-51.svg',
  },
  {
    name: 'LangChain',
    category: 'AI PIPELINES',
    description: 'Pipelines, agents & RAG orchestration.',
    logo: '/logos/langchain.svg',
  },
  {
    name: 'Pinecone',
    category: 'VECTOR MEMORY',
    description: 'Vector search and long-term AI memory.',
    logo: '/logos/pinecone.svg',
  },
  {
    name: 'AWS',
    category: 'CLOUD INFRASTRUCTURE',
    description: 'Cloud backbone for compute & storage.',
    logo: '/logos/aws.svg',
  },
  {
    name: 'Docker',
    category: 'INFRASTRUCTURE',
    description: 'Containerization & reproducible builds.',
    logo: '/logos/docker.svg',
  },
  {
    name: 'Kubernetes',
    category: 'INFRASTRUCTURE',
    description: 'Autoscaling & orchestration.',
    logo: '/logos/kubernetes.svg',
  },
  {
    name: 'Vercel',
    category: 'EDGE & DEPLOY',
    description: 'Edge functions & frontend CI/CD.',
    logo: '/logos/vercel.svg',
  },
  {
    name: 'Palo Alto Networks',
    category: 'SECURITY',
    description: 'Zero-Trust enterprise security.',
    logo: '/logos/paloalto.svg',
  },
  {
    name: 'Cloudflare',
    category: 'SECURITY',
    description: 'DDoS protection & global CDN.',
    logo: '/logos/cloudflare.svg',
  },
  {
    name: 'Next.js 14',
    category: 'FRONTEND',
    description: 'React framework with SSR/SSG and App Router.',
    logo: '/logos/nextjs.svg',
  },
  {
    name: 'TypeScript',
    category: 'FRONTEND',
    description: 'Type-safe large-scale development.',
    logo: '/logos/typescript.svg',
  },
  {
    name: 'Tailwind CSS',
    category: 'FRONTEND',
    description: 'Utility-first styling and cohesive design system.',
    logo: '/logos/tailwind.svg',
  },
  {
    name: 'PostgreSQL',
    category: 'DATA',
    description: 'Relational database with ACID guarantees.',
    logo: '/logos/postgres.svg',
  },
  {
    name: 'Redis',
    category: 'DATA',
    description: 'In-memory cache & real-time store.',
    logo: '/logos/redis.svg',
  },
  {
    name: 'n8n',
    category: 'AUTOMATION',
    description: 'Workflow automation & AI agents.',
    logo: '/logos/n8n.svg',
  },
  {
    name: 'GitHub',
    category: 'COLLABORATION',
    description: 'Version control & collaboration.',
    logo: '/logos/github.svg',
  },
];

function TechCard({ tech }: { tech: Tech }) {
  return (
    <article className="flex-shrink-0 w-[240px] sm:w-[260px] md:w-[300px] rounded-2xl border border-white/[0.06] bg-white/[0.05] backdrop-blur-xl px-4 py-4 md:px-5 md:py-5 text-left shadow-[0_0_40px_rgba(0,0,0,0.6)] hover:border-[#F97316]/50 hover:bg-white/[0.08] transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="relative h-8 w-8 md:h-9 md:w-9 rounded-full bg-black flex items-center justify-center">
          <Image
            src={tech.logo}
            alt={tech.name}
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#F97316]/70">
            {tech.category}
          </p>
          <h3 className="text-sm md:text-base font-semibold text-white truncate">{tech.name}</h3>
        </div>
      </div>
      <p className="text-xs md:text-sm text-neutral-300 leading-relaxed line-clamp-3">
        {tech.description}
      </p>
    </article>
  );
}

export default function TechStackMarquee() {
  const marqueeItems = useMemo(() => [...techStack, ...techStack], []);

  // Split items for two rows
  const topRowItems = marqueeItems.slice(0, Math.ceil(marqueeItems.length / 2));
  const bottomRowItems = marqueeItems.slice(Math.ceil(marqueeItems.length / 2));

  return (
    <section id="stack" data-section="tech-stack" className="relative w-full bg-[#050505] py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Architecture, powered by a battle-tested stack.
        </h2>
        <p className="mt-3 text-sm md:text-base text-neutral-400 max-w-2xl mx-auto">
          We combine enterprise infrastructure with modern AI tooling so your systems scale under
          real-world pressure.
        </p>
      </div>

      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20" />

      <div className="space-y-6">
        {/* Top row - scrolls left to right */}
        <div className="relative">
          <div className="flex gap-6 animate-marquee-left">
            {topRowItems.map((tech, i) => (
              <TechCard tech={tech} key={`top-${i}-${tech.name}`} />
            ))}
          </div>
        </div>

        {/* Bottom row - scrolls right to left */}
        <div className="relative">
          <div className="flex gap-6 animate-marquee-right">
            {bottomRowItems.map((tech, i) => (
              <TechCard tech={tech} key={`bottom-${i}-${tech.name}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
