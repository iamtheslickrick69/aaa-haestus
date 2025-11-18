'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface FounderMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const messageParagraphs = [
  "Most people are overwhelmed right now, and honestly, it's reasonable. AI is moving faster than anything we've ever seen, and most of the world has no idea how to keep up. The fear isn't really the technology; it's the uncertainty. People are scared they won't understand it, won't adapt to it, or won't have a place in the future it creates.",
  "The reality is simple: AI isn't here to replace people. It's here to empower them. The only real divide will be between the people who learn how to use these tools and the people who wait too long to start. That's why I built Haestus. Not to hype AI or drown people in jargon, but to make this technology understandable, practical, and useful for the everyday person who just wants a fair shot at the future.",
  "We're here to close the gap. To give people clarity instead of confusion. To build systems that help them work smarter, grow faster, and feel in control again. If we do this right, AI won't widen the divide in our society. It'll give people the lift they've been missing. It'll help them rise.",
];

export default function FounderMessageModal({ isOpen, onClose }: FounderMessageModalProps) {
  // Scroll lock effect
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // ESC key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.4, 0, 0.2, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className="modal-card"
            style={{
              position: 'relative',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: 'rgba(30, 41, 59, 0.95)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              boxShadow: '0 20px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(255, 107, 53, 0.1)',
              padding: '64px 56px',
            }}
          >
            {/* Paper texture overlay */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: 'none',
                opacity: 0.03,
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
                mixBlendMode: 'overlay',
                borderRadius: '24px',
              }}
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="close-button"
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 107, 53, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.3)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label="Close modal"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: '#cbd5e1' }}
              >
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Header Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              style={{
                fontSize: '12px',
                color: '#ff6b35',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: '32px',
              }}
            >
              A MESSAGE FROM OUR FOUNDER
            </motion.div>

            {/* Message Paragraphs */}
            <div style={{ marginBottom: '48px' }}>
              {messageParagraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.1,
                  }}
                  className="message-paragraph"
                  style={{
                    fontSize: '18px',
                    lineHeight: 1.8,
                    color: '#e2e8f0',
                    fontWeight: 400,
                    marginBottom: index < messageParagraphs.length - 1 ? '24px' : '0',
                    letterSpacing: '0.01em',
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Signature Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + messageParagraphs.length * 0.1,
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                justifyContent: 'flex-end',
                marginTop: '48px',
                paddingTop: '32px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <span
                className="signature-name"
                style={{
                  fontFamily: '"Dancing Script", cursive',
                  fontSize: '36px',
                  fontWeight: 700,
                  color: '#ffffff',
                  fontStyle: 'italic',
                  letterSpacing: '0.02em',
                  transform: 'rotate(-2deg)',
                }}
              >
                Rocky Bunker
              </span>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: '#94a3b8',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  alignSelf: 'flex-end',
                }}
              >
                Founder
              </span>
            </motion.div>

            {/* Custom Scrollbar Styles */}
            <style jsx>{`
              .modal-card::-webkit-scrollbar {
                width: 8px;
              }
              .modal-card::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 4px;
              }
              .modal-card::-webkit-scrollbar-thumb {
                background: rgba(255, 107, 53, 0.3);
                border-radius: 4px;
              }
              .modal-card::-webkit-scrollbar-thumb:hover {
                background: rgba(255, 107, 53, 0.5);
              }

              @media (max-width: 768px) {
                .modal-card {
                  padding: 48px 40px !important;
                }
                .message-paragraph {
                  font-size: 17px !important;
                }
              }

              @media (max-width: 640px) {
                .modal-card {
                  padding: 40px 24px !important;
                  width: 95% !important;
                }
                .message-paragraph {
                  font-size: 16px !important;
                }
                .signature-name {
                  font-size: 28px !important;
                }
                .close-button {
                  width: 36px !important;
                  height: 36px !important;
                }
              }
            `}</style>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
