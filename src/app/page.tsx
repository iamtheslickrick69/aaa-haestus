'use client';

import Hero from '@/sections/Hero';
import StatsDashboard from '@/sections/StatsDashboard';
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
        <div className="bg-black">
          <BlogInsights />
        </div>
      </main>

      {/* AI Chatbot Orb */}
      <ChatOrb />
    </>
  );
}
