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

const statsGroups = {
  performance: [
    { number: '3', label: 'Projects per month', icon: '🚀' },
    { number: '48hr', label: 'To first prototype', icon: '⚡' },
  ],
  quality: [
    { number: '99.9%', label: 'Uptime guarantee', icon: '🎯' },
    { number: '10x', label: 'Faster deployment', icon: '📈' },
  ],
};

const features = [
  {
    icon: '💎',
    title: 'Premium Architecture',
    description: 'Enterprise-grade systems built with precision',
  },
  {
    icon: '🎨',
    title: 'Design Excellence',
    description: 'World-class UI/UX that converts',
  },
  {
    icon: '🔒',
    title: 'Security First',
    description: 'Bank-level encryption & compliance',
  },
  {
    icon: '⚙️',
    title: 'AI-Powered',
    description: 'Cutting-edge AI integration',
  },
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
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-32">
      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-[1400px] mx-auto w-full"
      >
        {/* Logo with Glow Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-96 h-24 md:w-[480px] md:h-32 relative mx-auto mb-12"
          style={{
            filter: 'drop-shadow(0 0 30px rgba(255, 217, 61, 0.3))',
          }}
        >
          <Image src="/mylogo.png" alt="Haestus.dev" fill className="object-contain" priority />
        </motion.div>

        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 217, 61, 0.15) 0%, rgba(245, 197, 24, 0.1) 100%)',
            border: '1.5px solid rgba(255, 217, 61, 0.3)',
            boxShadow: '0 0 30px rgba(255, 217, 61, 0.15)',
          }}
        >
          <span className="text-2xl">✨</span>
          <span className="text-[#FFD93D] text-sm font-bold tracking-[2px] uppercase">
            The AI Revolution Needs Architects
          </span>
          <span className="text-2xl">✨</span>
        </motion.div>

        {/* Main Headline with Rotating Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="mb-4">
            <span
              className="block text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.95] tracking-tight"
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #D4D4D4 50%, #A3A3A3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              We help you
            </span>
          </h1>
          <AnimatePresence mode="wait">
            <motion.div
              key={textIndex}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -30, rotateX: 15 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h2
                className="text-[clamp(3rem,7vw,6rem)] font-black leading-[1] mt-4"
                style={{
                  background: 'linear-gradient(135deg, #FFD93D 0%, #FFF176 50%, #FFD93D 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 4px 20px rgba(255, 217, 61, 0.4))',
                }}
              >
                {dynamicTexts[textIndex]}
              </h2>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Subheading with Border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-[900px] mx-auto mb-12"
        >
          <div
            className="p-8 rounded-2xl"
            style={{
              background: 'rgba(255, 217, 61, 0.03)',
              border: '1px solid rgba(255, 217, 61, 0.15)',
            }}
          >
            <p className="text-xl md:text-2xl text-[#D4D4D8] leading-relaxed font-light">
              Full-stack AI development with enterprise standards. We take{' '}
              <span className="text-[#FFD93D] font-semibold">three projects per month</span>{' '}
              because excellence doesn't scale linearly.
            </p>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-[1100px] mx-auto"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-xl text-center"
              style={{
                background: 'rgba(20, 20, 23, 0.6)',
                border: '1px solid rgba(255, 217, 61, 0.2)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-white font-bold text-sm mb-2">{feature.title}</h3>
              <p className="text-[#A1A1AA] text-xs leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="space-y-6 mb-12"
        >
          <div className="flex gap-5 justify-center flex-wrap">
            <motion.button
              whileHover={{
                y: -3,
                boxShadow: '0 25px 50px rgba(255, 217, 61, 0.4)',
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 rounded-2xl text-[18px] font-bold transition-all duration-300 text-black"
              style={{
                background: 'linear-gradient(135deg, #FFD93D 0%, #FFF176 100%)',
                boxShadow: '0 10px 30px rgba(255, 217, 61, 0.3)',
              }}
            >
              Start Building →
            </motion.button>

            <motion.button
              whileHover={{
                y: -3,
                borderColor: 'rgba(255, 217, 61, 0.6)',
                boxShadow: '0 10px 30px rgba(255, 217, 61, 0.15)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-transparent text-white rounded-2xl text-[18px] font-bold transition-all duration-300"
              style={{
                border: '2px solid rgba(255, 217, 61, 0.3)',
              }}
            >
              View Our Work
            </motion.button>
          </div>

          {/* Secondary Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.button
              onClick={() => setShowFoundersModal(true)}
              whileHover={{ scale: 1.05, borderColor: 'rgba(255, 217, 61, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3.5 rounded-full text-white/80 hover:text-white transition-all duration-300 text-sm tracking-wide font-medium"
              style={{
                border: '1.5px solid rgba(255, 217, 61, 0.25)',
                background: 'rgba(255, 217, 61, 0.05)',
              }}
            >
              💭 Founder's Message
            </motion.button>
            <motion.button
              onClick={() => setShowNameModal(true)}
              whileHover={{ scale: 1.05, borderColor: 'rgba(255, 217, 61, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3.5 rounded-full text-white/80 hover:text-white transition-all duration-300 text-sm tracking-wide font-medium"
              style={{
                border: '1.5px solid rgba(255, 217, 61, 0.25)',
                background: 'rgba(255, 217, 61, 0.05)',
              }}
            >
              🏛️ Our Name
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Section - Grouped */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-12"
        >
          <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            {/* Performance Stats Group */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(255, 217, 61, 0.05)',
                border: '1.5px solid rgba(255, 217, 61, 0.2)',
              }}
            >
              <h3 className="text-[#FFD93D] text-sm font-bold tracking-[2px] uppercase mb-6 flex items-center gap-2">
                <span className="text-xl">⚡</span> Performance Metrics
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {statsGroups.performance.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-5xl md:text-6xl font-black text-[#FFD93D] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-[#A1A1AA] uppercase tracking-[1px]">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quality Stats Group */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(255, 217, 61, 0.05)',
                border: '1.5px solid rgba(255, 217, 61, 0.2)',
              }}
            >
              <h3 className="text-[#FFD93D] text-sm font-bold tracking-[2px] uppercase mb-6 flex items-center gap-2">
                <span className="text-xl">💎</span> Quality Standards
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {statsGroups.quality.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-5xl md:text-6xl font-black text-[#FFD93D] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-[#A1A1AA] uppercase tracking-[1px]">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modals */}
      <FoundersMessage isOpen={showFoundersModal} onClose={() => setShowFoundersModal(false)} />
      <OurNameModal isOpen={showNameModal} onClose={() => setShowNameModal(false)} />
    </section>
  );
}
