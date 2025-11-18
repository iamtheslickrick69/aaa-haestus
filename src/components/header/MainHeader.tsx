'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navLinks = [
  { label: 'Architecture', href: '#architecture' },
  { label: 'Community', href: '#community' },
  { label: 'Insights', href: '#insights' },
];

// Orbiting dots component with banana yellow
function OrbitingDots() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const circumference = 2 * (width + height);

    const dots = container.querySelectorAll('.orbit-dot');
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;

      dots.forEach((dot, index) => {
        const element = dot as HTMLElement;
        const progress = ((elapsed / 8) + (index * 0.5)) % 1;
        const distance = progress * circumference;

        let x = 0,
          y = 0;

        if (distance < width) {
          x = distance;
          y = 0;
        } else if (distance < width + height) {
          x = width;
          y = distance - width;
        } else if (distance < 2 * width + height) {
          x = width - (distance - width - height);
          y = height;
        } else {
          x = 0;
          y = height - (distance - 2 * width - height);
        }

        element.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-visible">
      <div
        className="orbit-dot absolute w-1.5 h-1.5 bg-[#FFD93D] rounded-full"
        style={{ boxShadow: '0 0 15px rgba(255,217,61,0.6)' }}
      />
      <div
        className="orbit-dot absolute w-1.5 h-1.5 bg-[#FFD93D] rounded-full"
        style={{ boxShadow: '0 0 15px rgba(255,217,61,0.6)' }}
      />
      <div
        className="orbit-dot absolute w-1 h-1 bg-[#FFF176] rounded-full"
        style={{ boxShadow: '0 0 12px rgba(255,241,118,0.5)' }}
      />
    </div>
  );
}

export default function MainHeader() {
  const { isScrolled } = useScrollPosition(20);
  const [activeLink, setActiveLink] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-[20px] left-1/2 -translate-x-1/2 z-[1100] hidden md:block"
      >
        <motion.nav
          animate={{
            scale: isScrolled ? 0.92 : 1,
            opacity: isScrolled ? 0.85 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="relative flex items-center h-[62px] px-10 rounded-full"
          style={{
            background: 'rgba(15, 15, 17, 0.75)',
            border: '1.5px solid rgba(255,217,61,0.25)',
            backdropFilter: 'blur(25px)',
            WebkitBackdropFilter: 'blur(25px)',
            boxShadow: '0 0 50px rgba(255,217,61,0.2), inset 0 0 20px rgba(255,217,61,0.05)',
          }}
        >
          <OrbitingDots />

          {/* Premium Indicator */}
          <div className="flex items-center gap-2 mr-8 relative z-10">
            <div className="w-2 h-2 bg-[#FFD93D] rounded-full animate-pulse"
              style={{ boxShadow: '0 0 10px rgba(255,217,61,0.6)' }}
            />
            <span className="text-[#FFD93D] text-xs font-bold tracking-wider">LIVE</span>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-10 relative z-10">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <motion.span
                  onClick={() => setActiveLink(link.label)}
                  whileHover={{
                    textShadow: '0 0 20px rgba(255,217,61,0.5)',
                    color: '#FFD93D'
                  }}
                  className={`
                    text-[15px] font-semibold tracking-[0.5px] transition-all duration-300
                    ${
                      activeLink === link.label
                        ? 'text-[#FFD93D]'
                        : 'text-white/90 hover:text-[#FFD93D]'
                    }
                  `}
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Spacer */}
          <div className="w-14" />

          {/* CTA Button */}
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: '0 0 40px rgba(255,217,61,0.6)',
            }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 px-8 py-3 rounded-full text-black font-bold text-[15px] transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #FFD93D 0%, #FFF176 100%)',
              boxShadow: '0 0 25px rgba(255,217,61,0.4)',
            }}
          >
            Connect ✨
          </motion.button>
        </motion.nav>
      </motion.header>

      {/* Mobile Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-[20px] right-[20px] z-[1100] md:hidden"
      >
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3.5 rounded-full"
          style={{
            background: 'rgba(15, 15, 17, 0.75)',
            border: '1.5px solid rgba(255,217,61,0.25)',
            backdropFilter: 'blur(25px)',
            boxShadow: '0 0 25px rgba(255,217,61,0.2)',
          }}
        >
          <svg className="w-6 h-6 text-[#FFD93D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1050] bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
        >
          <div className="space-y-10 text-center">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <p className="text-3xl text-white font-bold hover:text-[#FFD93D] transition-colors">
                    {link.label}
                  </p>
                </Link>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 px-10 py-5 text-black font-bold rounded-full text-lg"
              style={{
                background: 'linear-gradient(135deg, #FFD93D 0%, #FFF176 100%)',
                boxShadow: '0 0 30px rgba(255,217,61,0.4)',
              }}
            >
              Connect ✨
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
}
