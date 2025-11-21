'use client';

import { motion } from 'framer-motion';

export default function About() {
  const principles = [
    {
      number: '01',
      title: 'HUMANS OVER AUTOMATION',
      text: 'Haestus architects AI systems that enhance judgment, creativity, and expertise—not eliminate it. We preserve human agency at critical points while multiplying capability.',
      accentColor: 'blue', // Blue border/underline, orange number
    },
    {
      number: '02',
      title: 'ARCHITECTURE OVER ASSEMBLY',
      text: 'Most AI MVPs fail because they\'re stitched together. We design systems deliberately, layer by layer, ensuring infrastructure supports compounding future value.',
      accentColor: 'orange', // Orange border/underline, blue number
    },
    {
      number: '03',
      title: 'PARTNERSHIP OVER TRANSACTION',
      text: 'We limit ourselves to three partnerships per month. Excellence requires focus. Transformation requires collaboration.',
      accentColor: 'blue', // Blue border/underline, orange number
    },
    {
      number: '04',
      title: 'TRUTH OVER HYPE',
      text: 'No inflated promises. No vaporware. Only real capabilities, real results, and real honesty.',
      accentColor: 'orange', // Orange border/underline, blue number
    }
  ];

  const refuseItems = [
    'Quick-fix MVPs',
    'Hype-driven automation',
    'Detached consulting',
    'Systems without purpose',
    'Architecture that won\'t survive scale'
  ];

  return (
    <div className="relative z-10 min-h-screen bg-[#0a0a0a] text-white">

      {/* Section 1: The Problem (90% Stat) */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
              The Reality
            </span>
          </motion.div>

          {/* 90% Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <h2 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">
              90%
            </h2>

            {/* Animated underline bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"
            />

            <p className="text-2xl md:text-3xl font-semibold text-white">
              of AI projects fail after POC
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Because they lack architecture. They chase demos, trends, and hype instead of structural, production-grade intelligence.
          </motion.p>

        </div>
      </section>

      {/* Section 2: Philosophy */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              Our Philosophy
            </span>
          </motion.div>

          {/* Philosophy Quote */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight"
          >
            "AI should amplify humans, not replace them."
          </motion.h2>

          {/* Hephaestus Reference Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-blue-500/20 shadow-2xl hover:border-blue-500/40 transition-all duration-400"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Hephaestus didn't replace heroes—he forged the tools that made them legendary. Same principle.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Section 3: Four Principles */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">

          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Principles
            </span>
          </motion.div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border ${
                  principle.accentColor === 'blue'
                    ? 'border-blue-500/20 hover:border-blue-500/60 hover:shadow-blue-500/20'
                    : 'border-orange-500/20 hover:border-orange-500/60 hover:shadow-orange-500/20'
                } hover:-translate-y-2 transition-all duration-400 shadow-lg`}
              >
                {/* Number */}
                <div className={`text-6xl font-bold mb-4 ${
                  principle.accentColor === 'blue' ? 'text-orange-500/20' : 'text-blue-500/20'
                }`}>
                  {principle.number}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {principle.title}
                </h3>

                {/* Underline */}
                <div className={`w-16 h-1 mb-6 ${
                  principle.accentColor === 'blue'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400'
                    : 'bg-gradient-to-r from-orange-500 to-orange-600'
                }`} />

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {principle.text}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Section 4: What We Refuse */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
              What We Refuse To Do
            </span>
          </motion.div>

          {/* List Container */}
          <div className="space-y-4">

            {refuseItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-center gap-4 text-lg md:text-xl"
              >
                <span className="text-orange-500 text-2xl">✗</span>
                <span className="text-white">{item}</span>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Section 5: Transition */}
      <section className="px-4 py-16 pb-32">
        <div className="max-w-3xl mx-auto text-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl text-gray-400 mb-8"
          >
            These principles guide everything we build
          </motion.p>

          {/* Animated Arrow */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-blue-500 text-4xl"
          >
            ↓
          </motion.div>

        </div>
      </section>

    </div>
  );
}
