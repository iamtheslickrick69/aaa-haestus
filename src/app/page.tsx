import Hero from '@/sections/Hero';
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

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
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
  );
}
