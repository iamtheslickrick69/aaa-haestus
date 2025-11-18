'use client';

import Hero from '@/sections/Hero';
import StatsDashboard from '@/sections/StatsDashboard';
import VideoBackground from '@/components/Homepage/VideoBackground';

export default function Home() {
  return (
    <>
      <VideoBackground />
      <main className="relative">
        <Hero />
        <StatsDashboard />
      </main>
    </>
  );
}
