'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import TechStackMarquee from '@/components/Homepage/TechStackMarquee';

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
          src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/mainheader4k.mp4"
          type="video/mp4"
        />
      </video>
      {/* Medium-dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}

export default function Framework() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "DISCOVERY & ALIGNMENT",
      shortTitle: "Discovery",
      description: "We don't start building until the mission is clear.",
      details: "Deep stakeholder interviews, system audits, goal alignment, success metrics definition. We ensure everyone understands the vision before any code is written."
    },
    {
      id: 2,
      number: "02",
      title: "ARCHITECTURE BLUEPRINT",
      shortTitle: "Blueprint",
      description: "We design the full intelligence layer before any development begins.",
      details: "Complete system architecture, data flow diagrams, technology stack selection, scalability planning. The blueprint becomes your roadmap for intelligent systems."
    },
    {
      id: 3,
      number: "03",
      title: "INTELLIGENCE CONSTRUCTION",
      shortTitle: "Construction",
      description: "We build the system: data pipelines, models, agents, UI, infrastructure.",
      details: "Full-stack development, ML model training, agent orchestration, API integrations, database design, frontend interfaces. Production-grade code from day one."
    },
    {
      id: 4,
      number: "04",
      title: "INTEGRATION",
      shortTitle: "Integration",
      description: "We embed intelligence into real workflows.",
      details: "Seamless integration with existing tools, workflow automation, user training, change management. Intelligence becomes part of daily operations, not a separate system."
    },
    {
      id: 5,
      number: "05",
      title: "PRODUCTION DEPLOYMENT",
      shortTitle: "Deployment",
      description: "Enterprise-grade, scalable, reliable.",
      details: "Load testing, security hardening, monitoring setup, observability, error handling, backup systems. We deploy systems that handle real business-critical operations."
    },
    {
      id: 6,
      number: "06",
      title: "COMPOUNDING EVOLUTION",
      shortTitle: "Evolution",
      description: "Your system gets smarter over time.",
      details: "Continuous learning, performance optimization, feature expansion, feedback loops. Intelligence compounds as your system ingests more data and learns from real usage."
    }
  ];

  return (
    <>
      {/* Video Background (ONLY for this page) */}
      <VideoBackground />

      {/* Page Content */}
      <div className="relative z-10 min-h-screen bg-transparent text-white">

        {/* Hero Section */}
        <section className="min-h-[50vh] flex items-center justify-center px-4 pt-32 pb-16">
          <div className="max-w-5xl mx-auto text-center">

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              The Forge Framework
            </h1>

            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8" />

            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              You can't scale what wasn't architected to survive.
            </p>

          </div>
        </section>

        {/* Pipeline/Stepper Section */}
        <section className="px-4 pb-12">
          <div className="max-w-7xl mx-auto">

            {/* Horizontal Pipeline Container */}
            <div className="bg-[#0a0a0a] border border-orange-500/30 rounded-2xl p-6 md:p-12 shadow-2xl backdrop-blur-sm">

              {/* Step Buttons (Horizontal on desktop, vertical on mobile) */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-0 relative">

                {steps.map((step, index) => (
                  <div key={step.id} className="flex flex-col md:flex-row items-center md:flex-1 relative">

                    {/* Step Button */}
                    <button
                      onClick={() => setActiveStep(step.id)}
                      className={`
                        relative group
                        w-full md:w-auto
                        flex flex-col items-center
                        p-4 md:p-6
                        rounded-xl
                        border-2
                        transition-all duration-300
                        ${activeStep === step.id
                          ? 'border-orange-500 bg-orange-500/10 scale-105'
                          : 'border-orange-500/20 bg-black/40 hover:border-orange-500/40 hover:scale-102'}
                      `}
                    >
                      {/* Step Number */}
                      <div className={`
                        text-3xl md:text-4xl font-bold mb-2
                        transition-colors duration-300
                        ${activeStep === step.id ? 'text-orange-500' : 'text-orange-500/40'}
                      `}>
                        {step.number}
                      </div>

                      {/* Step Title (Short version on desktop) */}
                      <div className={`
                        text-sm md:text-base font-semibold text-center
                        transition-colors duration-300
                        ${activeStep === step.id ? 'text-white' : 'text-gray-400'}
                      `}>
                        {step.shortTitle}
                      </div>

                      {/* Active Indicator Glow */}
                      {activeStep === step.id && (
                        <motion.div
                          layoutId="activeStepGlow"
                          className="absolute inset-0 rounded-xl bg-orange-500/20 -z-10"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </button>

                    {/* Connector Line (Not after last step) - Desktop Horizontal */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block flex-1 h-0.5 mx-2 relative">
                        {/* Background line */}
                        <div className="absolute inset-0 bg-orange-500/20" />

                        {/* Progress line (fills if step is completed/active) */}
                        <motion.div
                          className="absolute inset-0 bg-orange-500"
                          initial={{ scaleX: 0 }}
                          animate={{
                            scaleX: activeStep > step.id ? 1 : 0
                          }}
                          transition={{ duration: 0.4 }}
                          style={{ transformOrigin: 'left' }}
                        />

                        {/* Arrow indicator */}
                        {activeStep > step.id && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-orange-500"
                          >
                            →
                          </motion.div>
                        )}
                      </div>
                    )}

                    {/* Mobile Connector (Vertical) */}
                    {index < steps.length - 1 && (
                      <div className="md:hidden w-0.5 h-8 mx-auto relative">
                        <div className="absolute inset-0 bg-orange-500/20" />
                        <motion.div
                          className="absolute inset-0 bg-orange-500"
                          animate={{ scaleY: activeStep > step.id ? 1 : 0 }}
                          transition={{ duration: 0.4 }}
                          style={{ transformOrigin: 'top' }}
                        />
                      </div>
                    )}

                  </div>
                ))}

              </div>

              {/* Details Panel (Shows selected step details) */}
              <div className="mt-8 pt-8 border-t border-orange-500/20">

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >

                    {/* Full Step Title */}
                    <div>
                      <div className="text-5xl md:text-6xl font-bold text-orange-500/20 mb-2">
                        {steps[activeStep - 1].number}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {steps[activeStep - 1].title}
                      </h2>
                      <div className="w-16 h-1 bg-orange-500" />
                    </div>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-gray-300">
                      {steps[activeStep - 1].description}
                    </p>

                    {/* Detailed Explanation */}
                    <p className="text-lg text-gray-400 leading-relaxed">
                      {steps[activeStep - 1].details}
                    </p>

                  </motion.div>
                </AnimatePresence>

              </div>

            </div>

          </div>
        </section>

        {/* Tech Stack Section */}
        <TechStackMarquee />

        {/* Closing Statement */}
        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">

            <div className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-bold text-white">
                "Most companies build features.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-orange-500 mt-2">
                We build foundations."
              </p>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 pb-20">
          <div className="max-w-2xl mx-auto text-center">

            <p className="text-xl text-gray-300 mb-8">
              Ready to architect intelligence that compounds over time?
            </p>

            <Link
              href="/partnership"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105"
            >
              Request Partnership
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

          </div>
        </section>

      </div>
    </>
  );
}
