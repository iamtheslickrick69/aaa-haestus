'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LogoBlock() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-[26px] left-[40px] z-[1200]"
    >
      <motion.button
        onClick={scrollToTop}
        whileHover={{
          scale: 1.05,
          filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.4))',
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="relative w-[220px] h-[55px] cursor-pointer"
      >
        <Image
          src="/mylogo.png"
          alt="Haestus.dev"
          fill
          className="object-contain object-left"
          priority
        />
      </motion.button>
    </motion.div>
  );
}
