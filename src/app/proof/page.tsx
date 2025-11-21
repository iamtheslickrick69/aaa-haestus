'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import CountUp from 'react-countup';
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
          src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/yeet.mp4"
          type="video/mp4"
        />
      </video>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}

export default function Proof() {
  const metrics = [
    {
      id: 1,
      number: 500000,
      separator: ',',
      suffix: '+',
      decimals: 0,
      label: 'Daily Insights',
      subtext: 'Fortune 500 Operations',
      company: 'UBILL.IO'
    },
    {
      id: 2,
      number: 99.2,
      separator: '',
      suffix: '%',
      decimals: 1,
      label: 'Accuracy Rate',
      subtext: 'Document Extraction',
      company: 'PESTCTRL.AI'
    },
    {
      id: 3,
      number: 80,
      separator: '',
      suffix: '%',
      decimals: 0,
      label: 'Faster Response',
      subtext: 'Customer Service Platform',
      company: 'BID MY BRACE'
    },
    {
      id: 4,
      number: 35,
      separator: '',
      suffix: '%',
      decimals: 0,
      label: 'Cost Reduction',
      subtext: 'ML-Driven Logistics',
      company: 'CREW CAM'
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">

      {/* Video Background (ONLY for this page) */}
      <VideoBackground />

      {/* Page Content */}
      <div className="relative z-10">

        {/* Hero Section */}
        <section className="min-h-[40vh] flex items-center justify-center px-4 pt-32 pb-12">
          <div className="max-w-4xl mx-auto text-center">

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Proof of Work
            </h1>

            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8" />

            <p className="text-2xl md:text-3xl text-white font-light">
              Not promises. Not prototypes.
            </p>
            <p className="text-2xl md:text-3xl text-orange-500 font-bold">
              Proof.
            </p>

          </div>
        </section>

        {/* Dashboard Widget Section */}
        <section className="px-4 pb-12">
          <div className="max-w-6xl mx-auto">

            {/* Dashboard Container */}
            <div className="bg-[#0a0a0a] border border-orange-500/30 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">

              {/* Grid of 4 Metric Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="
                      relative
                      bg-black/40
                      border border-orange-500/20
                      rounded-xl
                      p-6 md:p-8
                      hover:border-orange-500/40
                      hover:-translate-y-1
                      transition-all duration-300
                      group
                    "
                  >

                    {/* Animated Number (Primary Focus) */}
                    <div className="mb-4">
                      <motion.div
                        className="text-6xl md:text-7xl font-bold font-mono bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      >
                        <CountUp
                          end={metric.number}
                          duration={2}
                          separator={metric.separator}
                          suffix={metric.suffix}
                          decimals={metric.decimals}
                          useEasing={true}
                        />
                      </motion.div>
                    </div>

                    {/* Metric Label */}
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                      {metric.label}
                    </h3>

                    {/* Subtext */}
                    <p className="text-base text-gray-400 mb-4">
                      {metric.subtext}
                    </p>

                    {/* Company Name (Small, Bottom) */}
                    <div className="text-sm text-orange-500/60 font-mono uppercase tracking-wider">
                      {metric.company}
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  </motion.div>
                ))}

              </div>

            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 pb-20">
          <div className="max-w-2xl mx-auto text-center">

            <p className="text-xl text-gray-300 mb-8">
              See how we architect systems that deliver measurable results.
            </p>

            <Link
              href="/framework"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105"
            >
              View Our Framework
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

          </div>
        </section>

      </div>
    </div>
  );
}
