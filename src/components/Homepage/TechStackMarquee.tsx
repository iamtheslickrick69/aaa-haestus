'use client';

import Image from 'next/image';

interface Tech {
  name: string;
  category: string;
  description: string;
  logo: string;
}

// Banner 1 - First 10 technologies (scrolls right to left)
const firstBannerTechs: Tech[] = [
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
];

// Banner 2 - Remaining technologies (scrolls left to right)
const secondBannerTechs: Tech[] = [
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
    <div className="flex-shrink-0 w-72 p-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:scale-105">
      {/* Tech Logo/Icon */}
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16 flex items-center justify-center">
          <Image
            src={tech.logo}
            alt={tech.name}
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
      </div>

      {/* Category Label */}
      <p
        className="text-xs uppercase tracking-wider text-[#ff6b35] mb-2 font-semibold text-center"
        style={{textShadow: '0 1px 3px rgba(0,0,0,0.3)'}}
      >
        {tech.category}
      </p>

      {/* Tech Name */}
      <h3
        className="text-white text-xl font-bold mb-3 text-center tracking-tight"
        style={{textShadow: '0 1px 4px rgba(0,0,0,0.4)'}}
      >
        {tech.name}
      </h3>

      {/* Description */}
      <p
        className="text-white/85 text-sm leading-relaxed text-center"
        style={{textShadow: '0 1px 3px rgba(0,0,0,0.3)'}}
      >
        {tech.description}
      </p>
    </div>
  );
}

export default function TechStackMarquee() {
  return (
    <section className="relative overflow-hidden py-20 bg-black">
      {/* Orange Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source
          src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/orangeback.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/25 z-0" />

      {/* Content */}
      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-white/80 mb-3 font-semibold">
            Our Technology
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            style={{textShadow: '0 2px 16px rgba(0,0,0,0.6)'}}
          >
            Architecture, powered by a<br className="hidden md:block" />
            battle-tested stack.
          </h2>

          <p
            className="text-base text-white/90 max-w-3xl mx-auto leading-relaxed"
            style={{textShadow: '0 1px 8px rgba(0,0,0,0.5)'}}
          >
            We combine enterprise infrastructure with modern AI tooling so your systems scale under real-world pressure.
          </p>
        </div>

        {/* Banner 1 - Scrolling Right to Left */}
        <div className="mb-8 overflow-hidden">
          <div className="animate-marquee-left flex gap-6">
            {/* First set */}
            {firstBannerTechs.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
            {/* Duplicate for seamless loop */}
            {firstBannerTechs.map((tech) => (
              <TechCard key={`${tech.name}-dup`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Banner 2 - Scrolling Left to Right */}
        <div className="overflow-hidden">
          <div className="animate-marquee-right flex gap-6">
            {/* First set */}
            {secondBannerTechs.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
            {/* Duplicate for seamless loop */}
            {secondBannerTechs.map((tech) => (
              <TechCard key={`${tech.name}-dup`} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
