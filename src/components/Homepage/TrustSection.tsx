'use client';

import { motion } from 'framer-motion';

const companyGroups = {
  tech_giants: {
    title: 'Tech Leaders',
    icon: '🚀',
    companies: ['OpenAI', 'Anthropic', 'Google', 'Microsoft'],
  },
  innovation: {
    title: 'Innovation Hubs',
    icon: '💡',
    companies: ['Meta', 'Amazon', 'Apple', 'Tesla'],
  },
};

const trustMetrics = [
  { icon: '⭐', value: '5.0', label: 'Client Rating' },
  { icon: '🏆', value: '100%', label: 'Success Rate' },
  { icon: '🤝', value: '50+', label: 'Happy Clients' },
  { icon: '🌍', value: '15+', label: 'Countries' },
];

export default function TrustSection() {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1400px] mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-full"
            style={{
              background: 'rgba(255, 217, 61, 0.1)',
              border: '1px solid rgba(255, 217, 61, 0.25)',
            }}
          >
            <span className="text-xl">🌟</span>
            <span className="text-[#FFD93D] text-xs font-bold tracking-[2.5px] uppercase">
              Trusted by Industry Leaders
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            World-Class Partners
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#A1A1AA] max-w-[600px] mx-auto"
          >
            Join the ranks of innovative companies that trust us with their most critical projects
          </motion.p>
        </div>

        {/* Company Groups */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {Object.entries(companyGroups).map(([key, group], groupIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(20, 20, 23, 0.6)',
                border: '1.5px solid rgba(255, 217, 61, 0.2)',
                backdropFilter: 'blur(15px)',
              }}
            >
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#FFD93D]/20">
                <span className="text-3xl">{group.icon}</span>
                <h3 className="text-[#FFD93D] text-sm font-bold tracking-[2px] uppercase">
                  {group.title}
                </h3>
              </div>

              {/* Companies Grid */}
              <div className="grid grid-cols-2 gap-4">
                {group.companies.map((company, index) => (
                  <motion.div
                    key={company}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: groupIndex * 0.2 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: 'rgba(255, 217, 61, 0.5)',
                      boxShadow: '0 5px 20px rgba(255, 217, 61, 0.15)',
                    }}
                    className="p-4 rounded-xl text-center transition-all duration-300"
                    style={{
                      background: 'rgba(255, 217, 61, 0.03)',
                      border: '1px solid rgba(255, 217, 61, 0.15)',
                    }}
                  >
                    <div className="text-white/90 text-base md:text-lg font-semibold tracking-tight">
                      {company}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div
            className="p-10 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 217, 61, 0.08) 0%, rgba(255, 217, 61, 0.03) 100%)',
              border: '2px solid rgba(255, 217, 61, 0.25)',
              boxShadow: '0 0 60px rgba(255, 217, 61, 0.1)',
            }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Our Track Record</h3>
              <p className="text-[#A1A1AA]">Numbers that speak for themselves</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-3">{metric.icon}</div>
                  <div
                    className="text-4xl md:text-5xl font-black mb-2"
                    style={{
                      background: 'linear-gradient(135deg, #FFD93D 0%, #FFF176 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-sm text-[#A1A1AA] uppercase tracking-[1px] font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full"
            style={{
              background: 'rgba(255, 217, 61, 0.05)',
              border: '1.5px solid rgba(255, 217, 61, 0.2)',
            }}
          >
            <span className="text-2xl">🔒</span>
            <span className="text-white/80 text-sm font-medium">
              Enterprise-Grade Security & Compliance
            </span>
            <span className="text-[#FFD93D] text-xs font-bold px-3 py-1 rounded-full"
              style={{ background: 'rgba(255, 217, 61, 0.15)' }}
            >
              ISO 27001
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
