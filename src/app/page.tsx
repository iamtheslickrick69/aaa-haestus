import Hero from '@/sections/Hero';
import StrategicPositioning from '@/sections/StrategicPositioning';
import IndustryData from '@/sections/IndustryData';
import ForgePhilosophy from '@/sections/ForgePhilosophy';
import ForgeValues from '@/sections/ForgeValues';
import Identity from '@/sections/Identity';
import ArchitectureStackBanner from '@/components/Homepage/ArchitectureStackBanner';
import Portfolio from '@/sections/Portfolio';
import Insights from '@/sections/Insights';
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
      <ArchitectureStackBanner />
      <Portfolio />
      <Insights />
      <Connect />
    </main>
  );
}
