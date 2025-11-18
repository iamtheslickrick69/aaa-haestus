'use client';

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
  return (
    <>
      <VideoBackground />
      <main className="relative z-10 min-h-screen bg-transparent text-white">
        <Hero />
        <StatsDashboard />
        <StrategicPositioning />
        <ForgePhilosophy />
        <ForgeValues />
        <AnimatedMazeSection />
        <TechStackMarquee />
        <Portfolio />
        <BlogInsights />
        <Connect />
      </main>
    </>
  );
}
