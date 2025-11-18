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
    description: 'control 90%+ of AI infrastructure',
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
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        y: -6,
        borderColor: 'rgba(255, 255, 255, 0.12)',
        background: 'rgba(30, 41, 59, 0.4)',
        boxShadow: stat.isFeatured
          ? '0 0 20px rgba(255, 107, 53, 0.2), 0 8px 24px rgba(0, 0, 0, 0.3)'
          : '0 8px 24px rgba(0, 0, 0, 0.3)',
      }}
      style={{
        flex: '1',
        minWidth: '180px',
        maxWidth: '200px',
        padding: '24px 20px',
        background: 'rgba(30, 41, 59, 0.3)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderTop: stat.isFeatured ? '3px solid #ff6b35' : '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'all 0.2s ease',
      }}
    >
      {/* Top: Number */}
      <div
        className="font-bold"
        style={{
          fontSize: '52px',
          color: '#ffffff',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          marginBottom: '12px',
        }}
      >
        <CountUpNumber value={stat.number} />
      </div>

      {/* Middle: Subtitle (TRILLION for featured) */}
      {stat.subtitle && (
        <div
          className="font-bold"
          style={{
            fontSize: '11px',
            color: '#ff6b35',
            letterSpacing: '0.1em',
            marginBottom: '8px',
          }}
        >
          {stat.subtitle}
        </div>
      )}

      {/* Bottom: Description */}
      <p
        style={{
          fontSize: '12px',
          color: '#94a3b8',
          lineHeight: 1.4,
          fontWeight: 400,
          maxWidth: '160px',
        }}
      >
        {stat.description}
      </p>
    </motion.div>
  );
}

export default function StatsDashboard() {
  return (
    <section
      className="relative w-full"
      style={{
        background: '#000000',
        paddingTop: '60px',
        paddingBottom: '60px',
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: '1400px',
          padding: '0 32px',
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '40px' }}
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
            }}
          >
            Four numbers that explain why most AI projects stall, and why architecture decides who actually wins.
          </p>
        </motion.div>

        {/* Horizontal Banner */}
        <div
          className="stats-banner"
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            alignItems: 'stretch',
            justifyContent: 'center',
            flexWrap: 'wrap',
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
