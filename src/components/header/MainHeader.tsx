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

// Orbiting dots component
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
        className="orbit-dot absolute w-2 h-2 bg-[#DC2626] rounded-full"
        style={{ boxShadow: '0 0 22px rgba(220,38,38,0.7)' }}
      />
      <div
        className="orbit-dot absolute w-2 h-2 bg-[#DC2626] rounded-full"
        style={{ boxShadow: '0 0 22px rgba(220,38,38,0.7)' }}
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
          className="relative flex items-center h-[58px] px-8 rounded-full"
          style={{
            background: 'rgba(15, 15, 17, 0.7)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(22px)',
            WebkitBackdropFilter: 'blur(22px)',
            boxShadow: '0 0 40px rgba(220,38,38,0.22), inset 0 0 18px rgba(220,38,38,0.05)',
          }}
        >
          <OrbitingDots />

          {/* Nav Links */}
          <div className="flex items-center gap-9 relative z-10">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <motion.span
                  onClick={() => setActiveLink(link.label)}
                  whileHover={{ textShadow: '0 0 18px rgba(255,255,255,0.45)' }}
                  className={`
                    text-[15px] font-medium tracking-[0.3px] transition-all duration-200
                    ${
                      activeLink === link.label
                        ? 'text-white underline underline-offset-4'
                        : 'text-white/90 hover:text-white'
                    }
                  `}
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Spacer */}
          <div className="w-12" />

          {/* CTA Button */}
          <motion.button
            whileHover={{
              scale: 1.06,
              boxShadow: '0 0 30px rgba(220,38,38,0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 px-[26px] py-[10px] rounded-[50px] text-white font-semibold text-[15px] transition-all duration-200"
            style={{
              background: 'rgba(220,38,38,0.85)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#DC2626';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(220,38,38,0.85)';
            }}
          >
            Start Partnership
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
          className="p-3 rounded-full"
          style={{
            background: 'rgba(15, 15, 17, 0.7)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(22px)',
          }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
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
          <div className="space-y-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <p className="text-2xl text-white font-medium">{link.label}</p>
              </Link>
            ))}
            <button className="mt-8 px-8 py-4 bg-[#DC2626] text-white font-semibold rounded-full">
              Start Partnership
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
