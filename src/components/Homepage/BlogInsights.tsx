'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface BlogPost {
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  link: string;
}

export default function BlogInsights() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts: BlogPost[] = [
    {
      readTime: '6 MIN READ',
      date: 'DEC 2024',
      title: 'Why 90% of AI Projects Fail After POC',
      excerpt:
        'The gap between proof of concept and production is where most AI initiatives die. Architecture matters more than ambition.',
      category: 'Strategy',
      tags: ['Enterprise AI'],
      link: '/insights/ai-projects-fail',
    },
    {
      readTime: '8 MIN READ',
      date: 'DEC 2024',
      title: 'The Architecture-First Approach to AI',
      excerpt:
        'Building AI systems that scale requires thinking beyond the model. Infrastructure, data pipelines, and human workflows must align.',
      category: 'Architecture',
      tags: ['Best Practices'],
      link: '/insights/architecture-first',
    },
    {
      readTime: '10 MIN READ',
      date: 'NOV 2024',
      title: 'Humans Over Automation: A Framework',
      excerpt:
        'AI should simplify human capability, not replace it. How we design systems that empower rather than eliminate.',
      category: 'Philosophy',
      tags: ['Human-AI Collaboration'],
      link: '/insights/humans-over-automation',
    },
    {
      readTime: '7 MIN READ',
      date: 'NOV 2024',
      title: 'The True Cost of Technical Debt in AI',
      excerpt:
        'Shortcuts in AI development compound exponentially. Why we build for the long term from day one.',
      category: 'Technical',
      tags: ['Long-term Value'],
      link: '/insights/technical-debt',
    },
    {
      readTime: '9 MIN READ',
      date: 'OCT 2024',
      title: 'Beyond the Hype: Real AI Capabilities',
      excerpt:
        'Separating what AI can actually do from what marketers claim. A practical guide for decision-makers.',
      category: 'Reality Check',
      tags: ['Decision Making'],
      link: '/insights/real-ai-capabilities',
    },
    {
      readTime: '5 MIN READ',
      date: 'OCT 2024',
      title: 'Building AI Teams That Last',
      excerpt:
        'The talent shortage is real, but the bigger problem is retention. Creating environments where AI professionals thrive.',
      category: 'Team Building',
      tags: ['Culture'],
      link: '/insights/ai-teams',
    },
  ];

  return (
    <section className="relative mt-[200px] mb-[200px]">
      {/* Top carved edge - black to white transition */}
      <div
        className="absolute top-[-100px] left-0 right-0 h-[100px] bg-black z-10"
        style={{
          clipPath:
            'polygon(0 0, 100% 0, 100% 100%, 55% 100%, 53% 80%, 47% 80%, 45% 100%, 0 100%)',
        }}
      />

      {/* Main white blog section */}
      <div className="relative bg-white w-full py-[120px]">
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg,
                transparent,
                transparent 39px,
                rgba(220, 38, 38, 0.02) 39px,
                rgba(220, 38, 38, 0.02) 40px
              ),
              repeating-linear-gradient(90deg,
                transparent,
                transparent 39px,
                rgba(220, 38, 38, 0.02) 39px,
                rgba(220, 38, 38, 0.02) 40px
              )
            `,
          }}
        />

        {/* Red accent lines at carved edges */}
        <div
          className="absolute top-[10px] left-[47%] w-[6%] h-[2px]"
          style={{
            background: 'linear-gradient(90deg, transparent, #DC2626, transparent)',
            boxShadow: '0 0 20px rgba(220, 38, 38, 0.4)',
          }}
        />

        {/* Content Container */}
        <div ref={ref} className="relative max-w-[1400px] mx-auto px-10 z-[1]">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="block text-[12px] font-bold tracking-[3px] text-[#DC2626] uppercase mb-5">
              INSIGHTS FROM THE FORGE
            </span>

            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-[#0A0A0B] leading-[1.1] tracking-tight mb-5">
              Thoughts on AI architecture,
              <br />
              strategy, and transformation.
            </h2>

            <p className="text-[18px] text-[#52525B] max-w-[600px] mx-auto leading-relaxed">
              Deep dives into building AI systems that last. No hype, no fluff — just hard-won
              insights from the frontlines of enterprise AI.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-[60px]">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-black/[0.06] rounded-2xl p-8 cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-[#DC2626]/20"
              >
                {/* Top metadata */}
                <div className="flex items-center gap-3 mb-4 text-[11px] font-semibold text-[#71717A] tracking-[1px]">
                  <span>{post.readTime}</span>
                  <span className="text-[#DC2626]">•</span>
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-bold text-[#0A0A0B] mb-3 leading-[1.3] tracking-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[15px] text-[#52525B] leading-relaxed mb-5">{post.excerpt}</p>

                {/* Bottom metadata */}
                <div className="flex items-center justify-between pt-4 border-t border-black/5">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] px-3 py-1 bg-[#DC2626]/[0.08] text-[#DC2626] rounded-[20px] font-semibold">
                      {post.category}
                    </span>
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[11px] text-[#71717A] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-[#DC2626] text-[14px] font-semibold flex items-center gap-1">
                    Read Article →
                  </span>
                </div>

                {/* Hover accent line */}
                <div className="absolute top-0 left-0 w-[3px] h-0 bg-[#DC2626] transition-all duration-300 group-hover:h-full" />
              </motion.article>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <button className="bg-[#0A0A0B] text-white px-10 py-4 rounded-xl border-none text-[15px] font-bold cursor-pointer tracking-wide transition-all duration-300 hover:bg-[#DC2626] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(220,38,38,0.3)]">
              VIEW ALL INSIGHTS →
            </button>
          </motion.div>
        </div>

        {/* Bottom red accent line */}
        <div
          className="absolute bottom-[10px] left-[47%] w-[6%] h-[2px]"
          style={{
            background: 'linear-gradient(90deg, transparent, #DC2626, transparent)',
            boxShadow: '0 0 20px rgba(220, 38, 38, 0.4)',
          }}
        />
      </div>

      {/* Bottom carved edge - white to black transition */}
      <div
        className="absolute bottom-[-100px] left-0 right-0 h-[100px] bg-black z-10"
        style={{
          clipPath:
            'polygon(0 0, 45% 0, 47% 20%, 53% 20%, 55% 0, 100% 0, 100% 100%, 0 100%)',
        }}
      />
    </section>
  );
}
