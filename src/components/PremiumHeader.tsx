'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PremiumHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Architecture', href: '#architecture' },
    { name: 'Community', href: '#community' },
    { name: 'Insights', href: '#insights' },
  ];

  return (
    <>
      {/* GROUP 2: Top Right Buttons (Scroll-Hidden) */}
      <motion.div
        className="fixed right-10 z-[999] hidden md:flex gap-4"
        style={{
          top: '24px',
          opacity: scrolled ? 0 : 1,
          pointerEvents: scrolled ? 'none' : 'auto',
          transform: scrolled ? 'translateY(-12px)' : 'translateY(0)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        <button
          className="px-7 py-3 rounded-xl text-[15px] font-semibold transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
            color: '#1e293b',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 4px 24px rgba(255, 255, 255, 0.18)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 255, 255, 0.28)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(255, 255, 255, 0.18)';
          }}
        >
          Partners
        </button>
        <button
          className="px-7 py-3 rounded-xl text-[15px] font-semibold transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
            color: '#1e293b',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 4px 24px rgba(255, 255, 255, 0.18)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 255, 255, 0.28)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(255, 255, 255, 0.18)';
          }}
        >
          Reps
        </button>
      </motion.div>

      {/* GROUP 1: Center Glassmorphism Nav (Scroll-Responsive) */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-1/2 -translate-x-1/2 z-[1000]"
        style={{
          top: scrolled ? '16px' : '24px',
          transform: scrolled ? 'translateX(-50%) scale(0.92)' : 'translateX(-50%) scale(1)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <nav
          className="flex items-center px-10 rounded-[18px] border"
          style={{
            gap: '48px',
            padding: '14px 40px',
            background: scrolled ? 'rgba(15, 23, 42, 0.75)' : 'rgba(15, 23, 42, 0.4)',
            backdropFilter: scrolled ? 'blur(24px) saturate(200%)' : 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(200%)' : 'blur(16px) saturate(180%)',
            borderColor: scrolled ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.08)',
            boxShadow: scrolled ? '0 12px 48px rgba(0, 0, 0, 0.6)' : '0 10px 40px rgba(0, 0, 0, 0.5)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Logo placeholder - will be replaced */}
          <div style={{ marginRight: '16px', height: '48px' }} />

          {/* Navigation Links */}
          <div className="hidden md:flex items-center" style={{ gap: '48px' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[16px] font-medium transition-all duration-300"
                style={{
                  color: '#f1f5f9',
                  letterSpacing: '0.3px',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ff6b35';
                  e.currentTarget.style.textShadow = '0 0 12px rgba(255,107,53,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#f1f5f9';
                  e.currentTarget.style.textShadow = 'none';
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Connect Button (PRIMARY CTA) */}
          <button
            className="px-8 py-3 rounded-xl text-white text-[16px] font-semibold flex items-center gap-2 transition-all duration-300"
            style={{
              background: '#ff6b35',
              border: 'none',
              boxShadow: '0 4px 20px rgba(255, 107, 53, 0.35)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ff8555';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 28px rgba(255, 107, 53, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ff6b35';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 107, 53, 0.35)';
            }}
          >
            Connect
            <span>→</span>
          </button>
        </nav>
      </motion.header>
    </>
  );
}
