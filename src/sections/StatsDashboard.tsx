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
  },
  {
    id: 4,
    number: '1%',
    description: 'of orgs are AI-mature',
  },
];

export default function StatsDashboard() {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#f8fafc] text-[48px] font-bold mb-4 tracking-tight">
            AI Is Everywhere. Success Isn't.
          </h2>
          <p className="text-[#94a3b8] text-[18px] max-w-3xl mx-auto leading-relaxed">
            Four numbers that explain why most AI initiatives fail—and why architecture matters more than ambition.
          </p>
        </motion.div>

        {/* Stat 5 - Horizontal Banner (Top Priority) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{
            y: -2,
            boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1), 0 4px 6px rgba(0, 0, 0, 0.2)'
          }}
          className="bg-[#1f1f1f] border border-[#3a3a3a] rounded-2xl p-8 mb-8 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.2)]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-[#f8fafc] text-[20px] font-medium leading-relaxed">
                <span className="font-semibold">3 companies control 90%+</span> of AI cloud infrastructure.
                The entire AI stack is consolidated in the hands of a few tech giants.
              </p>
            </div>
            <div className="flex gap-4 items-center opacity-40">
              <div className="text-[#f8fafc] text-xs font-mono tracking-wider">AWS</div>
              <div className="text-[#f8fafc] text-xs font-mono tracking-wider">Azure</div>
              <div className="text-[#f8fafc] text-xs font-mono tracking-wider">GCP</div>
            </div>
          </div>
        </motion.div>

        {/* Stats 1-4 - Four Equal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{
                y: -2,
                boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1), 0 4px 6px rgba(0, 0, 0, 0.2)'
              }}
              className="bg-[#1f1f1f] border border-[#3a3a3a] rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[280px] transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.2)]"
            >
              {/* Large Number */}
              <div className="text-[#f8fafc] text-[56px] font-bold mb-6 tracking-[-0.02em] leading-none">
                {stat.number}
              </div>

              {/* Description */}
              <p className="text-[#cbd5e1] text-[16px] leading-[1.6] font-normal">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
