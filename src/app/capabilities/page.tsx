'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import {
  TrendingUp,
  Zap,
  Brain,
  Hammer,
  Database,
  Rocket
} from 'lucide-react';

export default function Capabilities() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (cardId: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const isExpanded = (cardId: number) => expandedCards.has(cardId);

  const capabilities = [
    {
      id: 1,
      number: "01",
      icon: TrendingUp,
      title: "REVENUE INTELLIGENCE",
      shortDesc: "Systems that increase conversions, upsells, and lifetime value using AI-driven workflows.",
      fullDesc: "We architect intelligence layers that identify revenue opportunities, optimize pricing strategies, predict customer behavior, and automate upsell workflows. Our systems integrate with your existing stack to drive measurable revenue growth through AI-enhanced decision-making."
    },
    {
      id: 2,
      number: "02",
      icon: Zap,
      title: "OPERATIONAL INTELLIGENCE",
      shortDesc: "AI that eliminates friction, reduces cost, and optimizes internal workflows.",
      fullDesc: "From document processing to workflow automation, we build systems that handle operational complexity while preserving human oversight. Our operational intelligence layers reduce manual bottlenecks, eliminate errors, and free your team for high-value work."
    },
    {
      id: 3,
      number: "03",
      icon: Brain,
      title: "FOUNDER INTELLIGENCE",
      shortDesc: "Tools that give leadership real-time insights, predictive capabilities, and clarity.",
      fullDesc: "We build executive intelligence systems that aggregate data from across your organization, surface critical insights, and provide predictive analytics for strategic decision-making. Real-time dashboards, anomaly detection, and AI-powered forecasting designed for founders who need clarity at scale."
    },
    {
      id: 4,
      number: "04",
      icon: Hammer,
      title: "CUSTOM SYSTEMS",
      shortDesc: "If it requires precision, architecture, and intelligence — we build it.",
      fullDesc: "Every organization has unique challenges that off-the-shelf solutions can't solve. We architect custom intelligence systems from the ground up: full-stack applications, specialized ML models, agent-based workflows, and integrated platforms built specifically for your needs. Production-grade, scalable, maintainable."
    },
    {
      id: 5,
      number: "05",
      icon: Database,
      title: "DATA & INTEGRATIONS",
      shortDesc: "Data pipelines, vector databases, API integrations, embeddings, multi-agent systems.",
      fullDesc: "Intelligence requires data architecture. We build robust data pipelines, implement vector databases for semantic search, integrate with your existing APIs and services, design embedding strategies, and orchestrate multi-agent systems. Your data becomes the foundation for compounding intelligence."
    },
    {
      id: 6,
      number: "06",
      icon: Rocket,
      title: "PRODUCTION-READY DEPLOYMENT",
      shortDesc: "We ship systems that scale, not demos that break.",
      fullDesc: "Our deployments are enterprise-grade: monitoring, logging, error handling, security, scalability, and observability built-in from day one. We don't hand off prototypes. We deliver production systems that handle real traffic, real users, and real business-critical operations. Architecture that survives contact with reality."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            What We Build
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto" />
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
            We build full-stack intelligence systems — from first pixel to final deployment.
          </p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              const expanded = isExpanded(capability.id);

              return (
                <motion.div
                  key={capability.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`
                    bg-[#0a0a0a]
                    border
                    ${expanded ? 'border-orange-500/40' : 'border-orange-500/20'}
                    rounded-2xl
                    p-6 md:p-8
                    shadow-2xl
                    cursor-pointer
                    hover:border-orange-500/30
                    hover:-translate-y-1
                    transition-all duration-300
                  `}
                  onClick={() => toggleCard(capability.id)}
                >

                  {/* Card Header (Always Visible) */}
                  <div className="flex items-start justify-between gap-4">

                    <div className="flex-1">
                      {/* Number */}
                      <div className="text-4xl font-bold text-orange-500/30 mb-3">
                        {capability.number}
                      </div>

                      {/* Icon */}
                      <div className="text-orange-500 mb-4">
                        <Icon className="w-8 h-8" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {capability.title}
                      </h3>

                      {/* Short Description (Always visible) */}
                      <p className="text-gray-400 text-base">
                        {capability.shortDesc}
                      </p>
                    </div>

                    {/* Expand/Collapse Icon */}
                    <motion.div
                      animate={{ rotate: expanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-orange-500 text-2xl flex-shrink-0"
                    >
                      ↓
                    </motion.div>

                  </div>

                  {/* Expanded Content (Animated) */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expanded ? 'auto' : 0,
                      opacity: expanded ? 1 : 0
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 mt-6 border-t border-orange-500/20">
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {capability.fullDesc}
                      </p>
                    </div>
                  </motion.div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 pb-32">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-8 shadow-2xl">

            <p className="text-xl text-gray-300 mb-8">
              Ready to architect intelligence that amplifies human capability?
            </p>

            <Link
              href="/impact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105"
            >
              View Our Impact
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}
