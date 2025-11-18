'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Enterprise AI Dashboard',
    description: 'Real-time analytics and predictive modeling for Fortune 500 operations.',
    size: 'large',
    stats: '500K+ daily insights',
  },
  {
    title: 'Intelligent Document Processing',
    description: 'Automated extraction with 99.2% accuracy.',
    size: 'small',
    stats: '99.2% accuracy',
  },
  {
    title: 'Conversational AI Platform',
    description: 'Multi-modal customer service automation.',
    size: 'medium',
    stats: '80% faster response',
  },
  {
    title: 'Predictive Maintenance',
    description: 'IoT-integrated AI preventing failures.',
    size: 'small',
    stats: '45% cost reduction',
  },
  {
    title: 'Supply Chain Optimization',
    description: 'ML models reducing logistics costs by 35%.',
    size: 'medium',
    stats: '35% cost savings',
  },
  {
    title: 'Custom LLM Integration',
    description: 'Fine-tuned language models for domain-specific applications.',
    size: 'large',
    stats: '10x faster deployment',
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-[#0A0A0A] to-[#171717]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Portfolio{' '}
            <span className="text-white/60 font-light italic">(and growing)</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-medium">
            We don't do MVPs. We ship products that feel inevitable.
          </p>
        </motion.div>

        {/* Compact Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {/* Large Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs text-white font-bold mb-4">
                  COMING SOON
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {projects[0].title}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {projects[0].description}
                </p>
              </div>
              <div className="mt-6">
                <span className="text-3xl md:text-4xl font-black text-white/90">
                  {projects[0].stats}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-2 lg:col-span-1 bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <span className="inline-block px-2 py-0.5 bg-white/20 rounded-full text-[10px] text-white font-bold mb-3">
              SOON
            </span>
            <h3 className="text-sm md:text-base font-bold text-white mb-2">{projects[1].title}</h3>
            <p className="text-xl md:text-2xl font-black text-white/90">{projects[1].stats}</p>
          </motion.div>

          {/* Medium Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-2 lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <span className="inline-block px-2 py-0.5 bg-white/20 rounded-full text-[10px] text-white font-bold mb-3">
              COMING SOON
            </span>
            <h3 className="text-sm md:text-base font-bold text-white mb-2">{projects[2].title}</h3>
            <p className="text-white/60 text-xs mb-3">{projects[2].description}</p>
            <p className="text-xl md:text-2xl font-black text-white/90">{projects[2].stats}</p>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-1 bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <span className="inline-block px-2 py-0.5 bg-white/20 rounded-full text-[10px] text-white font-bold mb-3">
              SOON
            </span>
            <h3 className="text-xs md:text-sm font-bold text-white mb-2 leading-tight">
              {projects[3].title}
            </h3>
            <p className="text-lg md:text-xl font-black text-white/90">{projects[3].stats}</p>
          </motion.div>

          {/* Medium Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="col-span-1 md:col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <span className="inline-block px-2 py-0.5 bg-white/20 rounded-full text-[10px] text-white font-bold mb-3">
              COMING SOON
            </span>
            <h3 className="text-sm md:text-base font-bold text-white mb-2">{projects[4].title}</h3>
            <p className="text-white/60 text-xs mb-3">{projects[4].description}</p>
            <p className="text-xl md:text-2xl font-black text-white/90">{projects[4].stats}</p>
          </motion.div>

          {/* Large Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="col-span-2 md:col-span-4 lg:col-span-3 bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs text-white font-bold mb-3">
                  COMING SOON
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {projects[5].title}
                </h3>
                <p className="text-white/70 text-sm">{projects[5].description}</p>
              </div>
              <div className="text-right">
                <span className="text-3xl md:text-4xl font-black text-white/90 whitespace-nowrap">
                  {projects[5].stats}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 text-sm">
            More projects launching soon. We're selective about what we build.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
