'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PremiumHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '20px',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        {/* Logo Box */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{
            background: scrolled ? 'rgba(15, 15, 15, 0.95)' : 'rgba(20, 20, 20, 0.8)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '12px 24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow:
              '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            cursor: 'pointer',
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Image
            src="/mylogo.png"
            alt="Haestus"
            width={140}
            height={48}
            priority
            style={{
              display: 'block',
              filter: 'drop-shadow(0 2px 8px rgba(220, 38, 38, 0.2))',
            }}
          />
        </motion.div>

        {/* Center Navigation Box */}
        <motion.nav
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{
            background: scrolled ? 'rgba(15, 15, 15, 0.95)' : 'rgba(20, 20, 20, 0.8)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '16px 32px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow:
              '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            display: 'flex',
            gap: '40px',
          }}
        >
          {['Architecture', 'Community', 'Insights'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              style={{
                color: '#FFFFFF',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 500,
                opacity: 0.85,
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.textShadow = '0 0 20px rgba(220, 38, 38, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              {item}
              {/* Hover indicator dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '-6px',
                  width: '4px',
                  height: '4px',
                  background: '#FFD93D',
                  borderRadius: '50%',
                  boxShadow: '0 0 8px rgba(220, 38, 38, 0.8)',
                }}
              />
            </motion.a>
          ))}
        </motion.nav>

        {/* Right Side - Connect Button & Portal Access */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {/* Connect Button */}
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(135deg, #FFD93D 0%, #FFF176 100%)',
              color: '#FFFFFF',
              padding: '14px 32px',
              borderRadius: '16px',
              border: 'none',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow:
                '0 8px 32px rgba(220, 38, 38, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                '0 12px 40px rgba(220, 38, 38, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                '0 8px 32px rgba(220, 38, 38, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
            }}
          >
            Connect
          </motion.button>

          {/* Portal Box */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              background: scrolled ? 'rgba(15, 15, 15, 0.95)' : 'rgba(20, 20, 20, 0.8)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '16px',
              padding: '8px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow:
                '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              display: 'flex',
              gap: '6px',
            }}
          >
            <button
              style={{
                background: 'transparent',
                color: '#71717A',
                padding: '8px 16px',
                borderRadius: '10px',
                border: '1px solid transparent',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(220, 38, 38, 0.1)';
                e.currentTarget.style.color = '#FFD93D';
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#71717A';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              Partners
            </button>
            <button
              style={{
                background: 'transparent',
                color: '#71717A',
                padding: '8px 16px',
                borderRadius: '10px',
                border: '1px solid transparent',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(220, 38, 38, 0.1)';
                e.currentTarget.style.color = '#FFD93D';
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#71717A';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              Reps
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.3), transparent)',
          opacity: scrolled ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      />
    </motion.header>
  );
}
