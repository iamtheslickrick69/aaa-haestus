'use client';

import dynamic from 'next/dynamic';
import Hero from '@/sections/Hero';
import TrustSection from '@/components/Homepage/TrustSection';
import StrategicPositioning from '@/sections/StrategicPositioning';
import IndustryData from '@/sections/IndustryData';
import ForgePhilosophy from '@/sections/ForgePhilosophy';
import ForgeValues from '@/sections/ForgeValues';
import Identity from '@/sections/Identity';
import AnimatedMazeSection from '@/components/Homepage/AnimatedMazeSection';
import TechStackMarquee from '@/components/Homepage/TechStackMarquee';
import Portfolio from '@/sections/Portfolio';
import BlogInsights from '@/components/Homepage/BlogInsights';
import Connect from '@/sections/Connect';

// Load BlackFabricBackground dynamically without SSR (Three.js requires browser APIs)
const BlackFabricBackground = dynamic(
  () => import('@/components/Homepage/BlackFabricBackground'),
  {
    ssr: false,
    loading: () => <div style={{ background: '#000000', position: 'fixed', inset: 0 }} />,
  }
);

export default function Home() {
  return (
    <>
      <BlackFabricBackground />
      <main className="relative z-10 min-h-screen bg-transparent text-white">
        <Hero />
        <TrustSection />
        <StrategicPositioning />
        <IndustryData />
        <ForgePhilosophy />
        <ForgeValues />
        <Identity />
        <AnimatedMazeSection />
        <TechStackMarquee />
        <Portfolio />
        <BlogInsights />
        <Connect />
      </main>
    </>
  );
}
