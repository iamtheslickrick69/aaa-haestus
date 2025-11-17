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
      number: '01',
      description:
        "Full-stack AI development. Enterprise-grade standards. We take three projects per month because excellence doesn't scale linearly. Quality accelerates delivery.",
    },
    {
      label: 'CAPABILITY',
      title: 'WHAT WE DO',
      number: '02',
      description:
        'We build AI-powered applications from first pixel to final deployment. Everyone has the same AI tools now. The differentiator is architecture—knowing what to build, how to structure it, and which problems matter.',
    },
    {
      label: 'PHILOSOPHY',
      title: 'WHY HAESTUS',
      number: '03',
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
        paddingTop: '140px',
        paddingBottom: '180px',
      }}
    >
      {/* Content */}
      <div ref={ref} className="relative z-[1] max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {content.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-3xl p-8 bg-white hover:-translate-y-1 transition-all duration-300"
              style={{
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
              }}
            >
              {/* Number Badge */}
              <div className="absolute top-8 right-8">
                <span className="text-[11px] font-mono font-semibold text-neutral-300 tracking-wider">
                  {item.number}
                </span>
              </div>

              {/* Icon/Label */}
              <div className="mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#DC2626]/[0.08] mb-4">
                  <span className="text-[10px] font-black tracking-[1px] text-[#DC2626]">
                    {item.label.slice(0, 2)}
                  </span>
                </span>
                <span className="block text-[11px] font-bold tracking-[2px] text-[#DC2626]/80 uppercase">
                  {item.label}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[20px] md:text-[22px] font-bold text-[#0A0A0B] mb-4 tracking-tight leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] md:text-[15px] leading-[1.75] text-neutral-500 font-normal">
                {item.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="mt-6 pt-4 border-t border-neutral-100">
                <div className="w-8 h-0.5 bg-[#DC2626]/30 group-hover:w-12 group-hover:bg-[#DC2626]/60 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
