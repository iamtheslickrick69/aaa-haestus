'use client';

import Image from 'next/image';

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
    <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-8 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-2 hover:shadow-2xl">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card Content */}
      <div className="relative z-10">
        {/* Tech Logo/Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 flex items-center justify-center">
            <Image
              src={tech.logo}
              alt={tech.name}
              width={64}
              height={64}
              className="object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            />
          </div>
        </div>

        {/* Category Badge */}
        <p
          className="text-[10px] uppercase tracking-[0.2em] text-[#ff6b35] font-semibold mb-2 text-center"
          style={{textShadow: '0 1px 3px rgba(0,0,0,0.3)'}}
        >
          {tech.category}
        </p>

        {/* Tech Name */}
        <h3
          className="text-white text-xl font-bold mb-3 text-center tracking-tight"
          style={{textShadow: '0 1px 4px rgba(0,0,0,0.3)'}}
        >
          {tech.name}
        </h3>

        {/* Tech Description */}
        <p
          className="text-white/85 text-sm leading-relaxed text-center"
          style={{textShadow: '0 1px 3px rgba(0,0,0,0.25)'}}
        >
          {tech.description}
        </p>
      </div>
    </div>
  );
}

export default function TechStackMarquee() {
  return (
    <section className="relative overflow-hidden py-24 bg-black">
      {/* Orange Background Video */}
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

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-4 font-semibold">
            Our Technology
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            style={{textShadow: '0 2px 16px rgba(0,0,0,0.5)'}}
          >
            Architecture, powered by a<br className="hidden md:block" />
            battle-tested stack.
          </h2>

          <p
            className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed"
            style={{textShadow: '0 1px 8px rgba(0,0,0,0.4)'}}
          >
            We combine enterprise infrastructure with modern AI tooling so your systems scale under real-world pressure.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <TechCard key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
