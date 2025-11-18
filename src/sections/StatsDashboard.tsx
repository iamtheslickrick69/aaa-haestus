'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    id: 1,
    number: '95%',
    description: 'of AI pilots never reach production',
  },
  {
    id: 2,
    number: '$2.6-4.4 TRILLION',
    description: 'Global annual value at stake',
  },
  {
    id: 3,
    number: '85M',
    description: 'jobs displaced by 2025',
    subtitle: 'The workforce transformation is happening now',
  },
  {
    id: 4,
    number: '1%',
    description: 'of orgs are AI-mature in deployment',
    subtitle: '99% fail to implement effectively',
  },
];

export default function StatsDashboard() {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#f8fafc] text-4xl md:text-5xl font-bold mb-4">
            AI Is Everywhere. Success Isn't.
          </h2>
          <p className="text-[#94a3b8] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Four numbers that explain why most AI initiatives fail—and why architecture matters more than ambition.
          </p>
        </motion.div>

        {/* Stats Layout */}
        <div className="space-y-0">
          {/* Stat 5 - Horizontal Banner (Most Prominent) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="bg-[#1e293b] border border-[#334155] rounded-t-xl p-8 md:p-10 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 mb-0"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-[#f8fafc] text-xl md:text-2xl leading-relaxed">
                  <span className="font-semibold">3 companies control 90%+</span> of AI cloud infrastructure.
                  The entire AI stack is consolidated in the hands of a few tech giants.
                </p>
              </div>
              <div className="flex gap-4 items-center opacity-60">
                <div className="text-[#f8fafc] text-xs font-mono">AWS</div>
                <div className="text-[#f8fafc] text-xs font-mono">Azure</div>
                <div className="text-[#f8fafc] text-xs font-mono">GCP</div>
              </div>
            </div>
          </motion.div>

          {/* Stats 1-4 - Four Equal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                className={`
                  bg-[#1e293b] border border-[#334155] p-8
                  flex flex-col items-center justify-center text-center
                  min-h-[280px] transition-all duration-300
                  hover:shadow-lg hover:shadow-white/5 hover:bg-[#2d3748]
                  ${index === 0 ? 'rounded-bl-xl' : ''}
                  ${index === 3 ? 'rounded-br-xl' : ''}
                  ${index !== 0 ? 'md:border-l-0' : ''}
                  border-t-0
                `}
              >
                {/* Large Number */}
                <div className="text-[#f8fafc] text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                  {stat.number}
                </div>

                {/* Description */}
                <p className="text-[#cbd5e1] text-sm md:text-base leading-relaxed mb-2">
                  {stat.description}
                </p>

                {/* Subtitle if exists */}
                {stat.subtitle && (
                  <p className="text-[#64748b] text-xs md:text-sm leading-relaxed mt-2">
                    {stat.subtitle}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
