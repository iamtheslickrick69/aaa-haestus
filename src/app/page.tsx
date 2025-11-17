import dynamic from 'next/dynamic';
import PremiumDualHeader from '@/components/Homepage/PremiumDualHeader';
import Homepage from '@/components/Homepage';

// Load WorldClassBackground dynamically without SSR (Three.js requires browser APIs)
const WorldClassBackground = dynamic(
  () => import('@/components/Homepage/WorldClassBackground'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <WorldClassBackground />
      <PremiumDualHeader />
      <div className="relative z-10 max-w-screen-xl mx-auto">
        <Homepage />
      </div>
    </>
  );
}
