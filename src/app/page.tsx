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
        <div id="home" className="relative overflow-hidden">
          <Hero />
        </div>
        <div id="insights">
          <StatsDashboard />
        </div>
        <div id="architecture" className="relative overflow-hidden min-h-screen">
          {/* Architecture Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover -z-10"
          >
            <source
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/thisistheone.mp4"
              type="video/mp4"
            />
          </video>

          {/* Optional contrast overlay */}
          <div className="absolute inset-0 bg-black/10 z-0" />

          {/* Content */}
          <div className="relative z-10">
            <StrategicPositioning />
            <ForgePhilosophy />
          </div>
        </div>
        <div id="community">
          <ForgeValues />
          <AnimatedMazeSection />
          <TechStackMarquee />
          <Portfolio />
          <BlogInsights />
        </div>
        <div id="connect">
          <Connect />
        </div>
      </main>
    </>
  );
}
