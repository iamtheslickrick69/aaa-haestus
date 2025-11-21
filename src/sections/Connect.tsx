'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    building: '',
    timeline: '',
    budget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="relative overflow-hidden min-h-screen py-40 px-8 bg-black">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          {/* Left Side - Executive Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            {/* Main Heading */}
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-12 tracking-tight leading-none">
              Connect
            </h2>

            {/* Executive Summary */}
            <div className="mb-12 space-y-6">
              <h3 className="text-xs text-[#ff6b35] tracking-[0.25em] uppercase font-semibold mb-6">
                EXECUTIVE SUMMARY
              </h3>
              <p className="text-lg text-[#A1A1AA] leading-relaxed">
                We architect AI systems that amplify human capability and compound competitive
                advantage. Three projects per month. Enterprise-grade standards. No inflated
                promises—only real capabilities, real results.
              </p>
              <p className="text-lg text-[#A1A1AA] leading-relaxed">
                If you&apos;re ready to transform your organization with intelligent systems built to
                last, we should talk.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                href="sms:+1234567890"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#ff6b35] text-white font-semibold rounded-xl hover:bg-[#ff8556] transition-all duration-300 shadow-lg shadow-[#ff6b35]/20"
              >
                Text Us
              </motion.a>
              <motion.a
                href="mailto:hello@haestus.dev"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/10 text-white font-semibold rounded-xl hover:border-white/20 hover:bg-white/5 transition-all duration-300"
              >
                Email Us
              </motion.a>
            </div>

            {/* Footer Note */}
            <div className="space-y-3 text-sm">
              <p className="text-white/60 font-medium">
                Direct line:{' '}
                <a
                  href="mailto:hello@haestus.dev"
                  className="text-white/80 hover:text-[#ff6b35] transition-colors"
                >
                  hello@haestus.dev
                </a>
              </p>
              <p className="text-white/40">
                No NDAs needed—we execute faster than lawyers can draft.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-[#0A0A0A] to-[#111111] border border-white/5 rounded-2xl p-10 lg:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-white/70">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-14 px-5 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-[#ff6b35]/50 focus:bg-black/70 focus:outline-none transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-white/70">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-14 px-5 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-[#ff6b35]/50 focus:bg-black/70 focus:outline-none transition-all duration-300"
                  placeholder="you@company.com"
                />
              </div>

              {/* Company */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-white/70">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full h-14 px-5 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-[#ff6b35]/50 focus:bg-black/70 focus:outline-none transition-all duration-300"
                  placeholder="Your company"
                />
              </div>

              {/* What are you building? */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-white/70">
                  What are you building?
                </label>
                <textarea
                  value={formData.building}
                  onChange={(e) => setFormData({ ...formData, building: e.target.value })}
                  rows={5}
                  className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-[#ff6b35]/50 focus:bg-black/70 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Describe your project or challenge..."
                />
              </div>

              {/* Timeline & Budget Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Timeline */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-white/70">Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full h-14 px-5 bg-black/50 border border-white/10 rounded-xl text-white focus:border-[#ff6b35]/50 focus:bg-black/70 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1.25rem center',
                    }}
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (1-2 weeks)</option>
                    <option value="short">Short-term (1-3 months)</option>
                    <option value="medium">Medium-term (3-6 months)</option>
                    <option value="long">Long-term (6+ months)</option>
                  </select>
                </div>

                {/* Budget */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-white/70">Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full h-14 px-5 bg-black/50 border border-white/10 rounded-xl text-white focus:border-[#ff6b35]/50 focus:bg-black/70 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1.25rem center',
                    }}
                  >
                    <option value="">Select budget range</option>
                    <option value="25k-50k">$25K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k-250k">$100K - $250K</option>
                    <option value="250k+">$250K+</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="w-full h-14 mt-4 bg-gradient-to-r from-[#ff6b35] to-[#ff8556] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#ff6b35]/30 transition-all duration-300"
              >
                Start Building →
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
