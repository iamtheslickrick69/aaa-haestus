'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.playbackRate = 0.9;
    };

    video.addEventListener('loadeddata', handleLoadedData);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source
          src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/thisistheone.mp4"
          type="video/mp4"
        />
      </video>
      {/* Light overlay - video visible but not distracting */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}

export default function Philosophy() {
  const principles = [
    {
      number: '01',
      title: 'HUMANS OVER AUTOMATION',
      text: 'Haestus architects AI systems that enhance judgment, creativity, and expertise — not eliminate it. We preserve human agency at critical points while multiplying capability.'
    },
    {
      number: '02',
      title: 'ARCHITECTURE OVER ASSEMBLY',
      text: 'Most AI MVPs fail because they\'re stitched together. We design systems deliberately, layer by layer, ensuring infrastructure supports compounding future value.'
    },
    {
      number: '03',
      title: 'PARTNERSHIP OVER TRANSACTION',
      text: 'We limit ourselves to three partnerships per month. Excellence requires focus. Transformation requires collaboration.'
    },
    {
      number: '04',
      title: 'TRUTH OVER HYPE',
      text: 'No inflated promises. No vaporware. Only real capabilities, real results, and real honesty.'
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
    <div className="relative min-h-screen bg-black text-white">
      {/* Video Background */}
      <VideoBackground />

      {/* Page Content - Cards overlaying video */}
      <div className="relative z-10">

        {/* Section 1: Hero */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-12 md:p-16 shadow-2xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                The Forge Philosophy
              </h1>
              <div className="w-24 h-1 bg-orange-500 mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* Section 2: Hephaestus Origin */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                  The name Haestus derives from Hephaestus, the Greek god of the forge — the divine craftsman who never sought glory, but amplified the power of heroes. He crafted Achilles' armor and Hermes' winged sandals. His work didn't replace warriors; it transformed them.
                </p>

                <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                  This is our philosophy.
                </p>

                <p className="text-2xl md:text-3xl font-bold text-orange-500">
                  AI should amplify humans, not replace them.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: The 4 Principles */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">

            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Principles
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto" />
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <div className="text-6xl font-bold text-orange-500/20 mb-4">{principle.number}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {principle.title}
                  </h3>
                  <div className="w-16 h-1 bg-orange-500 mb-6" />
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {principle.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 4: Why 90% Fail */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-12 md:p-16 shadow-2xl backdrop-blur-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <div className="text-8xl md:text-9xl font-bold text-orange-500 mb-4">
                  90%
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  OF AI PROJECTS FAIL
                </h2>
              </div>

              <div className="w-24 h-1 bg-orange-500 mx-auto mb-8" />

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Because they lack architecture. They chase demos, trends, and hype instead of structural, production-grade intelligence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 5: What We Refuse */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                WHAT WE REFUSE TO DO
              </h2>
              <div className="w-24 h-1 bg-orange-500 mb-8" />

              <motion.div
                className="space-y-6"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {refuseItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 }
                    }}
                  >
                    <div className="text-orange-500 text-2xl">✗</div>
                    <p className="text-xl text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 6: Founder's Message */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <div className="text-6xl text-orange-500/30 mb-4">"</div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  The Founder's Message
                </h2>
              </div>

              <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                <p>
                  Most people are overwhelmed right now, and honestly, it's reasonable. AI is moving faster than anything we've ever seen, and most of the world has no idea how to keep up.
                </p>

                <p>
                  AI isn't here to replace people. It's here to empower them. The only real divide will be between the people who learn how to use these tools and the people who wait too long to start.
                </p>

                <p>
                  If we do this right, AI won't widen the divide in our society. It'll give people the lift they've been missing. It'll help them rise.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-orange-500/20">
                <p className="text-xl text-orange-500 font-semibold">
                  — Rocky, Founder
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 7: CTA */}
        <section className="py-20 px-4 pb-32">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-8 shadow-2xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-gray-300 mb-8">
                Ready to build systems that amplify human capability?
              </p>

              <Link
                href="/capabilities"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105"
              >
                View Our Capabilities
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
