'use client';

import { motion } from 'framer-motion';

export default function ForgePhilosophy() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="text-xs text-white/50 tracking-[0.3em] uppercase font-medium">
            Our Foundation
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight"
        >
          THE FORGE PHILOSOPHY
        </motion.h2>

        {/* Intro Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl text-white/90 italic font-serif mb-12 leading-relaxed"
        >
          "In Greek mythology, Hephaestus didn't replace heroes—he forged the tools that made them legendary."
        </motion.blockquote>

        {/* Paragraphs */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg text-[#B3B3B3] mb-8 leading-relaxed"
        >
          The god of the forge crafted Achilles' armor, Hermes' winged sandals, and the weapons that shaped fate. True power lies not in replacing the warrior, but in amplifying their potential. Every creation was architecture—deliberate, transformative.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-lg text-[#B3B3B3] leading-relaxed"
        >
          We carry this wisdom forward. We don't build AI to replace your people. We architect intelligence that amplifies capability. As Hephaestus transformed metal into divine instruments, we transform data and algorithms into competitive advantage.
        </motion.p>
      </div>
    </section>
  );
}
