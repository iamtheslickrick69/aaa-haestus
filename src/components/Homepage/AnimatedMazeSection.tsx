'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AnimatedMazeSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const content = [
    {
      label: 'IDENTITY',
      title: 'WHO WE ARE',
      description:
        "Full-stack AI development. Enterprise-grade standards. We take three projects per month because excellence doesn't scale linearly. Quality accelerates delivery.",
    },
    {
      label: 'CAPABILITY',
      title: 'WHAT WE DO',
      description:
        'We build AI-powered applications from first pixel to final deployment. Everyone has the same AI tools now. The differentiator is architecture—knowing what to build, how to structure it, and which problems matter.',
    },
    {
      label: 'PHILOSOPHY',
      title: 'WHY HAESTUS',
      description:
        "Hephaestus forged tools for humans to fight gods. We do the same. AI gives you fire; experience gives you the blueprint. Every system is engineered, not assembled. Built to last.",
    },
  ];

  return (
    <section
      className="relative w-full"
      style={{
        backgroundImage: 'url("/bg-haestus-grid.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '120px',
        paddingBottom: '160px',
      }}
    >
      {/* Content */}
      <div ref={ref} className="relative z-[1] max-w-[1400px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-[60px]">
          {content.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="rounded-[20px] p-10 bg-white"
              style={{
                border: '1px solid rgba(220, 38, 38, 0.1)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              }}
            >
              <span className="block text-[12px] font-bold tracking-[2px] text-[#DC2626] mb-3">
                {item.label}
              </span>

              <h3 className="text-[24px] font-extrabold text-[#0A0A0B] mb-5 tracking-tight">
                {item.title}
              </h3>

              <p className="text-[16px] leading-[1.7] text-[#52525B] font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
