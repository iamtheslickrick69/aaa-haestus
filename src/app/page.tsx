import Hero from '@/sections/Hero';
import NameOrigin from '@/sections/NameOrigin';
import StrategicPositioning from '@/sections/StrategicPositioning';
import IndustryData from '@/sections/IndustryData';
import ForgePhilosophy from '@/sections/ForgePhilosophy';
import ForgeValues from '@/sections/ForgeValues';
import Identity from '@/sections/Identity';
import Portfolio from '@/sections/Portfolio';
import Insights from '@/sections/Insights';
import Connect from '@/sections/Connect';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <NameOrigin />
      <StrategicPositioning />
      <IndustryData />
      <ForgePhilosophy />
      <ForgeValues />
      <Identity />
      <Portfolio />
      <Insights />
      <Connect />
    </main>
  );
}
