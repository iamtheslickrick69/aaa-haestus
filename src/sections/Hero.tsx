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

const stats = [
  { number: '3', label: 'Projects per month' },
  { number: '48hr', label: 'To first prototype' },
  { number: '99.9%', label: 'Uptime guarantee' },
  { number: '10x', label: 'Faster deployment' },
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
          <span className="text-[#DC2626] text-sm font-semibold tracking-[2px] uppercase">
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
            className="block text-[clamp(3rem,7vw,6rem)] font-black leading-[1] tracking-tight"
            style={{
              background: 'linear-gradient(180deg, #FFFFFF 0%, #808080 100%)',
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
              className="block text-[clamp(2.5rem,6vw,5rem)] font-black text-[#DC2626] leading-[1.1] mt-2"
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
          className="text-lg md:text-xl text-[#A1A1AA] max-w-[700px] mx-auto mb-10 leading-relaxed"
        >
          Full-stack AI development with enterprise standards. We take three projects per month
          because excellence doesn't scale linearly.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-5 justify-center flex-wrap mb-6"
        >
          <motion.button
            whileHover={{ y: -2, boxShadow: '0 20px 40px rgba(220, 38, 38, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#DC2626] text-white rounded-xl text-[17px] font-semibold transition-all duration-300"
          >
            Start Building →
          </motion.button>

          <motion.button
            whileHover={{ y: -2, borderColor: 'rgba(220, 38, 38, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-transparent text-white rounded-xl text-[17px] font-semibold border-2 border-white/20 transition-all duration-300"
          >
            View Our Work
          </motion.button>
        </motion.div>

        {/* Secondary Buttons */}
        <div className="flex gap-4 justify-center mb-16">
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-10 border-t border-white/10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-[#DC2626] mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-[#71717A] uppercase tracking-[1px]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modals */}
      <FoundersMessage isOpen={showFoundersModal} onClose={() => setShowFoundersModal(false)} />
      <OurNameModal isOpen={showNameModal} onClose={() => setShowNameModal(false)} />
    </section>
  );
}
