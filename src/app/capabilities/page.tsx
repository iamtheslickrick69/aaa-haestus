'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import {
  TrendingUp,
  Zap,
  Brain,
  Hammer,
  Database,
  Rocket
} from 'lucide-react';

// VideoBackground component
function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
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
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}

export default function Capabilities() {
  const capabilities = [
    {
      id: 1,
      number: "01",
      icon: TrendingUp,
      title: "REVENUE INTELLIGENCE",
      shortDesc: "Systems that increase conversions, upsells, and lifetime value using AI-driven workflows.",
      accentColor: 'blue',
    },
    {
      id: 2,
      number: "02",
      icon: Zap,
      title: "OPERATIONAL INTELLIGENCE",
      shortDesc: "AI that eliminates friction, reduces cost, and optimizes internal workflows.",
      accentColor: 'orange',
    },
    {
      id: 3,
      number: "03",
      icon: Brain,
      title: "FOUNDER INTELLIGENCE",
      shortDesc: "Tools that give leadership real-time insights, predictive capabilities, and clarity.",
      accentColor: 'blue',
    },
    {
      id: 4,
      number: "04",
      icon: Hammer,
      title: "CUSTOM SYSTEMS",
      shortDesc: "If it requires precision, architecture, and intelligence – we build it.",
      accentColor: 'orange',
    },
    {
      id: 5,
      number: "05",
      icon: Database,
      title: "DATA & INTEGRATIONS",
      shortDesc: "Data pipelines, vector databases, API integrations, embeddings, multi-agent systems.",
      accentColor: 'blue',
    },
    {
      id: 6,
      number: "06",
      icon: Rocket,
      title: "PRODUCTION-READY DEPLOYMENT",
      shortDesc: "We ship systems that scale, not demos that break.",
      accentColor: 'orange',
    }
  ];

  return (
    <>
      <VideoBackground />

      <div className="relative z-10 min-h-screen bg-transparent text-white">

        {/* Hero Section */}
        <section className="px-4 pt-32 pb-16">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              What We Build
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-300"
            >
              We build full-stack intelligence systems – from first pixel to final deployment.
            </motion.p>
          </div>
        </section>

        {/* Capabilities Cards - Vertical Stack */}
        <section className="px-4 py-12 pb-32">
          <div className="max-w-5xl mx-auto space-y-8">

            {capabilities.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <motion.div
                  key={capability.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border ${
                    capability.accentColor === 'blue'
                      ? 'border-blue-500/20 hover:border-blue-500/60 hover:shadow-blue-500/20'
                      : 'border-orange-500/20 hover:border-orange-500/60 hover:shadow-orange-500/20'
                  } hover:-translate-y-2 transition-all duration-400 shadow-lg`}
                >
                  {/* Number */}
                  <div className={`text-5xl font-bold mb-4 ${
                    capability.accentColor === 'blue' ? 'text-orange-500/30' : 'text-blue-500/30'
                  }`}>
                    {capability.number}
                  </div>

                  {/* Icon */}
                  <div className={`mb-4 ${
                    capability.accentColor === 'blue' ? 'text-blue-500' : 'text-orange-500'
                  }`}>
                    <Icon className="w-12 h-12" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {capability.title}
                  </h3>

                  {/* Underline */}
                  <div className={`w-16 h-1 mb-6 ${
                    capability.accentColor === 'blue'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400'
                      : 'bg-gradient-to-r from-orange-500 to-orange-600'
                  }`} />

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {capability.shortDesc}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </section>

      </div>
    </>
  );
}
