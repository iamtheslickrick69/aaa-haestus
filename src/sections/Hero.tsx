'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Logo placeholder - will be replaced */}
        <div className="mb-16" style={{ height: '250px' }} />

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white font-bold uppercase tracking-tight mb-8 text-[clamp(2.5rem,8vw,7rem)] leading-[0.95]"
        >
          Crafting Digital Intelligence
        </motion.h1>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.8)' }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 border border-white/50 text-white text-sm font-medium rounded-lg mb-12 transition-all duration-300 hover:bg-white/5"
        >
          Our Message
        </motion.button>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white text-[clamp(1.5rem,4vw,2rem)] italic font-light mb-6 leading-relaxed"
        >
          "AI isn't coming, it's here."
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/80 text-[clamp(1rem,2vw,1.25rem)] mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          We build the systems that defend humanity while amplifying human potential.
        </motion.p>

        {/* Two CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-gray-900 rounded-lg text-base font-semibold shadow-lg transition-all duration-300"
          >
            Start Building →
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-white text-white rounded-lg text-base font-semibold transition-all duration-300"
          >
            View Our Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
