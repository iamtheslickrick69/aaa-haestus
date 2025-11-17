'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FoundersMessage from '@/components/modals/FoundersMessage';
import OurNameModal from '@/components/modals/OurNameModal';

export default function Hero() {
  const [showFoundersModal, setShowFoundersModal] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);

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

        {/* Button Row */}
        <div className="flex gap-4 justify-center">
          <motion.button
            onClick={() => setShowFoundersModal(true)}
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-white/20 rounded-full text-white/70 hover:text-white transition-all duration-300 text-sm tracking-wide"
          >
            Founder's Message
          </motion.button>
          <motion.button
            onClick={() => setShowNameModal(true)}
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-white/20 rounded-full text-white/70 hover:text-white transition-all duration-300 text-sm tracking-wide"
          >
            Our Name
          </motion.button>
        </div>
      </motion.div>

      {/* Modals */}
      <FoundersMessage isOpen={showFoundersModal} onClose={() => setShowFoundersModal(false)} />
      <OurNameModal isOpen={showNameModal} onClose={() => setShowNameModal(false)} />
    </section>
  );
}
