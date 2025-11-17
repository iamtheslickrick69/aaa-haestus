'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Enterprise AI Dashboard',
    description: 'Real-time analytics and predictive modeling for Fortune 500 operations.',
    comingSoon: true,
  },
  {
    title: 'Intelligent Document Processing',
    description: 'Automated extraction and classification with 99.2% accuracy.',
    comingSoon: true,
  },
  {
    title: 'Conversational AI Platform',
    description: 'Multi-modal customer service automation reducing response time by 80%.',
    comingSoon: true,
  },
  {
    title: 'Predictive Maintenance System',
    description: 'IoT-integrated AI preventing equipment failures before they occur.',
    comingSoon: true,
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Machine learning models reducing logistics costs by 35%.',
    comingSoon: true,
  },
  {
    title: 'Custom LLM Integration',
    description: 'Fine-tuned language models for domain-specific applications.',
    comingSoon: true,
  },
];

export default function Portfolio() {
  return (
    <section className="py-32 px-6 bg-[#0b0b0b]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Portfolio <span className="text-white/50">(and growing)</span>
          </h2>
          <p className="text-lg text-[#B3B3B3]">
            We don't do MVPs. We ship products that feel inevitable.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black border border-[#1a1a1a] rounded-xl overflow-hidden group"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[#1a1a1a] to-black flex items-center justify-center">
                <div className="w-16 h-16 bg-[#CC0000]/10 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#CC0000]/30 rounded" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-[#B3B3B3] mb-4">{project.description}</p>
                {project.comingSoon && (
                  <span className="inline-block px-3 py-1 bg-[#CC0000]/10 border border-[#CC0000]/30 rounded text-xs text-[#CC0000] font-medium">
                    COMING SOON
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
