'use client';

import Hero from '@/sections/Hero';
import StatsDashboard from '@/sections/StatsDashboard';
import ChatOrb from '@/components/ChatOrb';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  Zap,
  Brain,
  Hammer,
  Database,
  Rocket
} from 'lucide-react';

function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set playback rate to 0.9x for cinematic effect
    video.playbackRate = 0.9;
  }, []);

  return (
    <div className="absolute inset-0 -z-10 bg-black overflow-hidden">
      {/* Full screen video at 100% size */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        className="pointer-events-none"
      >
        <source
          src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/worldvid.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
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
          Not promises. Not prototypes. <span className="text-orange-500 font-semibold">Proof.</span>
        </p>
      </div>

      {/* 2x2 Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

        {/* Metric 1 - Blue Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-blue-500/20"
        >
          <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
            500,000+
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Daily Insights</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-4" />
          <p className="text-gray-400 mb-3">Fortune 500 Operations</p>
          <p className="text-sm text-orange-500/80 font-mono">UBILL.IO</p>
        </motion.div>

        {/* Metric 2 - Orange Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-orange-500/20 hover:border-orange-500/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-orange-500/20"
        >
          <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">
            99.2%
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Accuracy Rate</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-4" />
          <p className="text-gray-400 mb-3">Document Extraction</p>
          <p className="text-sm text-orange-500/80 font-mono">PESTCTRL.AI</p>
        </motion.div>

        {/* Metric 3 - Blue Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-blue-500/20"
        >
          <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
            80%
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Faster Response</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-4" />
          <p className="text-gray-400 mb-3">Customer Service Platform</p>
          <p className="text-sm text-orange-500/80 font-mono">BID MY BRACE</p>
        </motion.div>

        {/* Metric 4 - Orange Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-orange-500/20 hover:border-orange-500/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-orange-500/20"
        >
          <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">
            35%
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Cost Reduction</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-4" />
          <p className="text-gray-400 mb-3">ML-Driven Logistics</p>
          <p className="text-sm text-orange-500/80 font-mono">CREW CAM</p>
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
        <p className="text-lg text-gray-400">
          Production systems that deliver measurable business value.
        </p>
      </div>

      {/* Featured Project */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="group mb-8 p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-orange-500/20 hover:border-orange-500/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-orange-500/20"
      >
        <div className="mb-4">
          <span className="text-sm text-orange-500 font-semibold uppercase tracking-wider">Featured Project</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">UBILL.IO</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-6" />
        <p className="text-xl text-gray-300 mb-6">
          Revenue Intelligence Platform for Fortune 500 Operations
        </p>
        <p className="text-gray-400 leading-relaxed mb-6">
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
          className="group p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/60 hover:-translate-y-2 transition-all duration-400 shadow-lg"
        >
          <h4 className="text-xl font-bold text-white mb-2">PESTCTRL.AI</h4>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-4" />
          <p className="text-gray-400 text-sm mb-4">
            Document extraction system with 99.2% accuracy processing thousands of service records daily.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs">GPT-4</span>
            <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs">OCR</span>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-orange-500/20 hover:border-orange-500/60 hover:-translate-y-2 transition-all duration-400 shadow-lg"
        >
          <h4 className="text-xl font-bold text-white mb-2">BID MY BRACE</h4>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-4" />
          <p className="text-gray-400 text-sm mb-4">
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
          className="group p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/60 hover:-translate-y-2 transition-all duration-400 shadow-lg"
        >
          <h4 className="text-xl font-bold text-white mb-2">CREW CAM</h4>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-4" />
          <p className="text-gray-400 text-sm mb-4">
            ML-driven logistics optimization cutting operational costs by 35% through predictive routing.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs">ML</span>
            <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs">Optimization</span>
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
        <p className="text-lg text-gray-400">
          World-class talent, <span className="text-orange-500 font-semibold">purpose-built teams</span>.
        </p>
      </div>

      {/* Role Cards - 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

        {/* Role 1: AI/ML Engineers - Blue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-blue-500/20"
        >
          <div className="text-5xl mb-6">🔧</div>
          <h3 className="text-2xl font-bold text-white mb-2">AI/ML Engineers</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-6" />
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span>LLM integration specialists (Claude, GPT-4)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span>Vector database architects</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span>Python, embeddings, RAG systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span>Production ML pipeline experts</span>
            </li>
          </ul>
        </motion.div>

        {/* Role 2: Full-Stack Developers - Orange */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-orange-500/20 hover:border-orange-500/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-orange-500/20"
        >
          <div className="text-5xl mb-6">💻</div>
          <h3 className="text-2xl font-bold text-white mb-2">Full-Stack Developers</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-6" />
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">→</span>
              <span>Next.js, React, TypeScript experts</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">→</span>
              <span>Node.js, Python backend specialists</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">→</span>
              <span>API design and integration</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">→</span>
              <span>Real-time systems architecture</span>
            </li>
          </ul>
        </motion.div>

        {/* Role 3: UX/UI Designers - Blue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-blue-500/20"
        >
          <div className="text-5xl mb-6">🎨</div>
          <h3 className="text-2xl font-bold text-white mb-2">UX/UI Designers</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-6" />
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span>Product design for AI systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span>User research and testing</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span>Design systems and component libraries</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span>Interaction design for complex workflows</span>
            </li>
          </ul>
        </motion.div>

        {/* Role 4: Technical Leadership - Orange */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-orange-500/20 hover:border-orange-500/60 hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-orange-500/20"
        >
          <div className="text-5xl mb-6">🎯</div>
          <h3 className="text-2xl font-bold text-white mb-2">Technical Leadership</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-6" />
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">→</span>
              <span>Solutions architects</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">→</span>
              <span>Technical project managers</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">→</span>
              <span>Strategic technical advisors</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">→</span>
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
        <p className="text-lg text-gray-400">
          Built on <span className="text-orange-500 font-semibold">production-grade intelligence</span>.
        </p>
      </div>

      {/* Tech Stack Sections */}
      <div className="space-y-8">

        {/* AI/ML Stack - Blue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-blue-500/20"
        >
          <h3 className="text-xl font-bold text-white mb-4">AI & Machine Learning</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-6" />
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

        {/* Frontend Stack - Orange */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-orange-500/20"
        >
          <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-6" />
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">Next.js</span>
            <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">React</span>
            <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">TypeScript</span>
            <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">Tailwind CSS</span>
            <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">Framer Motion</span>
            <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">Shadcn/ui</span>
          </div>
        </motion.div>

        {/* Backend Stack - Blue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-blue-500/20"
        >
          <h3 className="text-xl font-bold text-white mb-4">Backend & Data</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-6" />
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

        {/* Infrastructure - Orange */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-orange-500/20"
        >
          <h3 className="text-xl font-bold text-white mb-4">Infrastructure & DevOps</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-6" />
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">Vercel</span>
            <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">AWS</span>
            <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">Railway</span>
            <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">Docker</span>
            <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">GitHub Actions</span>
            <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">CloudFlare</span>
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
  // About page data arrays
  const principles = [
    {
      number: '01',
      title: 'HUMANS OVER AUTOMATION',
      text: 'Haestus architects AI systems that enhance judgment, creativity, and expertise—not eliminate it. We preserve human agency at critical points while multiplying capability.',
      accentColor: 'blue',
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
      accentColor: 'blue',
    },
    {
      number: '04',
      title: 'TRUTH OVER HYPE',
      text: 'No inflated promises. No vaporware. Only real capabilities, real results, and real honesty.',
      accentColor: 'orange',
    }
  ];

  const refuseItems = [
    'Quick-fix MVPs',
    'Hype-driven automation',
    'Detached consulting',
    'Systems without purpose',
    'Architecture that won\'t survive scale'
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
      icon: "🔍",
      subtitle: "We don't start building until the mission is clear.",
      description: "Deep stakeholder interviews, system audits, goal alignment, success metrics definition. We ensure everyone understands the vision before any code is written.",
      accentColor: 'orange'
    },
    {
      id: 1,
      number: "02",
      shortTitle: "Blueprint",
      title: "BLUEPRINT",
      icon: "📐",
      subtitle: "Architecture first. Features second.",
      description: "System architecture design, data models, API contracts, infrastructure planning. We design the foundation that will support everything you'll build.",
      accentColor: 'blue'
    },
    {
      id: 2,
      number: "03",
      shortTitle: "Construction",
      title: "CONSTRUCTION",
      icon: "🔨",
      subtitle: "Ship systems, not prototypes.",
      description: "Production-grade development, real-time collaboration, continuous testing. We build with the end state in mind—systems designed to scale from day one.",
      accentColor: 'orange'
    },
    {
      id: 3,
      number: "04",
      shortTitle: "Integration",
      title: "INTEGRATION",
      icon: "🔗",
      subtitle: "Intelligence flows where data connects.",
      description: "API connections, third-party services, data pipelines, authentication systems. We ensure your intelligence layer communicates seamlessly with your existing stack.",
      accentColor: 'blue'
    },
    {
      id: 4,
      number: "05",
      shortTitle: "Deployment",
      title: "DEPLOYMENT",
      icon: "🚀",
      subtitle: "Launch with confidence, not hope.",
      description: "Infrastructure setup, monitoring systems, observability, security hardening. We deploy with the same rigor we design—ensuring your system is bulletproof before it goes live.",
      accentColor: 'orange'
    },
    {
      id: 5,
      number: "06",
      shortTitle: "Evolution",
      title: "EVOLUTION",
      icon: "📈",
      subtitle: "Great systems improve over time.",
      description: "Performance optimization, feature iteration, continuous improvement. We build systems that learn, adapt, and compound in value over time.",
      accentColor: 'blue'
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

          {/* Metrics Section - Natural height below hero */}
          <div className="bg-black">
            <StatsDashboard />
          </div>

        </main>

      </section>

      {/* SECTION 2: ABOUT - Self-contained section */}
      <section id="about" className="relative bg-[#0a0a0a] text-white">

        {/* Section 1: The Problem (90% Stat) */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
                The Reality
              </span>
            </motion.div>

            {/* 90% Stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <h2 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">
                90%
              </h2>

              {/* Animated underline bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "8rem" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"
              />

              <p className="text-2xl md:text-3xl font-semibold text-white">
                of AI projects fail after POC
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              Because they lack architecture. They chase demos, trends, and hype instead of structural, production-grade intelligence.
            </motion.p>

          </div>
        </section>

        {/* Section 2: Philosophy */}
        <section className="px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                Our Philosophy
              </span>
            </motion.div>

            {/* Philosophy Quote */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight"
            >
              &quot;AI should amplify humans, not replace them.&quot;
            </motion.h2>

            {/* Hephaestus Reference Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-blue-500/20 shadow-2xl hover:border-blue-500/40 transition-all duration-400"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Hephaestus didn&apos;t replace heroes—he forged the tools that made them legendary. Same principle.
              </p>
            </motion.div>

          </div>
        </section>

        {/* Section 3: Four Principles */}
        <section className="px-4 py-20">
          <div className="max-w-7xl mx-auto">

            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                Principles
              </span>
            </motion.div>

            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border ${
                    principle.accentColor === 'blue'
                      ? 'border-blue-500/20 hover:border-blue-500/60 hover:shadow-blue-500/20'
                      : 'border-orange-500/20 hover:border-orange-500/60 hover:shadow-orange-500/20'
                  } hover:-translate-y-2 transition-all duration-400 shadow-lg`}
                >
                  {/* Number */}
                  <div className={`text-6xl font-bold mb-4 ${
                    principle.accentColor === 'blue' ? 'text-orange-500/20' : 'text-blue-500/20'
                  }`}>
                    {principle.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    {principle.title}
                  </h3>

                  {/* Underline */}
                  <div className={`w-16 h-1 mb-6 ${
                    principle.accentColor === 'blue'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400'
                      : 'bg-gradient-to-r from-orange-500 to-orange-600'
                  }`} />

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {principle.text}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* Section 4: What We Refuse */}
        <section className="px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
                What We Refuse To Do
              </span>
            </motion.div>

            {/* List Container */}
            <div className="space-y-4">

              {refuseItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-center gap-4 text-lg md:text-xl"
                >
                  <span className="text-orange-500 text-2xl">✗</span>
                  <span className="text-white">{item}</span>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* Section 5: Transition */}
        <section className="px-4 py-16 pb-32">
          <div className="max-w-3xl mx-auto text-center">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl text-gray-400 mb-8"
            >
              These principles guide everything we build
            </motion.p>

            {/* Animated Arrow */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-blue-500 text-4xl"
            >
              ↓
            </motion.div>

          </div>
        </section>

      </section>

      {/* SECTION 3: CAPABILITIES - Self-contained section */}
      <section id="capabilities" className="relative bg-[#0a0a0a] text-white">

        {/* Content Wrapper */}
        <div className="relative">

        {/* Hero Section */}
        <section className="px-4 pt-32 pb-16">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              What We Build
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
        {/* End Content Wrapper */}

      </section>

      {/* SECTION 4: IMPACT */}
      <section id="impact" className="relative z-10 min-h-screen bg-[#0a0a0a] text-white">

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
              Our Impact
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-300"
            >
              Real systems. Real results. Real talent.
            </motion.p>

          </div>
        </section>

        {/* Tab Navigation */}
        <section className="px-4 pb-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center gap-6 md:gap-12 border-b border-white/10 overflow-x-auto">

              {/* Tab 1: Impact */}
              <button
                onClick={() => setActiveTab('impact')}
                className={`relative pb-4 text-lg font-semibold transition-colors duration-300 whitespace-nowrap ${
                  activeTab === 'impact' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                Impact
                {activeTab === 'impact' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>

              {/* Tab 2: Work */}
              <button
                onClick={() => setActiveTab('work')}
                className={`relative pb-4 text-lg font-semibold transition-colors duration-300 whitespace-nowrap ${
                  activeTab === 'work' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                Work
                {activeTab === 'work' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>

              {/* Tab 3: People */}
              <button
                onClick={() => setActiveTab('people')}
                className={`relative pb-4 text-lg font-semibold transition-colors duration-300 whitespace-nowrap ${
                  activeTab === 'people' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                People
                {activeTab === 'people' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>

              {/* Tab 4: Tech */}
              <button
                onClick={() => setActiveTab('tech')}
                className={`relative pb-4 text-lg font-semibold transition-colors duration-300 whitespace-nowrap ${
                  activeTab === 'tech' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                Tech
                {activeTab === 'tech' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>

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
                      ? `bg-white/[0.06] border-2 shadow-lg ${
                          phase.accentColor === 'blue'
                            ? 'border-blue-500/60 shadow-blue-500/20'
                            : 'border-orange-500/60 shadow-orange-500/20'
                        }`
                      : `bg-white/[0.02] border border-white/10 ${
                          phase.accentColor === 'blue'
                            ? 'hover:border-blue-500/30'
                            : 'hover:border-orange-500/30'
                        }`
                  }`}
                >
                  <div className={`text-2xl font-bold mb-1 ${
                    phase.accentColor === 'blue' ? 'text-blue-500' : 'text-orange-500'
                  }`}>
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
                  <div className={`group p-8 md:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border transition-all duration-400 shadow-xl hover:-translate-y-1 ${
                    phase.accentColor === 'blue'
                      ? 'border-blue-500/20 hover:border-blue-500/40 hover:shadow-blue-500/20'
                      : 'border-orange-500/20 hover:border-orange-500/40 hover:shadow-orange-500/20'
                  }`}>

                    {/* Icon */}
                    <div className="text-6xl mb-6">{phase.icon}</div>

                    {/* Phase Number */}
                    <div className={`text-5xl font-bold mb-4 ${
                      phase.accentColor === 'blue' ? 'text-blue-500/30' : 'text-orange-500/30'
                    }`}>
                      {phase.number}
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {phase.title}
                    </h2>

                    {/* Colored Underline */}
                    <div className={`w-24 h-1 mb-6 ${
                      phase.accentColor === 'blue'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-400'
                        : 'bg-gradient-to-r from-orange-500 to-orange-600'
                    }`} />

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

      {/* SECTION 6: INSIGHTS */}
      <section id="insights" className="relative z-10 min-h-screen bg-[#0a0a0a] text-white">

        {/* Hero Section */}
        <section className="px-4 pt-32 pb-12">
          <div className="max-w-7xl mx-auto text-center">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                Insights from the Forge
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-orange-500 mb-4"
            >
              Thoughts on AI architecture, strategy, and transformation.
            </motion.h1>

            {/* Orange Underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto"
            >
              Deep dives into building AI systems that last. No hype, no fluff — just hard-won insights from the frontlines of enterprise AI.
            </motion.p>

          </div>
        </section>

        {/* Featured Article (Large Card) */}
        <section className="px-4 pb-12">
          <div className="max-w-7xl mx-auto">

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group p-10 md:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/60 hover:-translate-y-2 transition-all duration-400 shadow-xl hover:shadow-blue-500/20 cursor-pointer"
            >

              {/* Label */}
              <div className="mb-4">
                <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
                  Featured
                </span>
              </div>

              {/* Meta: Read time + Date */}
              <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                <span>{featuredArticle.readTime}</span>
                <span>•</span>
                <span>{featuredArticle.date}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {featuredArticle.title}
              </h2>

              {/* Blue Underline */}
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-6" />

              {/* Excerpt */}
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {featuredArticle.excerpt}
              </p>

              {/* Read Link */}
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

        {/* Article Grid (5 Minimal Cards) */}
        <section className="px-4 py-12 pb-32">
          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

              {articles.map((article, index) => {
                // Alternate colors: index 0,2,4 = orange, index 1,3 = blue
                const isOrange = index % 2 === 0;

                return (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`group p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border transition-all duration-400 shadow-lg cursor-pointer ${
                      isOrange
                        ? 'border-orange-500/20 hover:border-orange-500/60 hover:shadow-orange-500/20'
                        : 'border-blue-500/20 hover:border-blue-500/60 hover:shadow-blue-500/20'
                    } hover:-translate-y-2`}
                  >

                    {/* Date */}
                    <div className="text-sm text-gray-500 mb-4">
                      {article.date}
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl md:text-2xl font-bold text-white mb-4 leading-tight transition-colors ${
                      isOrange
                        ? 'group-hover:text-orange-400'
                        : 'group-hover:text-blue-400'
                    }`}>
                      {article.title}
                    </h3>

                    {/* Colored Underline */}
                    <div className={`w-16 h-1 mb-6 ${
                      isOrange
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600'
                        : 'bg-gradient-to-r from-blue-500 to-cyan-400'
                    }`} />

                    {/* Excerpt */}
                    <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Read Link */}
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

      </section>

      {/* SECTION 7: PARTNERSHIP */}
      <section id="partnership" className="relative z-10 min-h-screen bg-[#0a0a0a] text-white">

        {/* Hero Section */}
        <section className="px-4 pt-32 pb-12">
          <div className="max-w-6xl mx-auto text-center">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500 mb-6"
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

        {/* Who We Partner With Section */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">

            {/* Section Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Who We Partner With
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto" />
            </div>

            {/* 3x2 Grid with Alternating Colors */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {criteria.map((criterion, index) => {
                // Alternate colors: 0,2,4 = orange, 1,3,5 = blue
                const isOrange = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border transition-all duration-400 shadow-lg cursor-pointer ${
                      isOrange
                        ? 'border-orange-500/20 hover:border-orange-500/60 hover:shadow-orange-500/20'
                        : 'border-blue-500/20 hover:border-blue-500/60 hover:shadow-blue-500/20'
                    } hover:-translate-y-2`}
                  >
                    {/* Checkmark Icon Circle */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                      isOrange
                        ? 'bg-orange-500/10 border border-orange-500/20'
                        : 'bg-blue-500/10 border border-blue-500/20'
                    }`}>
                      <svg
                        className={`w-6 h-6 ${isOrange ? 'text-orange-500' : 'text-blue-500'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>

                    {/* Criterion Text */}
                    <p className="text-lg text-white font-medium leading-relaxed">
                      {criterion}
                    </p>
                  </motion.div>
                );
              })}

            </div>

          </div>
        </section>

        {/* The Exchange Section */}
        <section className="px-4 py-16 bg-white/[0.01]">
          <div className="max-w-6xl mx-auto">

            {/* Section Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The Exchange
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto" />
            </div>

            {/* Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Left: What We Expect - Blue */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/40 hover:shadow-blue-500/10 transition-all duration-400"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  What We Expect
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-8" />

                <ul className="space-y-4">
                  {expectations.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="text-blue-500 mt-1 text-xl">•</span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Right: What Partners Receive - Orange */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-orange-500/20 hover:border-orange-500/40 hover:shadow-orange-500/10 transition-all duration-400"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  What Partners Receive
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-8" />

                <ul className="space-y-4">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="text-orange-500 mt-1 text-xl">•</span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>

          </div>
        </section>

        {/* Investment Section */}
        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">

            {/* Section Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Investment
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto" />
            </div>

            {/* Investment Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 md:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-xl"
            >

              {/* Timelines */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  Typical Timelines
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                  {/* Sprint */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-2">
                      2-4
                    </div>
                    <div className="text-sm text-gray-400 mb-3">weeks</div>
                    <div className="text-gray-300">Sprint</div>
                  </div>

                  {/* Standard */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-2">
                      1-3
                    </div>
                    <div className="text-sm text-gray-400 mb-3">months</div>
                    <div className="text-gray-300">Standard</div>
                  </div>

                  {/* Comprehensive */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-2">
                      3-6+
                    </div>
                    <div className="text-sm text-gray-400 mb-3">months</div>
                    <div className="text-gray-300">Comprehensive</div>
                  </div>

                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 mb-12" />

              {/* Positioning Statement */}
              <div className="text-center">
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Investment scales with scope and complexity. We take on a limited number of partnerships per quarter to maintain our quality standard.
                </p>
              </div>

            </motion.div>

          </div>
        </section>

        {/* Call to Action - Simple Mailto Button */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-12 md:p-16 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-orange-500/20 shadow-xl"
            >

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to architect intelligence together?
              </h2>

              {/* Orange Underline */}
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8" />

              {/* Mailto Button */}
              <a
                href="mailto:hello@haestus.dev?subject=Partnership%20Inquiry"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
              >
                <span>Start the Conversation</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Response Time */}
              <p className="text-gray-400 mt-6">
                We respond within 24 hours.
              </p>

            </motion.div>

          </div>
        </section>

        {/* Closing Quote */}
        <section className="px-4 py-16 pb-32">
          <div className="max-w-4xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-xl"
            >
              <p className="text-2xl md:text-3xl font-medium text-orange-500 italic">
                &ldquo;The forge is selective for a reason.&rdquo;
              </p>
            </motion.div>

          </div>
        </section>

      </section>

      {/* AI Chatbot Orb - stays fixed across all sections */}
      <ChatOrb />
    </>
  );
}
