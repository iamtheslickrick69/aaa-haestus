'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Logo */}
        <div className="w-48 h-12 relative mx-auto mb-12">
          <Image
            src="/mylogo.png"
            alt="Haestus.dev"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Crafting Digital Intelligence
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-light text-white/80 tracking-wide mb-8">
          AI isn't coming—it's here.
        </p>

        {/* Supporting sentence */}
        <p className="text-lg text-[#B3B3B3] max-w-2xl mx-auto mb-12 leading-relaxed">
          We are pioneering intelligent systems that transform businesses from the inside out.
        </p>

        {/* Founder's Message Button */}
        <motion.button
          onClick={() => setShowModal(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 border border-white/20 rounded-lg text-white/70 hover:text-white hover:border-white/40 transition-all duration-300 text-sm tracking-wide"
        >
          Founder's Message
        </motion.button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            onClick={() => setShowModal(false)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#0b0b0b] border border-[#1a1a1a] rounded-xl p-8 max-w-2xl w-full shadow-2xl"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-2xl font-semibold text-white mb-4">From the Founder</h3>
              <p className="text-[#B3B3B3] leading-relaxed mb-4">
                The forge is where transformation happens. Not through shortcuts or quick fixes, but through deliberate, systematic craftsmanship.
              </p>
              <p className="text-[#B3B3B3] leading-relaxed">
                We built Haestus because the AI revolution needs architects, not just assemblers. Every system we create is forged with precision—designed to amplify human potential and create lasting competitive advantage.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
