'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-24">
      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Main Title - Two Lines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white font-bold uppercase tracking-tight mb-12 text-[clamp(2.25rem,7.2vw,6.3rem)] leading-[0.95]"
        >
          <div>Crafting Digital</div>
          <div>Intelligence</div>
        </motion.h1>

        {/* Full Haestus.dev Logo - Positioned Below Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center mb-12"
        >
          <Image
            src="/official.trans.white.png"
            alt="Haestus.dev logo"
            width={400}
            height={200}
            className="object-contain max-w-full"
            style={{ maxWidth: '400px', height: 'auto' }}
            priority
          />
        </motion.div>

        {/* Button and Italic Text - Same Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-white/50 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/5"
          >
            Our Message &gt;
          </motion.button>

          <span className="hidden md:block text-slate-400 text-xl">|</span>

          <p className="text-white text-[clamp(1.5rem,4vw,2rem)] italic font-light leading-relaxed">
            "AI isn't coming, it's here."
          </p>
        </motion.div>

        {/* New Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/80 text-[clamp(1rem,2vw,1.25rem)] mb-8 leading-relaxed max-w-3xl mx-auto"
        >
          Not just developers, but <em>architects</em>. The new era of creators has just begun.
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
