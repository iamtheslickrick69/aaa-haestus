'use client';

import { motion } from 'framer-motion';

const values = [
  {
    title: 'HUMANS OVER AUTOMATION',
    description: 'AI should amplify human capability, not eliminate it.',
  },
  {
    title: 'ARCHITECTURE OVER ASSEMBLY',
    description: "We don't stack components—we design systems that create compounding value.",
  },
  {
    title: 'PARTNERSHIP OVER TRANSACTION',
    description: 'We forge lasting relationships with organizations committed to transformation.',
  },
  {
    title: 'TRUTH OVER HYPE',
    description: 'No inflated promises. Only real capabilities, real results.',
  },
];

export default function ForgeValues() {
  return (
    <section className="py-32 px-6 bg-[#0b0b0b]">
      <div className="max-w-6xl mx-auto">
        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black border border-[#1a1a1a] rounded-xl p-8"
            >
              <h3 className="text-lg font-bold text-[#CC0000] mb-3 tracking-wide">
                {value.title}
              </h3>
              <p className="text-[#B3B3B3] leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white/60 text-lg mb-12"
        >
          The forge isn't where we work—it's how we think.
        </motion.p>

        {/* Big Bold Statement */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-white text-center tracking-tight"
        >
          WE FORGE TOOLS. YOU WRITE THE LEGEND.
        </motion.h3>
      </div>
    </section>
  );
}
