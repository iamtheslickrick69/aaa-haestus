'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function PremiumHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: scrolled ? '64px' : '72px',
          background: scrolled ? 'rgba(10, 10, 10, 0.85)' : 'rgba(10, 10, 10, 0.6)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: `1px solid rgba(255, 255, 255, ${scrolled ? '0.12' : '0.08'})`,
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
          transition: 'all 300ms ease',
        }}
      >
        {/* Subtle gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(249, 115, 22, 0.03) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 2rem',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          {/* LEFT - Logo */}
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 300ms ease',
            }}
            onMouseEnter={(e) => {
              const icon = e.currentTarget.querySelector('.logo-icon') as HTMLElement;
              if (icon) icon.style.transform = 'rotate(5deg)';
              e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(249, 115, 22, 0.3))';
            }}
            onMouseLeave={(e) => {
              const icon = e.currentTarget.querySelector('.logo-icon') as HTMLElement;
              if (icon) icon.style.transform = 'rotate(0deg)';
              e.currentTarget.style.filter = 'none';
            }}
          >
            {/* Fire/Forge Icon */}
            <span
              className="logo-icon"
              style={{
                fontSize: '24px',
                background: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                transition: 'transform 300ms ease',
              }}
            >
              🔥
            </span>
            <span
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
              }}
            >
              <span style={{ color: '#FFFFFF' }}>haestus</span>
              <span style={{ color: '#F97316' }}>.dev</span>
            </span>
          </Link>

          {/* CENTER - Main Navigation (Desktop) */}
          <nav
            className="hidden md:flex"
            style={{
              display: 'flex',
              gap: '0.25rem',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                style={{
                  padding: '0.625rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: activeLink === link.name ? 600 : 500,
                  color: activeLink === link.name ? '#000000' : 'rgba(255, 255, 255, 0.7)',
                  background: activeLink === link.name ? 'rgba(249, 115, 22, 0.15)' : 'transparent',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 200ms ease',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                }}
                onMouseEnter={(e) => {
                  if (activeLink !== link.name) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 1)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeLink !== link.name) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT - CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'center',
            }}
          >
            {/* Partners & Reps (Desktop only) */}
            <div className="hidden lg:flex" style={{ gap: '0.5rem' }}>
              <button
                style={{
                  padding: '0.625rem 1rem',
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                }}
              >
                Partners
              </button>
              <button
                style={{
                  padding: '0.625rem 1rem',
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                }}
              >
                Reps
              </button>
            </div>

            {/* Connect Button (Primary CTA) */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: '#F97316',
                fontSize: '0.875rem',
                fontWeight: 500,
                border: '1px solid rgba(249, 115, 22, 0.4)',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 200ms ease',
                textShadow: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(249, 115, 22, 0.3)';
                e.currentTarget.style.background = 'rgba(249, 115, 22, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.4)';
              }}
            >
              Connect
              <span style={{ fontSize: '16px' }}>→</span>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                padding: '0.5rem',
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.5rem',
                color: '#FFFFFF',
                fontSize: '1.25rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              zIndex: 40,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              paddingTop: '80px',
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              style={{
                display: 'flex',
                gap: '1rem',
                marginTop: '1rem',
              }}
            >
              <button
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                }}
              >
                Partners
              </button>
              <button
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                }}
              >
                Reps
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
