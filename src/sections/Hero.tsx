'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import FoundersMessage from '@/components/modals/FoundersMessage';
import OurNameModal from '@/components/modals/OurNameModal';

const dynamicTexts = [
  'build at the speed of thought',
  'ship products that matter',
  'architect the impossible',
  'transform ideas into reality',
];

export default function Hero() {
  const [showFoundersModal, setShowFoundersModal] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-[1200px] mx-auto w-full"
      >
        {/* Logo */}
        <div className="w-80 h-20 md:w-96 md:h-24 relative mx-auto mb-8">
          <Image src="/mylogo.png" alt="Haestus.dev" fill className="object-contain" priority />
        </div>

        {/* Accent Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-[#F97316] text-xs font-medium tracking-[4px] uppercase opacity-90">
            The AI Revolution Needs Architects
          </span>
        </motion.div>

        {/* Main Headline with Rotating Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 mb-8"
        >
          <span
            className="block text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em]"
            style={{
              background: 'linear-gradient(180deg, #FAFAFA 0%, #737373 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            We help you
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={textIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="block text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1] mt-3"
              style={{
                background: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {dynamicTexts[textIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-12 leading-relaxed font-light"
        >
          Full-stack AI development with enterprise standards. We take three projects per month
          because excellence doesn't scale linearly.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap mb-8"
        >
          <motion.button
            whileHover={{
              y: -2,
              boxShadow: '0 20px 40px rgba(249, 115, 22, 0.3), 0 0 60px rgba(249, 115, 22, 0.1)',
              borderColor: 'rgba(249, 115, 22, 0.6)'
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 bg-transparent text-[#F97316] rounded-lg text-sm font-medium transition-all duration-300 border border-[#F97316]/40 hover:bg-[#F97316]/5"
          >
            Start Building →
          </motion.button>

          <motion.button
            whileHover={{
              y: -2,
              borderColor: 'rgba(163, 163, 163, 0.4)',
              backgroundColor: 'rgba(255, 255, 255, 0.03)'
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 bg-transparent text-[#D4D4D4] rounded-lg text-sm font-medium border border-white/10 transition-all duration-300"
          >
            View Our Work
          </motion.button>
        </motion.div>

        {/* Secondary Buttons */}
        <div className="flex gap-3 justify-center">
          <motion.button
            onClick={() => setShowFoundersModal(true)}
            whileHover={{ scale: 1.02, borderColor: 'rgba(251, 146, 60, 0.3)', color: '#FB923C' }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2 border border-white/10 rounded-full text-[#737373] hover:text-[#FB923C] transition-all duration-300 text-xs tracking-wider"
          >
            Founder's Message
          </motion.button>
          <motion.button
            onClick={() => setShowNameModal(true)}
            whileHover={{ scale: 1.02, borderColor: 'rgba(251, 146, 60, 0.3)', color: '#FB923C' }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2 border border-white/10 rounded-full text-[#737373] hover:text-[#FB923C] transition-all duration-300 text-xs tracking-wider"
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
