'use client';

import { useEffect } from 'react';
import Hero from '@/sections/Hero';
import StatsDashboard from '@/sections/StatsDashboard';
import StrategicPositioning from '@/sections/StrategicPositioning';
import ForgePhilosophy from '@/sections/ForgePhilosophy';
import ForgeValues from '@/sections/ForgeValues';
import AnimatedMazeSection from '@/components/Homepage/AnimatedMazeSection';
import TechStackMarquee from '@/components/Homepage/TechStackMarquee';
import Portfolio from '@/sections/Portfolio';
import BlogInsights from '@/components/Homepage/BlogInsights';
import Connect from '@/sections/Connect';
import VideoBackground from '@/components/Homepage/VideoBackground';
import ChatOrb from '@/components/ChatOrb';

export default function Home() {
  // Handle hash navigation on page load
  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const headerHeight = window.innerWidth < 640 ? 64 : 80;
          const sectionTop = section.offsetTop - headerHeight;
          window.scrollTo({
            top: sectionTop,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <VideoBackground />
      <main className="relative z-10 min-h-screen bg-transparent text-white">
        <div id="home" className="relative overflow-hidden bg-transparent">
          <Hero />
        </div>
        <div id="insights" className="bg-black">
          <StatsDashboard />
        </div>
        <section id="architecture" className="relative overflow-hidden" style={{ backgroundColor: '#000' }}>
          {/* 3D Background Video - Scaled Down to 30% */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 0 }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover rounded-lg"
              style={{
                width: '30%',
                height: '30%',
                minWidth: '400px',
                minHeight: '300px'
              }}
            >
              <source
                src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/3DUPinthis.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Subtle overlay for text contrast */}
          <div className="absolute inset-0 bg-black/15" style={{ zIndex: 1 }} />

          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
            {/* Partnership Section */}
            <div className="text-center mb-40">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-2.5 mb-10 border border-white/40 bg-white/10 backdrop-blur-sm rounded-full">
                <span className="text-white text-xs uppercase tracking-widest font-semibold">
                  Strategic Partnership Opportunities Open
                </span>
              </div>

              {/* Main Title */}
              <h2
                className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight"
                style={{ textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}
              >
                THE AI REVOLUTION
                <br />
                NEEDS ARCHITECTS
              </h2>

              {/* Subtitle */}
              <p
                className="text-xl md:text-2xl text-white/95 mb-10 font-light tracking-wide"
                style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}
              >
                Bridging generations through intelligent transformation.
              </p>

              {/* Body Text */}
              <p
                className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed"
                style={{ textShadow: '0 1px 6px rgba(0,0,0,0.25)' }}
              >
                We don't deploy AI solutions. We architect intelligence into the foundation of
                your organization, creating systems that amplify human potential and compound
                competitive advantage.
              </p>

              {/* CTA Button */}
              <button className="inline-flex items-center gap-2 bg-white text-[#ff6b35] px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transform transition-all duration-300">
                Explore Partnership
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            {/* Philosophy Section */}
            <div className="text-center max-w-6xl mx-auto">
              {/* Label */}
              <div className="text-white/70 text-xs uppercase tracking-[0.2em] mb-8 font-bold">
                Our Foundation
              </div>

              {/* Section Title */}
              <h2
                className="text-5xl md:text-6xl font-bold text-white mb-16 tracking-tight"
                style={{ textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}
              >
                THE FORGE PHILOSOPHY
              </h2>

              {/* Quote */}
              <blockquote
                className="text-2xl md:text-3xl italic text-white/95 max-w-5xl mx-auto mb-12 leading-relaxed font-serif"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.35)' }}
              >
                "In Greek mythology, Hephaestus didn't replace heroes—he forged the tools that made
                them legendary."
              </blockquote>

              {/* Body Paragraphs */}
              <div
                className="space-y-8 text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-20 leading-relaxed"
                style={{ textShadow: '0 1px 6px rgba(0,0,0,0.25)' }}
              >
                <p>
                  The god of the forge crafted Achilles' armor, Hermes' winged sandals, and the
                  weapons that shaped fate. True power lies not in replacing the warrior, but in
                  amplifying their potential. Every creation was architecture—deliberate,
                  transformative.
                </p>

                <p>
                  We carry this wisdom forward. We don't build AI to replace your people. We
                  architect intelligence that amplifies capability. As Hephaestus transformed metal
                  into divine instruments, we transform data and algorithms into competitive
                  advantage.
                </p>
              </div>

              {/* 4 Principle Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {/* Card 1 */}
                <div className="group bg-black/35 backdrop-blur-md border border-white/25 rounded-2xl p-10 hover:bg-black/45 hover:border-white/45 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-white text-xl font-bold uppercase tracking-wide mb-4 leading-tight">
                    HUMANS OVER AUTOMATION
                  </h3>
                  <p className="text-white/85 text-base leading-relaxed">
                    AI should amplify human capability, not eliminate it.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="group bg-black/35 backdrop-blur-md border border-white/25 rounded-2xl p-10 hover:bg-black/45 hover:border-white/45 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-white text-xl font-bold uppercase tracking-wide mb-4 leading-tight">
                    ARCHITECTURE OVER ASSEMBLY
                  </h3>
                  <p className="text-white/85 text-base leading-relaxed">
                    We don't stack components—we design systems that create compounding value.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="group bg-black/35 backdrop-blur-md border border-white/25 rounded-2xl p-10 hover:bg-black/45 hover:border-white/45 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-white text-xl font-bold uppercase tracking-wide mb-4 leading-tight">
                    PARTNERSHIP OVER TRANSACTION
                  </h3>
                  <p className="text-white/85 text-base leading-relaxed">
                    We forge lasting relationships with organizations committed to transformation.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="group bg-black/35 backdrop-blur-md border border-white/25 rounded-2xl p-10 hover:bg-black/45 hover:border-white/45 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-white text-xl font-bold uppercase tracking-wide mb-4 leading-tight">
                    TRUTH OVER HYPE
                  </h3>
                  <p className="text-white/85 text-base leading-relaxed">
                    No inflated promises. Only real capabilities, real results.
                  </p>
                </div>
              </div>

              {/* Closing Statement */}
              <p className="text-white/60 text-sm mt-20 italic">
                The forge isn't where we work—it's how we think.
              </p>
            </div>
          </div>
        </section>
        <div id="community" className="bg-black">
          <ForgeValues />
          <AnimatedMazeSection />
          <TechStackMarquee />
          <div className="relative overflow-hidden bg-black">
            <Portfolio />
          </div>
          <BlogInsights />
        </div>
        <div id="connect" className="bg-black">
          <Connect />
        </div>
      </main>

      {/* AI Chatbot Orb */}
      <ChatOrb />
    </>
  );
}
