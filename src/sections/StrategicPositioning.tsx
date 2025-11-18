'use client';

import { motion } from 'framer-motion';

export default function StrategicPositioning() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Label Capsule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 bg-[#F97316]/10 border border-[#F97316]/30 rounded-full text-[#F97316] text-xs font-medium tracking-wider uppercase">
            Strategic Partnership Opportunities Open
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          THE AI REVOLUTION NEEDS ARCHITECTS
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/70 mb-8"
        >
          Bridging generations through intelligent transformation.
        </motion.p>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg text-[#B3B3B3] max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          We don't deploy AI solutions. We architect intelligence into the foundation of your organization, creating systems that amplify human potential and compound competitive advantage.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-[#F97316] text-white font-medium rounded-lg hover:bg-[#F97316]/90 transition-all duration-300 shadow-lg shadow-[#F97316]/25"
        >
          Explore Partnership
        </motion.button>
      </div>
    </section>
  );
}
