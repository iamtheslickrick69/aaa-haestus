'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import FounderMessageModal from '@/components/FounderMessageModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <FounderMessageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-8 pb-24">

        {/* Main Title - Positioned High, Outside Widget - 30% Smaller */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[0.95]">
            <div>Crafting Digital</div>
            <div>Intelligence</div>
          </h1>
        </motion.div>

        {/* Full Haestus.dev Logo - Outside Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center mb-8 md:mb-12"
        >
          <Image
            src="/official.trans.white.png"
            alt="Haestus.dev logo"
            width={800}
            height={400}
            className="object-contain max-w-full"
            style={{ maxWidth: '800px', height: 'auto' }}
            priority
          />
        </motion.div>

        {/* GLASSMORPHISM CONTENT WIDGET */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 w-full"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">

            {/* Our Message Button */}
            <div className="flex justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 border border-white/30 text-white text-sm font-medium rounded-full hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                Our Message &gt;
              </motion.button>
            </div>

            {/* Quote - Larger, Bold "it's here" */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white text-center mb-4 italic font-light leading-relaxed">
              AI isn't coming, <span className="font-bold not-italic">it's here</span>
            </p>

            {/* Tagline */}
            <p className="text-base md:text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
              Not just developers, but <span className="italic">architects</span>. The new era of creators has just begun.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* About Button - BLACK FILL, WHITE TEXT for maximum contrast */}
              <Link href="/#about" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-900 transition-all duration-300 min-w-[200px] text-center shadow-lg cursor-pointer"
                >
                  About
                </motion.div>
              </Link>

              {/* Our Process Button - WHITE OUTLINE */}
              <Link href="/#framework" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl transition-all duration-300 min-w-[200px] text-center cursor-pointer"
                >
                  Our Process
                </motion.div>
              </Link>
            </div>

          </div>
        </motion.div>

      </section>
    </>
  );
}
