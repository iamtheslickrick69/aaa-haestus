'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

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

// Main Impact Page Component
export default function Impact() {
  const [activeTab, setActiveTab] = useState('impact');

  return (
    <div className="relative z-10 min-h-screen bg-[#0a0a0a] text-white">

      {/* Hero Section */}
      <section className="px-4 pt-32 pb-12">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Our Impact
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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

    </div>
  );
}
