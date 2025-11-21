'use client';

import Link from 'next/link';
import Hero from '@/sections/Hero';
import StatsDashboard from '@/sections/StatsDashboard';
import ForgeValues from '@/sections/ForgeValues';
import AnimatedMazeSection from '@/components/Homepage/AnimatedMazeSection';
import Portfolio from '@/sections/Portfolio';
import BlogInsights from '@/components/Homepage/BlogInsights';
import VideoBackground from '@/components/Homepage/VideoBackground';
import ChatOrb from '@/components/ChatOrb';

export default function Home() {
  return (
    <>
      <VideoBackground />
      <main className="relative z-10 min-h-screen bg-transparent text-white">
        <div className="relative overflow-hidden bg-transparent">
          <Hero />
        </div>
        <div className="bg-black">
          <StatsDashboard />
        </div>
        <section className="relative overflow-hidden" style={{ backgroundColor: '#000' }}>

          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
            {/* Philosophy Preview */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="text-white/70 text-xs uppercase tracking-[0.2em] mb-8 font-bold">
                Our Foundation
              </div>

              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight"
                style={{ textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}
              >
                THE FORGE PHILOSOPHY
              </h2>

              <blockquote
                className="text-xl md:text-2xl italic text-white/95 mb-12 leading-relaxed font-serif"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.35)' }}
              >
                &ldquo;In Greek mythology, Hephaestus didn&apos;t replace heroes—he forged the tools that made
                them legendary.&rdquo;
              </blockquote>

              <p className="text-lg text-white/80 mb-12">
                We architect intelligence that amplifies human potential, creating systems that compound competitive advantage over time.
              </p>

              <Link
                href="/philosophy"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transform transition-all duration-300"
              >
                Explore Our Philosophy
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
        <div className="bg-black">
          <ForgeValues />
          <AnimatedMazeSection />
          <div className="relative overflow-hidden bg-black">
            <Portfolio />
          </div>
          <BlogInsights />
        </div>
      </main>

      {/* AI Chatbot Orb */}
      <ChatOrb />
    </>
  );
}
