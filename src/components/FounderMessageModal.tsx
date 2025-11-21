'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface FounderMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FounderMessageModal({ isOpen, onClose }: FounderMessageModalProps) {
  // Scroll lock effect
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // ESC key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white/5 backdrop-blur-2xl border-2 border-blue-500 rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden"
            style={{
              boxShadow: '0 0 60px rgba(59, 130, 246, 0.6), 0 0 100px rgba(59, 130, 246, 0.4), inset 0 0 80px rgba(59, 130, 246, 0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 hover:text-blue-300 transition-all duration-200"
              style={{
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
              }}
              aria-label="Close founder's message"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[85vh] px-6 sm:px-8 md:px-12 py-8 md:py-12 custom-scrollbar">

              {/* Header */}
              <div className="mb-10 md:mb-12">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">✉️</span>
                  <h2 className="text-base md:text-lg tracking-[0.3em] font-bold uppercase text-blue-400">
                    OUR MESSAGE
                  </h2>
                </div>
                <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
                <p className="text-sm text-gray-400 mt-3 tracking-wider">
                  A Message from Rocky Bunker
                </p>
              </div>

              {/* Section 1: Addressing the Concerns */}
              <section className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">📊</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Addressing the Concerns — Identifying the Facts
                  </h3>
                </div>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                  People feel overwhelmed, and the data explains why.
                </p>

                {/* Data Callouts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  {/* 71% Stat */}
                  <div
                    className="relative bg-white/5 backdrop-blur-xl border-l-4 border-blue-500 p-6 rounded-lg overflow-hidden"
                    style={{
                      boxShadow: 'inset 0 0 30px rgba(59, 130, 246, 0.1)',
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400"></div>
                    <div
                      className="text-5xl md:text-6xl font-black text-blue-400 mb-3"
                      style={{
                        textShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
                      }}
                    >
                      71%
                    </div>
                    <p className="text-sm md:text-base text-gray-300">
                      of Americans believe AI could replace their jobs
                    </p>
                  </div>

                  {/* 95% Stat */}
                  <div
                    className="relative bg-white/5 backdrop-blur-xl border-l-4 border-blue-500 p-6 rounded-lg overflow-hidden"
                    style={{
                      boxShadow: 'inset 0 0 30px rgba(59, 130, 246, 0.1)',
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400"></div>
                    <div
                      className="text-5xl md:text-6xl font-black text-blue-400 mb-3"
                      style={{
                        textShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
                      }}
                    >
                      95%
                    </div>
                    <p className="text-sm md:text-base text-gray-300">
                      of AI projects never reach production
                    </p>
                  </div>
                </div>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
                  More than half feel less secure with their personal data. Meanwhile, organizations are left with prototypes instead of progress. The issue isn't AI — it's the widening gap between what's promised and what actually gets built.
                </p>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  These concerns are real, measurable, and justified. Ignoring them is how the divide grows.
                </p>
              </section>

              {/* Section 2: A Technology Humanity Has Never Faced */}
              <section className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🚀</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    A Technology Humanity Has Never Faced Before
                  </h3>
                </div>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                  For the first time in history, we're building systems that don't just store information — they interpret it, generate it, and act on it. Nothing before this compares. Not the computer, not the internet, not the smartphone. Those tools increased productivity. AI amplifies intelligence itself.
                </p>

                {/* Pull Quote */}
                <div
                  className="relative bg-blue-500/5 border-l-4 border-blue-500 p-6 md:p-8 my-8 rounded-r-lg"
                  style={{
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                  }}
                >
                  <div className="absolute -left-2 top-4 text-6xl text-blue-500 opacity-20">"</div>
                  <p className="text-xl md:text-2xl italic text-blue-100 leading-relaxed pl-6">
                    We're no longer shaping software; we're shaping decision-making systems that influence how people work, learn, and understand the world.
                  </p>
                </div>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  That means the potential is massive, and so is the responsibility. Treating this like any previous tech wave isn't just naive — it's dangerous.
                </p>
              </section>

              {/* Section 3: What AI Should Be */}
              <section className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🎯</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    What AI Should Be — and What It's Not
                  </h3>
                </div>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                  AI was never meant to replace people. It was meant to extend them. The real value isn't in automating entire roles — it's in eliminating the friction that slows teams down and clarifying decisions that used to take hours.
                </p>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                  When AI is built correctly, it gives people leverage: faster insight, cleaner workflows, and more consistent performance.
                </p>

                {/* Key Quote */}
                <div
                  className="bg-gradient-to-r from-blue-500/20 to-blue-400/20 border border-blue-500/30 p-6 md:p-8 rounded-xl my-6"
                  style={{
                    boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)',
                  }}
                >
                  <p className="text-lg md:text-xl font-semibold text-white text-center">
                    Bad teams use AI as a shortcut. Great teams use it as infrastructure.
                  </p>
                  <p className="text-sm text-blue-300 text-center mt-2">
                    That's the difference.
                  </p>
                </div>
              </section>

              {/* Section 4: The Infrastructure Gap */}
              <section className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🔧</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    The Infrastructure Gap
                  </h3>
                </div>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
                  The real gap forming today isn't between people who "have AI" and people who don't — everyone has access to the same models. The divide is between organizations that integrate AI into their operations and those that treat it like a novelty.
                </p>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  {/* Organizations That Build */}
                  <div
                    className="bg-white/5 backdrop-blur-xl border-2 border-blue-500/40 p-6 rounded-xl"
                    style={{
                      boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
                    }}
                  >
                    <h4 className="text-lg font-bold text-white mb-4">
                      ✓ Organizations That Build
                    </h4>
                    <ul className="space-y-3 text-sm md:text-base text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Integrate AI into operations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Build intelligence into workflow</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Become faster, clearer, more resilient</span>
                      </li>
                    </ul>
                  </div>

                  {/* Organizations That Wait */}
                  <div
                    className="bg-white/5 backdrop-blur-xl border-2 border-gray-700/40 p-6 rounded-xl opacity-60"
                  >
                    <h4 className="text-lg font-bold text-gray-300 mb-4">
                      ✗ Organizations That Wait
                    </h4>
                    <ul className="space-y-3 text-sm md:text-base text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">✗</span>
                        <span>Treat it like a novelty</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">✗</span>
                        <span>Rely on ad-hoc prompts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">✗</span>
                        <span>Get buried in complexity</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  This divide is real, and the organizations that refuse to build proper AI infrastructure will feel it first.
                </p>
              </section>

              {/* Section 5: AI as the Bridge Between Generations */}
              <section className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🌉</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    AI as the Bridge Between Generations
                  </h3>
                </div>

                <div
                  className="bg-gradient-to-r from-blue-500/10 to-blue-400/10 border border-blue-500/20 p-8 rounded-2xl"
                  style={{
                    boxShadow: '0 0 40px rgba(59, 130, 246, 0.15)',
                  }}
                >
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                    AI isn't just a technological shift — it's an opportunity to bridge generations. Everything we're building today rests on the foundations laid by the people before us: the workers, engineers, and leaders who created the systems and economy that made AI possible. They deserve access to this capability as much as we do.
                  </p>

                  <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                    And at the same time, we owe it to the next generation to build systems that strengthen their future rather than complicate it. AI shouldn't become a divide between age groups. It should be the link — a way to honor the past and empower the future.
                  </p>

                  <p className="text-base md:text-lg font-semibold text-blue-300 leading-relaxed text-center pt-4 border-t border-blue-500/20">
                    That's why Haestus builds systems that are intuitive for experienced teams and scalable for the next generation.
                  </p>
                </div>
              </section>

              {/* Section 6: Why I Built Haestus */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🔨</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Why I Built Haestus
                  </h3>
                </div>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                  Haestus exists to close the gap between what AI promises and what organizations actually achieve. Most teams aren't failing because they lack talent — they're failing because they lack the architecture to turn ideas into systems.
                </p>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                  I've seen this gap firsthand across dozens of teams. Haestus changes that. We build intelligence layers that become part of a company's foundation: clean data flows, scalable automations, and decision systems that compound in value over time. Not hype. Not theory. Infrastructure.
                </p>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
                  If you're ready to move past prototypes and into real production, to build with intention instead of reacting to noise, this is your moment. The future won't reward the people who wait — it will reward the people who build.
                </p>

                {/* Final CTA */}
                <div
                  className="bg-gradient-to-r from-blue-500/20 to-blue-400/20 border-2 border-blue-500 p-8 rounded-xl text-center"
                  style={{
                    boxShadow: '0 0 50px rgba(59, 130, 246, 0.4)',
                  }}
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-4xl">🔨</span>
                    <p className="text-2xl md:text-3xl font-bold text-white">
                      THIS IS YOUR MOMENT
                    </p>
                  </div>
                  <p className="text-xl md:text-2xl font-semibold text-blue-100">
                    Let's architect it together.
                  </p>
                </div>
              </section>

              {/* Professional Signature */}
              <div className="border-t border-white/10 pt-8 mt-12">
                <div className="flex items-center justify-end gap-6">
                  <div className="text-right">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      Rocky Bunker
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">
                      Founder & CEO, Haestus
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Custom Scrollbar Styles */}
            <style jsx>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 8px;
              }

              .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
              }

              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(59, 130, 246, 0.5);
                border-radius: 4px;
              }

              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(59, 130, 246, 0.7);
              }
            `}</style>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
