'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FoundersMessageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FoundersMessage({ isOpen, onClose }: FoundersMessageProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap and ESC key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      // Focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    // Focus the close button when modal opens
    closeButtonRef.current?.focus();

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Modal Card */}
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90%] max-w-[800px] max-h-[90vh] overflow-y-auto rounded-xl p-10"
            style={{
              background: 'rgba(15, 15, 17, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="founders-message-title"
          >
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl font-light transition-colors duration-200"
              aria-label="Close modal"
            >
              ×
            </button>

            {/* Content */}
            <div className="space-y-6">
              <h2
                id="founders-message-title"
                className="text-[28px] md:text-[32px] font-semibold text-white tracking-tight"
              >
                A MESSAGE FROM THE FORGE
              </h2>

              <div className="space-y-6 text-[16px] md:text-[18px] text-white/85 leading-relaxed">
                <p className="font-medium text-white text-xl">Look, I'm not going to bullshit you.</p>

                <p>
                  We're living through something that no generation in human history has ever faced. And I don't mean that in the way people throw around "unprecedented times" like it's nothing.
                </p>

                <p>
                  I mean we're watching intelligence — actual intelligence — get built in real time. Every single day, AI gets better. Not in six months. Not next quarter. <span className="font-medium text-white">Today.</span> While you're reading this. While you're sleeping. While you're trying to figure out if your job will exist in five years.
                </p>

                <p>
                  And here's the thing that keeps me up at night: society isn't ready.
                </p>

                <p>
                  When the internet came, we had time to adapt. Businesses had years to figure out email, websites, e-commerce. When smartphones hit, companies had time to build apps, rethink their models.
                </p>

                <p className="font-medium text-white">
                  This time? We don't have years. We have months. Maybe weeks.
                </p>

                <p>
                  I've watched entire industries start to crack under the pressure of something they don't understand. I've seen brilliant people — people smarter than me — frozen because they don't know where to even start. And I've watched companies blow millions on "AI transformation" that's really just theater.
                </p>

                <p>
                  But here's what nobody's saying out loud:
                </p>

                <div className="pl-4 border-l-2 border-[#F97316]/40 space-y-4">
                  <p>
                    AI isn't the villain. It's not coming to steal jobs and ruin lives. That's the lazy narrative, and it misses the entire point.
                  </p>
                  <p>
                    <span className="font-medium text-white">AI is a multiplier.</span> It makes the great greater. It turns the ambitious into the unstoppable. It gives small teams the power of entire enterprises. It connects people across generations in ways we've never seen.
                  </p>
                  <p>
                    But — and this is critical — only if you know how to wield it.
                  </p>
                </div>

                <p>
                  See, the real danger isn't AI itself. It's the gap. The gap between people who understand these tools and people who don't. The gap between companies that adapt and companies that get left behind. The gap between a future that empowers humanity and one that leaves most of us on the sidelines.
                </p>

                <p className="font-medium text-white text-xl">That gap is why Haestus exists.</p>

                <p>
                  I didn't start this company to build another AI agency. I didn't do this to chase a trend or make a quick exit. I built Haestus because I genuinely believe that if we don't help people understand and shape this technology <span className="font-medium text-white">right now</span>, we're going to wake up in a world none of us wanted.
                </p>

                <p>
                  This is bigger than business. It's a responsibility.
                </p>

                <p>
                  We only take three projects a month. Not because we're trying to be exclusive or pretentious — because excellence doesn't scale linearly. Every company we work with gets the full weight of our expertise, our time, and our obsessive attention to detail.
                </p>

                <p>
                  We don't deploy cookie-cutter solutions. We don't slap some GPT wrapper on your product and call it "AI transformation."
                </p>

                <p className="font-medium text-white">
                  We architect intelligence into the foundation of your organization.
                </p>

                <p>
                  We build systems that make your team faster, sharper, more capable. We help you transition from the old world to the new one without losing what makes you human. We teach, we build, and we serve — because this moment demands nothing less.
                </p>

                <p>
                  Our name comes from Hephaestus. The Greek god of the forge. The one who built the tools that made heroes legendary. And that's exactly what we do — we forge the tools you need to thrive in what's coming.
                </p>

                <p>
                  Not because we're romantics. Because tools shape everything. The printing press shaped democracy. The internet shaped global commerce. AI will shape the next century of human civilization.
                </p>

                <p className="font-medium text-white">
                  And the people holding the tools? They write the future.
                </p>

                <p>
                  So yeah. What a time to be alive.
                </p>

                <p>
                  The world is changing faster than ever. And our job — the only job that matters — is to make sure you're ready for it. Not just ready. <span className="font-medium text-white">Built for it.</span>
                </p>

                <p className="text-lg font-medium text-white">
                  If we do this right, the world won't just survive AI.
                </p>

                <p className="text-lg font-medium text-white">
                  It will rise because of it.
                </p>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/60">—</p>
                  <p className="font-semibold text-white">Slick</p>
                  <p className="text-white/70">Founder, Haestus.dev</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
