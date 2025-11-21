'use client';

import Hero from '@/sections/Hero';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FounderMessageModal from '@/components/FounderMessageModal';
import {
  TrendingUp,
  Zap,
  Brain,
  Hammer,
  Database,
  Rocket,
  Settings,
  Code,
  Palette,
  Target,
  Search,
  FileText,
  Link2
} from 'lucide-react';

function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set playback rate to 0.9x for cinematic effect
    video.playbackRate = 0.9;
  }, []);

  return (
    <div className="absolute inset-0 -z-10 bg-black overflow-hidden flex items-center justify-center">
      {!videoError ? (
        <>
          {/* Video Background - Visible but not overwhelming */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: 'scale(0.65)',
            }}
            className="pointer-events-none opacity-60"
          >
            <source
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/worldvid.mp4"
              type="video/mp4"
            />
          </video>
          {/* Subtle dark overlay to maintain logo visibility */}
          <div className="absolute inset-0 bg-black/30" />
        </>
      ) : (
        /* Fallback gradient background when video fails */
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      )}
    </div>
  );
}

{/* ABOUT PAGE TAB COMPONENTS */}

// Philosophy Tab - Contains 90% stat and philosophy quote
function PhilosophyTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* THE REALITY - 90% Stat Card - Matches Capabilities Style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group p-8 md:p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/60 hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-400 shadow-lg"
      >
        {/* Number */}
        <div className="text-4xl font-bold mb-3 text-white/20">
          01
        </div>

        {/* Large Stat */}
        <div className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-4">
          90%
        </div>

        {/* Blue underline - Matches Capabilities */}
        <div className="w-12 h-1 mb-4 bg-gradient-to-r from-blue-500 to-cyan-400" />

        {/* Main label - White text */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
          of AI projects fail after POC
        </h3>

        {/* Description - Gray text like Capabilities */}
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
          Because they lack architecture. They chose demos, trends, and hype
          instead of structural, production-grade intelligence.
        </p>

        {/* Conclusion */}
        <p className="text-base md:text-lg text-white font-semibold mt-2">
          That&apos;s the gap we close.
        </p>
      </motion.div>

      {/* Philosophy Quote Card - Matches Capabilities Style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="group p-8 md:p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/60 hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-400 shadow-lg"
      >
        {/* Number */}
        <div className="text-4xl font-bold mb-3 text-white/20">
          02
        </div>

        {/* Quote Title - White */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          &quot;AI should amplify humans, not replace them.&quot;
        </h3>

        {/* Blue underline */}
        <div className="w-12 h-1 mb-6 bg-gradient-to-r from-blue-500 to-cyan-400" />

        {/* Nested explanation card - Subtle dark variation */}
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
          {/* Subheading - White */}
          <p className="text-lg md:text-xl text-white font-semibold mb-4 leading-relaxed">
            Hephaestus didn&apos;t replace heroes—he forged the tools that made them legendary.
            Same principle.
          </p>

          {/* Description - Gray */}
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            We architect AI systems that enhance judgment, creativity, and expertise—not
            eliminate it. We preserve human agency at critical points while multiplying
            capability. The goal isn&apos;t automation. It&apos;s augmentation.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Principles Tab - Contains HOW WE WORK 4 cards
function PrinciplesTab({ principles }: { principles: Array<{ number: string; title: string; text: string }> }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <p className="text-center text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
        HOW WE WORK
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300"
          >
            <div className="text-4xl font-bold text-white/20 mb-4">
              {principle.number}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              {principle.title}
            </h3>
            <div className="h-1 w-16 bg-white/30 rounded-full mb-4"></div>

            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              {principle.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Values Tab - Contains WHAT WE REFUSE TO DO
function ValuesTab({ refuseItems }: { refuseItems: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto"
    >
      <div
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12"
        style={{
          boxShadow: '0 0 40px rgba(255, 255, 255, 0.05)',
        }}
      >
        <p className="text-sm font-semibold text-white/60 uppercase tracking-widest text-center mb-6">
          WHAT WE REFUSE TO DO
        </p>

        <p className="text-2xl md:text-3xl text-white text-center mb-12 font-semibold">
          We don&apos;t take every project. We take the right projects.
        </p>

        <div className="space-y-4">
          {refuseItems.map((refusal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-white/8 transition-all duration-200"
            >
              <svg
                className="w-6 h-6 text-white/60 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <p className="text-base md:text-lg text-gray-300">
                {refusal}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-base md:text-lg text-gray-400 text-center italic">
            If you&apos;re looking for fast demos and buzzwords, we&apos;re not your team.
            <br />
            If you&apos;re ready to build systems that compound in value—let&apos;s talk.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

{/* IMPACT PAGE SUB-COMPONENTS */}

// Tab 1: Impact (Metrics)
function ImpactTab() {
  return (
    <motion.div
      key="impact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto"
    >

      {/* Subtitle */}
      <div className="text-center mb-12">
        <p className="text-lg text-gray-400">
          Not promises. Not prototypes. <span className="text-blue-400 font-semibold">Proof.</span>
        </p>
      </div>

      {/* 2x2 Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

        {/* Metric 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/20 hover:border-white/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-white/20"
        >
          <div className="text-6xl md:text-7xl font-bold text-white mb-4">
            500,000+
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Daily Insights</h3>
          <div className="w-16 h-1 bg-white mb-4" />
          <p className="text-blue-400 mb-3">Fortune 500 Operations</p>
          <p className="text-sm text-blue-400/80 font-mono">UBILL.IO</p>
        </motion.div>

        {/* Metric 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/20 hover:border-white/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-white/20"
        >
          <div className="text-6xl md:text-7xl font-bold text-white mb-4">
            99.2%
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Accuracy Rate</h3>
          <div className="w-16 h-1 bg-white mb-4" />
          <p className="text-blue-400 mb-3">Document Extraction</p>
          <p className="text-sm text-blue-400/80 font-mono">PESTCTRL.AI</p>
        </motion.div>

        {/* Metric 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/20 hover:border-white/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-white/20"
        >
          <div className="text-6xl md:text-7xl font-bold text-white mb-4">
            80%
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Faster Response</h3>
          <div className="w-16 h-1 bg-white mb-4" />
          <p className="text-blue-400 mb-3">Customer Service Platform</p>
          <p className="text-sm text-blue-400/80 font-mono">BID MY BRACE</p>
        </motion.div>

        {/* Metric 4 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/20 hover:border-white/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-white/20"
        >
          <div className="text-6xl md:text-7xl font-bold text-white mb-4">
            35%
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Cost Reduction</h3>
          <div className="w-16 h-1 bg-white mb-4" />
          <p className="text-blue-400 mb-3">ML-Driven Logistics</p>
          <p className="text-sm text-blue-400/80 font-mono">CREW CAM</p>
        </motion.div>

      </div>

    </motion.div>
  );
}

// Tab 2: Work (Projects)
function WorkTab() {
  return (
    <motion.div
      key="work"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto"
    >

      {/* Subtitle */}
      <div className="text-center mb-12">
        <p className="text-lg text-blue-400">
          Production systems that deliver measurable business value.
        </p>
      </div>

      {/* Featured Project */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="group mb-8 p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/20 hover:border-white/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-white/20"
      >
        <div className="mb-4">
          <span className="text-sm text-blue-400 font-semibold uppercase tracking-wider">Featured Project</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">UBILL.IO</h3>
        <div className="w-24 h-1 bg-white mb-6" />
        <p className="text-xl text-blue-400 mb-6">
          Revenue Intelligence Platform for Fortune 500 Operations
        </p>
        <p className="text-blue-400 leading-relaxed mb-6">
          Built a full-stack AI system that processes 500,000+ daily insights from billing operations,
          reducing manual review time by 73% and increasing revenue recognition accuracy to 99.8%.
          Architected for scale from day one with real-time dashboards, predictive analytics, and
          automated workflow orchestration.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">Python</span>
          <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">Claude API</span>
          <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">Next.js</span>
          <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">PostgreSQL</span>
          <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">Vector DB</span>
        </div>
      </motion.div>

      {/* Grid of 3 More Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Project 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/20 hover:border-white/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-white/20"
        >
          <h4 className="text-xl font-bold text-white mb-2">PESTCTRL.AI</h4>
          <div className="w-12 h-1 bg-white mb-4" />
          <p className="text-blue-400 text-sm mb-4">
            Document extraction system with 99.2% accuracy processing thousands of service records daily.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">GPT-4</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">OCR</span>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/20 hover:border-white/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-white/20"
        >
          <h4 className="text-xl font-bold text-white mb-2">BID MY BRACE</h4>
          <div className="w-12 h-1 bg-white mb-4" />
          <p className="text-blue-400 text-sm mb-4">
            Customer service intelligence reducing response time by 80% with AI-powered ticket routing and resolution.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">NLP</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">Automation</span>
          </div>
        </motion.div>

        {/* Project 4 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/20 hover:border-white/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-white/20"
        >
          <h4 className="text-xl font-bold text-white mb-2">CREW CAM</h4>
          <div className="w-12 h-1 bg-white mb-4" />
          <p className="text-blue-400 text-sm mb-4">
            ML-driven logistics optimization cutting operational costs by 35% through predictive routing.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">ML</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">Optimization</span>
          </div>
        </motion.div>

      </div>

    </motion.div>
  );
}

// Tab 3: People (Team)
function PeopleTab() {
  return (
    <motion.div
      key="people"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto"
    >

      {/* Subtitle */}
      <div className="text-center mb-12">
        <p className="text-lg text-blue-400">
          World-class talent, <span className="text-blue-400 font-semibold">purpose-built teams</span>.
        </p>
      </div>

      {/* Role Cards - 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

        {/* Role 1: AI/ML Engineers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/20 hover:border-white/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-white/20"
        >
          <Settings className="w-12 h-12 text-blue-400 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-2">AI/ML Engineers</h3>
          <div className="w-16 h-1 bg-white mb-6" />
          <ul className="space-y-2 text-blue-400">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              <span>LLM integration specialists (Claude, GPT-4)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              <span>Vector database architects</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              <span>Python, embeddings, RAG systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              <span>Production ML pipeline experts</span>
            </li>
          </ul>
        </motion.div>

        {/* Role 2: Full-Stack Developers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/20 hover:border-white/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-white/20"
        >
          <Code className="w-12 h-12 text-blue-400 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-2">Full-Stack Developers</h3>
          <div className="w-16 h-1 bg-white mb-6" />
          <ul className="space-y-2 text-blue-400">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              <span>Next.js, React, TypeScript experts</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              <span>Node.js, Python backend specialists</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              <span>API design and integration</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              <span>Real-time systems architecture</span>
            </li>
          </ul>
        </motion.div>

        {/* Role 3: UX/UI Designers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/20 hover:border-white/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-white/20"
        >
          <Palette className="w-12 h-12 text-blue-400 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-2">UX/UI Designers</h3>
          <div className="w-16 h-1 bg-white mb-6" />
          <ul className="space-y-2 text-blue-400">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              <span>Product design for AI systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              <span>User research and testing</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              <span>Design systems and component libraries</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              <span>Interaction design for complex workflows</span>
            </li>
          </ul>
        </motion.div>

        {/* Role 4: Technical Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/20 hover:border-white/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-white/20"
        >
          <Target className="w-12 h-12 text-blue-400 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-2">Technical Leadership</h3>
          <div className="w-16 h-1 bg-white mb-6" />
          <ul className="space-y-2 text-blue-400">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              <span>Solutions architects</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              <span>Technical project managers</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              <span>Strategic technical advisors</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              <span>Go-to-market partners</span>
            </li>
          </ul>
        </motion.div>

      </div>

    </motion.div>
  );
}

// Tab 4: Tech (Stack)
function TechTab() {
  return (
    <motion.div
      key="tech"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto"
    >

      {/* Subtitle */}
      <div className="text-center mb-12">
        <p className="text-lg text-blue-400">
          Built on <span className="text-blue-400 font-semibold">production-grade intelligence</span>.
        </p>
      </div>

      {/* Tech Stack Sections */}
      <div className="space-y-8">

        {/* AI/ML Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/20"
        >
          <h3 className="text-xl font-bold text-white mb-4">AI & Machine Learning</h3>
          <div className="w-16 h-1 bg-white mb-6" />
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">Claude API</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">GPT-4</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">Pinecone</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">Qdrant</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">LangChain</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">Vector Embeddings</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">RAG Systems</span>
          </div>
        </motion.div>

        {/* Frontend Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/20"
        >
          <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
          <div className="w-16 h-1 bg-white mb-6" />
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">Next.js</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">React</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">TypeScript</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">Tailwind CSS</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">Framer Motion</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">Shadcn/ui</span>
          </div>
        </motion.div>

        {/* Backend Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/20"
        >
          <h3 className="text-xl font-bold text-white mb-4">Backend & Data</h3>
          <div className="w-16 h-1 bg-white mb-6" />
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">Python</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">FastAPI</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">Node.js</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">PostgreSQL</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">Supabase</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">Redis</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">Prisma</span>
          </div>
        </motion.div>

        {/* Infrastructure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/20"
        >
          <h3 className="text-xl font-bold text-white mb-4">Infrastructure & DevOps</h3>
          <div className="w-16 h-1 bg-white mb-6" />
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">Vercel</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">AWS</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">Railway</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">Docker</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">GitHub Actions</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">CloudFlare</span>
          </div>
        </motion.div>

      </div>

    </motion.div>
  );
}

{/* INSIGHTS PAGE DATA */}

const featuredArticle = {
  id: 1,
  title: "Why 90% of AI Projects Fail After POC",
  excerpt: "The gap between proof of concept and production is where most AI initiatives die. Architecture matters more than ambition.",
  readTime: "8 min read",
  date: "DEC 2024",
  slug: "why-90-percent-ai-projects-fail"
};

const articles = [
  {
    id: 2,
    title: "The Architecture-First Approach to AI",
    excerpt: "Building AI systems that scale requires thinking beyond the model.",
    date: "DEC 2024",
    slug: "architecture-first-approach"
  },
  {
    id: 3,
    title: "Humans Over Automation: A Framework",
    excerpt: "AI should amplify human capability, not replace it.",
    date: "NOV 2024",
    slug: "humans-over-automation"
  },
  {
    id: 4,
    title: "The True Cost of Technical Debt in AI",
    excerpt: "Shortcuts in AI development compound exponentially.",
    date: "NOV 2024",
    slug: "true-cost-technical-debt"
  },
  {
    id: 5,
    title: "Beyond the Hype: Real AI Capabilities",
    excerpt: "Separating what AI can actually do from what marketers claim.",
    date: "OCT 2024",
    slug: "beyond-the-hype"
  },
  {
    id: 6,
    title: "Building AI Teams That Last",
    excerpt: "The talent shortage is real, but the bigger problem is retention.",
    date: "OCT 2024",
    slug: "building-ai-teams"
  }
];

{/* INSIGHTS BANNER COMPONENT */}
function InsightsBanner() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      {/* Video Background - Insights Section */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          ref={(el) => {
            if (el) el.playbackRate = 0.7;
          }}
        >
          <source src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/777.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Collapsed Banner - Always visible */}
      <motion.div
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative z-10 cursor-pointer px-4 py-16 md:py-20 bg-transparent hover:bg-white/5 transition-all duration-300"
        whileHover={{ scale: 1.01 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            INSIGHTS
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-6">
            Thoughts on AI architecture, strategy, and transformation
          </p>
          <div className="flex items-center justify-center gap-2 text-white">
            <span className="text-sm uppercase tracking-wider">
              {isExpanded ? 'Click to Collapse' : 'Click to Expand'}
            </span>
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="overflow-hidden bg-[#0a0a0a]"
          >
            {/* Featured Article */}
            <section className="px-4 py-12">
              <div className="max-w-7xl mx-auto">
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="group p-10 md:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/60 hover:-translate-y-2 transition-all duration-400 shadow-xl hover:shadow-blue-500/20 cursor-pointer"
                >
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
                      Featured
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                    <span>{featuredArticle.readTime}</span>
                    <span>•</span>
                    <span>{featuredArticle.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-6" />
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <Link
                    href={`/insights/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 text-blue-500 font-semibold group-hover:gap-4 transition-all"
                  >
                    <span>Read Article</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.article>
              </div>
            </section>

            {/* Article Grid */}
            <section className="px-4 py-12 pb-32">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {articles.map((article, index) => {
                    const isOrange = index % 2 === 0;
                    return (
                      <motion.article
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`group p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border transition-all duration-400 shadow-lg cursor-pointer ${
                          isOrange
                            ? 'border-orange-500/20 hover:border-orange-500/60 hover:shadow-orange-500/20'
                            : 'border-blue-500/20 hover:border-blue-500/60 hover:shadow-blue-500/20'
                        } hover:-translate-y-2`}
                      >
                        <div className="text-sm text-gray-500 mb-4">{article.date}</div>
                        <h3 className={`text-xl md:text-2xl font-bold text-white mb-4 leading-tight transition-colors ${
                          isOrange ? 'group-hover:text-orange-400' : 'group-hover:text-blue-400'
                        }`}>
                          {article.title}
                        </h3>
                        <div className={`w-16 h-1 mb-6 ${
                          isOrange ? 'bg-gradient-to-r from-orange-500 to-orange-600' : 'bg-gradient-to-r from-blue-500 to-cyan-400'
                        }`} />
                        <p className="text-sm text-gray-400 mb-6 line-clamp-2">{article.excerpt}</p>
                        <Link
                          href={`/insights/${article.slug}`}
                          className={`inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all ${
                            isOrange ? 'text-orange-500' : 'text-blue-500'
                          }`}
                        >
                          <span>Read Article</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </motion.article>
                    );
                  })}
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

{/* PARTNERSHIP PAGE DATA */}

const criteria = [
  "Founders with meaningful responsibility",
  "Ready to build systems that drive revenue",
  "Able to move quickly",
  "Committed to long-term evolution",
  "Honest about challenges",
  "Focused on architecture, not hype"
];

const expectations = [
  "Clear goals",
  "Access to systems",
  "A single decision-maker",
  "Honest communication",
  "Willingness to follow architecture",
  "Fast feedback",
  "Commitment to quality"
];

const benefits = [
  "The full Forge Framework",
  "Custom intelligence layer",
  "Production deployment",
  "Founder-level strategic guidance",
  "System evolution",
  "Priority support"
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeAboutTab, setActiveAboutTab] = useState('philosophy');

  // About page data arrays
  const principles = [
    {
      number: '01',
      title: 'HUMANS OVER AUTOMATION',
      text: 'Haestus architects AI systems that enhance judgment, creativity, and expertise—not eliminate it. We preserve human agency at critical points while multiplying capability.',
      accentColor: 'orange',
    },
    {
      number: '02',
      title: 'ARCHITECTURE OVER ASSEMBLY',
      text: 'Most AI MVPs fail because they\'re stitched together. We design systems deliberately, layer by layer, ensuring infrastructure supports compounding future value.',
      accentColor: 'orange',
    },
    {
      number: '03',
      title: 'PARTNERSHIP OVER TRANSACTION',
      text: 'We limit ourselves to three partnerships per month. Excellence requires focus. Transformation requires collaboration.',
      accentColor: 'orange',
    },
    {
      number: '04',
      title: 'TRUTH OVER HYPE',
      text: 'No inflated promises. No vaporware. Only real capabilities, real results, and real honesty.',
      accentColor: 'orange',
    }
  ];

  const refuseItems = [
    'Quick-fix MVPs that won\'t scale',
    'Hype-driven automation without purpose',
    'Detached consulting with no skin in the game',
    'Systems that treat humans as the problem',
    'Architecture that won\'t survive production'
  ];

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

  const [activePhase, setActivePhase] = useState(0);
  const [activeTab, setActiveTab] = useState('impact');

  const phases = [
    {
      id: 0,
      number: "01",
      shortTitle: "Discovery",
      title: "DISCOVERY & ALIGNMENT",
      icon: <Search className="w-14 h-14" />,
      subtitle: "We don't start building until the mission is clear.",
      description: "Deep stakeholder interviews, system audits, goal alignment, success metrics definition. We ensure everyone understands the vision before any code is written.",
      accentColor: 'white'
    },
    {
      id: 1,
      number: "02",
      shortTitle: "Blueprint",
      title: "BLUEPRINT",
      icon: <FileText className="w-14 h-14" />,
      subtitle: "Architecture first. Features second.",
      description: "System architecture design, data models, API contracts, infrastructure planning. We design the foundation that will support everything you'll build.",
      accentColor: 'white'
    },
    {
      id: 2,
      number: "03",
      shortTitle: "Construction",
      title: "CONSTRUCTION",
      icon: <Hammer className="w-14 h-14" />,
      subtitle: "Ship systems, not prototypes.",
      description: "Production-grade development, real-time collaboration, continuous testing. We build with the end state in mind—systems designed to scale from day one.",
      accentColor: 'white'
    },
    {
      id: 3,
      number: "04",
      shortTitle: "Integration",
      title: "INTEGRATION",
      icon: <Link2 className="w-14 h-14" />,
      subtitle: "Intelligence flows where data connects.",
      description: "API connections, third-party services, data pipelines, authentication systems. We ensure your intelligence layer communicates seamlessly with your existing stack.",
      accentColor: 'white'
    },
    {
      id: 4,
      number: "05",
      shortTitle: "Deployment",
      title: "DEPLOYMENT",
      icon: <Rocket className="w-14 h-14" />,
      subtitle: "Launch with confidence, not hope.",
      description: "Infrastructure setup, monitoring systems, observability, security hardening. We deploy with the same rigor we design—ensuring your system is bulletproof before it goes live.",
      accentColor: 'white'
    },
    {
      id: 5,
      number: "06",
      shortTitle: "Evolution",
      title: "EVOLUTION",
      icon: <TrendingUp className="w-14 h-14" />,
      subtitle: "Great systems improve over time.",
      description: "Performance optimization, feature iteration, continuous improvement. We build systems that learn, adapt, and compound in value over time.",
      accentColor: 'white'
    }
  ];

  const techStack = [
    { name: "Claude API", icon: "🤖", category: "AI/ML" },
    { name: "GPT-4", icon: "⚡", category: "AI/ML" },
    { name: "Pinecone", icon: "📊", category: "Vector DB" },
    { name: "Next.js", icon: "▲", category: "Frontend" },
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "TypeScript", icon: "📘", category: "Frontend" },
    { name: "Python", icon: "🐍", category: "Backend" },
    { name: "Node.js", icon: "💚", category: "Backend" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Vercel", icon: "▲", category: "Deploy" },
    { name: "Docker", icon: "🐳", category: "Container" }
  ];

  return (
    <>
      <FounderMessageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* SECTION 1: HOMEPAGE - Self-contained with absolute video background */}
      <section id="home" className="relative">

        {/* Video Background - ABSOLUTE (not fixed), contained to this section only */}
        <VideoBackground />

        {/* Homepage Content - All existing content */}
        <main className="relative z-10 min-h-screen bg-transparent text-white">

          {/* Hero Section - Full viewport height */}
          <div className="relative overflow-hidden bg-transparent">
            <Hero />
          </div>

          {/* Content Below Logo - No Glassmorphism Card */}
          <div className="bg-transparent py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full"
            >
              {/* Quote - Larger, Bold "it's here" */}
              <p className="text-lg md:text-xl lg:text-2xl text-white text-center mb-3 italic font-light leading-snug">
                AI isn't coming, <span className="font-bold not-italic">it's here</span>
              </p>

              {/* Tagline */}
              <p className="text-sm md:text-base text-gray-300 text-center mb-8 max-w-xl mx-auto leading-relaxed">
                Not just developers, but <span className="italic">architects</span>. The new era of creators has just begun.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                {/* Our Message Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-2.5 border-2 border-white text-white font-semibold rounded-xl transition-all duration-300 min-w-[160px] text-center cursor-pointer w-full sm:w-auto text-sm hover:bg-white/10"
                >
                  Our Message
                </motion.button>

                {/* About Button */}
                <Link href="/#about" className="w-full sm:w-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 min-w-[160px] text-center cursor-pointer text-sm"
                  >
                    About
                  </motion.div>
                </Link>

                {/* Our Process Button */}
                <Link href="/#framework" className="w-full sm:w-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 border-2 border-white text-white font-semibold rounded-xl transition-all duration-300 min-w-[160px] text-center cursor-pointer text-sm hover:bg-white/10"
                  >
                    Our Process
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>

        </main>

      </section>

      {/* SECTION 2: ABOUT - Tabbed interface with glassmorphism */}
      <section id="about" className="relative bg-[#0a0a0a] text-white py-20">
        <div className="max-w-6xl mx-auto px-8">

          {/* Hero - Keep as-is, outside tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              ABOUT HAESTUS
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
              We architect AI systems that amplify human capability. No hype. No quick fixes.
              Just production-grade intelligence that transforms how organizations work.
            </p>
          </motion.div>

          {/* Tab Navigation - With Morphing Background */}
          <div className="flex justify-center mb-12">
            <div
              className="inline-flex gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-2 relative"
              style={{
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.05)',
              }}
            >
              {['philosophy', 'principles', 'values'].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveAboutTab(tab)}
                  className={`relative px-8 py-3 rounded-full font-semibold transition-colors duration-300 ${
                    activeAboutTab === tab ? 'text-black' : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeAboutTab === tab && (
                    <motion.div
                      layoutId="activeAboutTab"
                      className="absolute inset-0 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10 capitalize">{tab}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeAboutTab === 'philosophy' && <PhilosophyTab key="philosophy" />}
            {activeAboutTab === 'principles' && <PrinciplesTab key="principles" principles={principles} />}
            {activeAboutTab === 'values' && <ValuesTab key="values" refuseItems={refuseItems} />}
          </AnimatePresence>

          {/* CTA - Outside tabs, always visible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#partnership">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(255, 255, 255, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="px-8 py-4 bg-white text-black font-semibold rounded-xl min-w-[200px] cursor-pointer"
                >
                  Start a Project
                </motion.div>
              </Link>

              <Link href="/#impact">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl min-w-[200px] cursor-pointer"
                >
                  View Our Work
                </motion.div>
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 3: CAPABILITIES - Self-contained section */}
      <section id="capabilities" className="relative bg-[#0a0a0a] text-white">

        {/* Content Wrapper */}
        <div className="relative">

        {/* Capabilities Cards - 3x2 Grid */}
        <section className="px-4 pt-20 pb-24">
          <div className="max-w-7xl mx-auto">

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >

              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <motion.div
                    key={capability.id}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.95 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          duration: 0.6,
                          ease: [0.4, 0.0, 0.2, 1],
                        },
                      },
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
                      transition: { duration: 0.3 },
                    }}
                    className="group p-6 md:p-7 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/60 transition-all duration-400 shadow-lg cursor-pointer"
                  >
                    {/* Number */}
                    <motion.div
                      className="text-4xl font-bold mb-3 text-white/20"
                      whileHover={{ scale: 1.1, color: 'rgba(255, 255, 255, 0.3)' }}
                    >
                      {capability.number}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="mb-4 text-blue-400"
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <Icon className="w-10 h-10" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                      {capability.title}
                    </h3>

                    {/* Underline */}
                    <motion.div
                      className="w-12 h-1 mb-4 bg-gradient-to-r from-blue-500 to-cyan-400"
                      initial={{ width: '3rem' }}
                      whileHover={{ width: '6rem' }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {capability.shortDesc}
                    </p>
                  </motion.div>
                );
              })}

            </motion.div>

          </div>
        </section>

        </div>
        {/* End Content Wrapper */}

      </section>

      {/* SECTION 4: IMPACT */}
      <section id="impact" className="relative min-h-screen bg-black text-white">

        {/* Top White Border Glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white shadow-[0_0_30px_rgba(255,255,255,1),0_0_60px_rgba(255,255,255,0.6)] z-30" />

        {/* Video Background - Impact Page Only */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          >
            <source
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/mainheader4k.mp4"
              type="video/mp4"
            />
          </video>
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        {/* Content Layer */}
        <div className="relative z-20">

        {/* Hero Section */}
        <section className="px-4 pt-32 pb-12">
          <div className="max-w-6xl mx-auto text-center">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl"
            >
              Our Impact
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-200 drop-shadow-lg"
            >
              Real systems. Real results. Real talent.
            </motion.p>

          </div>
        </section>

        {/* Tab Navigation */}
        <section className="px-4 pb-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center gap-6 md:gap-12 border-b border-white/10 overflow-x-auto">

              {['impact', 'work', 'people', 'tech'].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-4 text-lg font-semibold transition-colors duration-300 whitespace-nowrap capitalize ${
                    activeTab === tab ? 'text-white drop-shadow-lg' : 'text-gray-400 hover:text-gray-200'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeImpactTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}

            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="px-4 py-12 pb-32">
          <AnimatePresence mode="wait">
            {activeTab === 'impact' && <ImpactTab />}
            {activeTab === 'work' && <WorkTab />}
            {activeTab === 'people' && <PeopleTab />}
            {activeTab === 'tech' && <TechTab />}
          </AnimatePresence>
        </section>

        </div>
        {/* End Content Layer */}

        {/* Bottom White Border Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white shadow-[0_0_30px_rgba(255,255,255,1),0_0_60px_rgba(255,255,255,0.6)] z-30" />

      </section>

      {/* SECTION 5: FRAMEWORK - Self-contained section */}
      <section id="framework" className="relative bg-[#0a0a0a] text-white">

        {/* Hero Section */}
        <section className="px-4 pt-32 pb-12">
          <div className="max-w-6xl mx-auto text-center">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
            >
              The Forge Framework
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300"
            >
              You can't scale what wasn't architected to survive.
            </motion.p>

          </div>
        </section>

        {/* Phase Navigation */}
        <section className="px-4 pb-8">
          <div className="max-w-7xl mx-auto">

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">

              {phases.map((phase) => (
                <button
                  key={phase.id}
                  onClick={() => setActivePhase(phase.id)}
                  className={`group px-6 py-4 rounded-2xl transition-all duration-300 ${
                    activePhase === phase.id
                      ? 'bg-white/[0.06] border-2 border-white/60 shadow-lg shadow-white/20'
                      : 'bg-white/[0.02] border border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="text-2xl font-bold mb-1 text-blue-400">
                    {phase.number}
                  </div>
                  <div className={`text-sm font-medium ${
                    activePhase === phase.id ? 'text-white' : 'text-gray-400'
                  }`}>
                    {phase.shortTitle}
                  </div>
                </button>
              ))}

            </div>
          </div>
        </section>

        {/* Phase Content */}
        <section className="px-4 py-12">
          <AnimatePresence mode="wait">
            {phases.map((phase) => (
              activePhase === phase.id && (
                <motion.div
                  key={`phase-${phase.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-5xl mx-auto"
                >
                  <div className="group p-8 md:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/20 hover:border-white/60 transition-all duration-400 shadow-xl hover:shadow-white/20 hover:-translate-y-1">

                    {/* Icon */}
                    <div className="text-blue-400 mb-6">{phase.icon}</div>

                    {/* Phase Number */}
                    <div className="text-5xl font-bold mb-4 text-white/20">
                      {phase.number}
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
                      {phase.title}
                    </h2>

                    {/* White Underline */}
                    <div className="w-24 h-1 mb-6 bg-white" />

                    {/* Subtitle */}
                    <p className="text-xl text-gray-300 mb-6 italic">
                      {phase.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {phase.description}
                    </p>

                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </section>

        {/* Tech Stack Banner */}
        <section className="px-4 py-16">
          <div className="max-w-7xl mx-auto">

            {/* Label */}
            <div className="text-center mb-8">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Our Technology
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                Architecture, powered by a battle-tested stack.
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                We combine enterprise infrastructure with modern AI tooling so your systems scale, perform, and endure.
              </p>
            </div>

            {/* Scrolling Banner */}
            <div className="relative overflow-hidden py-8">
              <motion.div
                className="flex gap-12"
                animate={{
                  x: [0, -2400],
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* First set of logos */}
                {techStack.map((tech, index) => (
                  <div key={`tech-${index}`} className="flex-shrink-0 w-48 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
                    <div className="text-center">
                      <div className="text-4xl mb-3">{tech.icon}</div>
                      <div className="text-white font-semibold">{tech.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{tech.category}</div>
                    </div>
                  </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {techStack.map((tech, index) => (
                  <div key={`tech-dup-${index}`} className="flex-shrink-0 w-48 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
                    <div className="text-center">
                      <div className="text-4xl mb-3">{tech.icon}</div>
                      <div className="text-white font-semibold">{tech.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{tech.category}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Fade Edges */}
              <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-black/60 to-transparent pointer-events-none" />

            </div>

          </div>
        </section>

        {/* Quote Section */}
        <section className="px-4 py-16 pb-32">
          <div className="max-w-4xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-center"
            >
              <p className="text-2xl md:text-3xl text-white mb-4">
                "Most companies build features.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-orange-500">
                We build foundations."
              </p>
            </motion.div>

          </div>
        </section>

      </section>

      {/* SECTION 6: INSIGHTS - Expandable Banner */}
      <section id="insights" className="relative z-10 bg-[#0a0a0a] text-white">
        <InsightsBanner />
      </section>

      {/* SECTION 7: PARTNERSHIP */}
      <section id="partnership" className="relative min-h-screen bg-[#0a0a0a] text-white font-sans">

        {/* Hero Section */}
        <section className="px-4 pt-32 pb-12">
          <div className="max-w-6xl mx-auto text-center">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Partnership, Not Clients
            </motion.h1>

            {/* Orange Underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
            >
              We work with founders who understand that AI isn&apos;t a feature — it&apos;s a structural advantage.
            </motion.p>

          </div>
        </section>

        {/* Main Content Card - Glassmorphism */}
        <section className="px-4 py-8 pb-20">
          <div className="max-w-6xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 hover:border-white/60 transition-all duration-400 shadow-xl hover:shadow-white/20"
            >

              {/* Who We Partner With */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2 text-center">
                  Who We Partner With
                </h2>
                <div className="w-20 h-1 bg-white rounded-full mx-auto mb-8" />

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {criteria.map((criterion, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-200"
                    >
                      <svg
                        className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sm md:text-base text-gray-400">
                        {criterion}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 my-10" />

              {/* The Exchange */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2 text-center">
                  The Exchange
                </h2>
                <div className="w-20 h-1 bg-white rounded-full mx-auto mb-8" />

                {/* Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                  {/* Left: What We Expect */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-200"
                  >
                    <h3 className="text-xl font-bold text-blue-400 mb-1">
                      What We Expect
                    </h3>
                    <div className="w-12 h-1 bg-white rounded-full mb-6" />

                    <ul className="space-y-3">
                      {expectations.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-400">
                          <span className="text-gray-500 mt-1 text-lg">→</span>
                          <span className="text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Right: What Partners Receive */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-200"
                  >
                    <h3 className="text-xl font-bold text-blue-400 mb-1">
                      What Partners Receive
                    </h3>
                    <div className="w-12 h-1 bg-white rounded-full mb-6" />

                    <ul className="space-y-3">
                      {benefits.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-400">
                          <span className="text-gray-500 mt-1 text-lg">→</span>
                          <span className="text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                </div>
              </div>

            </motion.div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 pb-32">
          <div className="max-w-6xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-300 mb-6"
              >
                Ready to architect intelligence together?
              </motion.p>

              <a href="mailto:hello@haestus.dev?subject=Partnership%20Inquiry">
                <motion.div
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black text-sm font-semibold cursor-pointer relative overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(255, 255, 255, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 17,
                  }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  <span className="relative z-10">Start the Conversation</span>
                  <motion.svg
                    className="w-4 h-4 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.div>
              </a>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-500 text-xs mt-4"
              >
                We respond within 24 hours.
              </motion.p>
            </motion.div>

          </div>
        </section>

      </section>
    </>
  );
}
