'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function PremiumHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Architecture', href: '#architecture' },
    { name: 'Community', href: '#community' },
    { name: 'Insights', href: '#insights' },
  ];

  return (
    <>
      {/* GROUP 2: Top Right Buttons (Aligned with Header) */}
      <motion.div
        className="fixed right-10 z-[999] hidden md:flex gap-3"
        style={{
          top: scrolled ? '18px' : '22px',
          opacity: scrolled ? 0 : 1,
          pointerEvents: scrolled ? 'none' : 'auto',
          transform: scrolled ? 'translateY(-12px)' : 'translateY(0)',
          transition: 'all 0.3s ease',
        }}
      >
        <button
          className="px-5 py-2.5 rounded-lg text-[14px] font-semibold transition-all duration-200"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
            color: '#1e293b',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 2px 12px rgba(255, 255, 255, 0.15)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 255, 255, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 12px rgba(255, 255, 255, 0.15)';
          }}
        >
          Partners
        </button>
        <button
          className="px-5 py-2.5 rounded-lg text-[14px] font-semibold transition-all duration-200"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
            color: '#1e293b',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 2px 12px rgba(255, 255, 255, 0.15)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 255, 255, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 12px rgba(255, 255, 255, 0.15)';
          }}
        >
          Reps
        </button>
      </motion.div>

      {/* GROUP 1: Compact Glassmorphism Nav (Scroll-Responsive) */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-1/2 -translate-x-1/2 z-[1000]"
        style={{
          top: scrolled ? '18px' : '22px',
          transform: scrolled ? 'translateX(-50%) scale(0.85)' : 'translateX(-50%) scale(1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <nav
          className="flex items-center rounded-2xl border"
          style={{
            gap: '36px',
            paddingLeft: '16px',
            paddingRight: '32px',
            paddingTop: '10px',
            paddingBottom: '10px',
            background: scrolled
              ? 'rgba(255, 255, 255, 0.14)'
              : 'rgba(255, 255, 255, 0.10)',
            backdropFilter: 'blur(24px) saturate(200%)',
            WebkitBackdropFilter: 'blur(24px) saturate(200%)',
            borderColor: 'rgba(255, 255, 255, 0.20)',
            boxShadow: '0 0 50px rgba(255, 255, 255, 0.18), 0 8px 32px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Anvil Logo - Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              marginRight: '20px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
            }}
            aria-label="Scroll to top"
          >
            <Image
              src="/haestus-anvil-header.png"
              alt="Haestus"
              width={46}
              height={46}
              className="object-contain"
              style={{
                height: '46px',
                width: '46px',
                display: 'block',
              }}
              priority
            />
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center" style={{ gap: '36px' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-semibold transition-all duration-200"
                style={{
                  color: '#e2e8f0',
                  letterSpacing: '0.3px',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ff6b35';
                  e.currentTarget.style.textShadow = '0 0 8px rgba(255,107,53,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#e2e8f0';
                  e.currentTarget.style.textShadow = 'none';
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Connect Button - Compact Outlined Style */}
          <button
            className="rounded-lg text-[15px] font-semibold flex items-center gap-1.5 transition-all duration-200"
            style={{
              padding: '8px 20px',
              background: 'transparent',
              border: '2px solid #ff6b35',
              color: '#ff6b35',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 107, 53, 0.12)';
              e.currentTarget.style.borderColor = '#ff8556';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = '#ff6b35';
              e.currentTarget.style.transform = 'translateY(0)';
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
