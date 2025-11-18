'use client';

import { motion } from 'framer-motion';

export default function ForgeValues() {
  return (
    <section className="py-32 px-6 bg-[#0b0b0b]">
      <div className="max-w-6xl mx-auto">
        {/* Big Bold Statement */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center tracking-tight"
        >
          WE FORGE TOOLS. YOU WRITE THE LEGEND.
        </motion.h3>
      </div>
    </section>
  );
}
