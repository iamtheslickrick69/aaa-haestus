'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InsightsPage() {

  const articles = [
    {
      id: 1,
      title: "Why 90% of AI Projects Fail After POC",
      description: "The gap between proof of concept and production is where most AI initiatives die. Architecture matters more than ambition.",
      readTime: "8 min read",
      date: "DEC 2024",
      tags: ["Strategy", "Enterprise AI"],
      slug: "why-90-percent-ai-projects-fail"
    },
    {
      id: 2,
      title: "The Architecture-First Approach to AI",
      description: "Building AI systems that scale requires thinking beyond the model. Infrastructure, data pipelines, and human workflows must align.",
      readTime: "6 min read",
      date: "DEC 2024",
      tags: ["Architecture", "Best Practices"],
      slug: "architecture-first-approach"
    },
    {
      id: 3,
      title: "Humans Over Automation: A Framework",
      description: "AI should amplify human capability, not replace it. How we design systems that empower rather than eliminate.",
      readTime: "10 min read",
      date: "NOV 2024",
      tags: ["Philosophy", "Human-AI Collaboration"],
      slug: "humans-over-automation"
    },
    {
      id: 4,
      title: "The True Cost of Technical Debt in AI",
      description: "Shortcuts in AI development compound exponentially. Why we build for the long term from day one.",
      readTime: "7 min read",
      date: "NOV 2024",
      tags: ["Technical", "Long-term Value"],
      slug: "true-cost-technical-debt"
    },
    {
      id: 5,
      title: "Beyond the Hype: Real AI Capabilities",
      description: "Separating what AI can actually do from what marketers claim. A practical guide for decision-makers.",
      readTime: "9 min read",
      date: "OCT 2024",
      tags: ["Reality Check", "Decision Making"],
      slug: "beyond-the-hype"
    },
    {
      id: 6,
      title: "Building AI Teams That Last",
      description: "The talent shortage is real, but the bigger problem is retention. Creating environments where AI professionals thrive.",
      readTime: "5 min read",
      date: "OCT 2024",
      tags: ["Team Building", "Culture"],
      slug: "building-ai-teams"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center px-4 pt-32 pb-16">
        <div className="max-w-5xl mx-auto text-center">

          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-sm text-orange-500 font-medium uppercase tracking-wider">
              Insights from the Forge
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"
          >
            Thoughts on AI architecture, strategy, and transformation.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-orange-500 mx-auto mb-8"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Deep dives into building AI systems that last. No hype, no fluff — just hard-won insights from the frontlines of enterprise AI.
          </motion.p>

        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-6 md:p-8 hover:border-orange-500/40 hover:-translate-y-2 transition-all duration-300 group flex flex-col"
              >

                {/* Article Meta (Read Time + Date) */}
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                {/* Article Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {article.title}
                </h3>

                {/* Article Description */}
                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                  {article.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-orange-500 bg-orange-500/10 border border-orange-500/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read Article Link */}
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  Read Article
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

              </motion.article>
            ))}

          </div>

        </div>
      </section>

      {/* Optional: Newsletter/CTA Section */}
      <section className="px-4 py-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">

          <div className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-8 md:p-12 shadow-2xl">

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want more insights?
            </h2>

            <p className="text-xl text-gray-400 mb-8">
              We publish new articles on AI architecture, strategy, and transformation regularly.
            </p>

            <Link
              href="/partnership"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105"
            >
              Work With Us
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
