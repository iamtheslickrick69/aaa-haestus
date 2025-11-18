'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface Stat {
  id: string;
  number: string;
  subtitle?: string;
  title?: string;
  description: string;
  tags?: string[];
  isHero?: boolean;
  isFeatured?: boolean;
}

const stats: Stat[] = [
  {
    id: 'hero',
    number: '3',
    title: 'companies control 90%+',
    description:
      'of AI cloud infrastructure. The entire AI stack is consolidated in the hands of a few tech giants.',
    tags: ['AWS', 'Azure', 'GCP'],
    isHero: true,
  },
  {
    id: 'stat1',
    number: '95%',
    description: 'of AI pilots never reach production',
  },
  {
    id: 'stat2',
    number: '$2.6-4.4',
    subtitle: 'TRILLION',
    description: 'Global annual value at stake',
    isFeatured: true,
  },
  {
    id: 'stat3',
    number: '85M',
    description: 'jobs displaced by 2025',
  },
  {
    id: 'stat4',
    number: '1%',
    description: 'of orgs are AI-mature in deployment',
  },
];

function CountUpNumber({ value, duration = 1200 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric value for count-up
    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      setCount(1);
      return;
    }

    const target = parseFloat(numericMatch[0]);
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(target * eased);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isInView, value, duration]);

  // Format the display value
  const displayValue = value.includes('$')
    ? `$${count.toFixed(1)}`
    : value.includes('%')
    ? `${Math.round(count)}%`
    : value.includes('M')
    ? `${Math.round(count)}M`
    : Math.round(count).toString();

  return (
    <div ref={ref} className="tabular-nums">
      {displayValue}
    </div>
  );
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  const delay = stat.isHero ? 0 : (index - 0.5) * 150;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      className={`relative overflow-hidden rounded-3xl border transition-all duration-400 ${
        stat.isHero
          ? 'col-span-1 row-span-2 p-12'
          : 'p-8'
      }`}
      style={{
        background: 'rgba(30, 41, 59, 0.4)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderColor: 'rgba(255, 255, 255, 0.08)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        borderLeft: stat.isFeatured ? '3px solid #ff6b35' : undefined,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
        e.currentTarget.style.boxShadow = stat.isFeatured
          ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 60px rgba(255, 107, 53, 0.3)'
          : '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 107, 53, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        e.currentTarget.style.boxShadow =
          '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)';
      }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative z-10">
        {/* Number */}
        <div
          className="font-bold leading-none mb-4"
          style={{
            fontSize: stat.isHero ? '96px' : '72px',
            color: '#ffffff',
            letterSpacing: '-0.02em',
          }}
        >
          <CountUpNumber value={stat.number} />
        </div>

        {/* Subtitle (for TRILLION) */}
        {stat.subtitle && (
          <div
            className="font-bold mb-4"
            style={{
              fontSize: '24px',
              color: '#ff6b35',
              letterSpacing: '0.1em',
            }}
          >
            {stat.subtitle}
          </div>
        )}

        {/* Title (for hero card) */}
        {stat.title && (
          <div
            className="font-semibold mb-4"
            style={{
              fontSize: '24px',
              color: '#f1f5f9',
            }}
          >
            {stat.title}
          </div>
        )}

        {/* Description */}
        <p
          style={{
            fontSize: stat.isHero ? '18px' : '16px',
            color: stat.isHero ? '#cbd5e1' : '#94a3b8',
            lineHeight: stat.isHero ? 1.5 : 1.6,
            maxWidth: stat.isHero ? '90%' : '100%',
          }}
        >
          {stat.description}
        </p>

        {/* Tags (for hero card) */}
        {stat.tags && (
          <div
            className="absolute flex gap-2"
            style={{
              bottom: '24px',
              right: '24px',
            }}
          >
            {stat.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center"
                style={{
                  background: 'rgba(255, 107, 53, 0.1)',
                  border: '1px solid rgba(255, 107, 53, 0.3)',
                  borderRadius: '12px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  color: '#ff6b35',
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function StatsDashboard() {
  const heroStat = stats.find((s) => s.isHero)!;
  const regularStats = stats.filter((s) => !s.isHero);

  return (
    <section
      className="relative w-full"
      style={{
        background: '#0a0a0a',
        paddingTop: '120px',
        paddingBottom: '120px',
      }}
    >
      <div
        className="mx-auto px-8"
        style={{
          maxWidth: '1280px',
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="font-semibold mb-4 tracking-tight"
            style={{
              fontSize: '48px',
              color: '#f1f5f9',
            }}
          >
            AI Is Everywhere. Success Isn't.
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: '18px',
              color: '#cbd5e1',
              maxWidth: '48rem',
            }}
          >
            Four numbers that explain why most AI initiatives fail—and why architecture matters more
            than ambition.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gridTemplateRows: '1fr 1fr',
          }}
        >
          {/* Hero Card */}
          <StatCard stat={heroStat} index={0} />

          {/* Regular Stats */}
          {regularStats.map((stat, idx) => (
            <StatCard key={stat.id} stat={stat} index={idx + 1} />
          ))}
        </div>

        {/* Responsive Styles */}
        <style jsx global>{`
          @media (max-width: 1024px) {
            .grid {
              grid-template-columns: 1fr 1fr !important;
              grid-template-rows: auto !important;
            }
            .col-span-1.row-span-2 {
              grid-column: 1 / -1 !important;
              grid-row: auto !important;
            }
          }
          @media (max-width: 768px) {
            .grid {
              grid-template-columns: 1fr !important;
            }
            h2 {
              font-size: 32px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
