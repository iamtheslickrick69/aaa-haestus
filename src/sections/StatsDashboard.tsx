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
    id: 'stat1',
    number: '3',
    title: 'companies control 90%+',
    description: 'of AI cloud infrastructure',
  },
  {
    id: 'stat2',
    number: '95%',
    description: 'of AI pilots never reach production',
  },
  {
    id: 'stat3',
    number: '$2.6-4.4',
    subtitle: 'TRILLION',
    description: 'Global annual value at stake',
    isFeatured: true,
  },
  {
    id: 'stat4',
    number: '85M',
    description: 'jobs displaced by 2025',
  },
  {
    id: 'stat5',
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
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        y: -4,
        borderColor: 'rgba(255, 255, 255, 0.1)',
      }}
      style={{
        width: '100%',
        padding: '20px 24px',
        background: 'rgba(30, 41, 59, 0.3)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderLeft: stat.isFeatured ? '2px solid #ff6b35' : '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        gap: '24px',
      }}
    >
      {/* Left: Number */}
      <div
        className="font-bold"
        style={{
          fontSize: '48px',
          color: '#ffffff',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          flexShrink: 0,
        }}
      >
        <CountUpNumber value={stat.number} />
      </div>

      {/* Right: Description */}
      <div style={{ textAlign: 'right', maxWidth: '240px' }}>
        {stat.subtitle && (
          <div
            className="font-bold mb-1"
            style={{
              fontSize: '11px',
              color: '#ff6b35',
              letterSpacing: '0.1em',
            }}
          >
            {stat.subtitle}
          </div>
        )}
        <p
          style={{
            fontSize: '13px',
            color: '#94a3b8',
            lineHeight: 1.4,
            fontWeight: 400,
          }}
        >
          {stat.title ? `${stat.title} ${stat.description}` : stat.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function StatsDashboard() {
  return (
    <section
      className="relative w-full"
      style={{
        background: 'transparent',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div
        className="mx-auto px-6"
        style={{
          maxWidth: '500px',
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2
            className="font-semibold tracking-tight"
            style={{
              fontSize: '32px',
              color: '#f1f5f9',
              lineHeight: 1.2,
              marginBottom: '12px',
            }}
          >
            Everyone Has AI. Few Have Results.
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: '14px',
              color: '#94a3b8',
              maxWidth: '400px',
              marginBottom: '32px',
            }}
          >
            Four numbers that explain why most AI projects stall, and why architecture decides who actually wins.
          </p>
        </motion.div>

        {/* Vertical Hot Dog Stack */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {stats.map((stat, idx) => (
            <StatCard key={stat.id} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
