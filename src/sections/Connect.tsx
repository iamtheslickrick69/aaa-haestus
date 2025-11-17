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
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-32 px-6 bg-[#0b0b0b]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Executive Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Connect</h2>

            <div className="mb-8">
              <h3 className="text-sm text-[#CC0000] tracking-[0.2em] uppercase font-medium mb-4">
                EXECUTIVE SUMMARY
              </h3>
              <p className="text-[#B3B3B3] leading-relaxed mb-4">
                We architect AI systems that amplify human capability and compound competitive
                advantage. Three projects per month. Enterprise-grade standards. No inflated
                promises—only real capabilities, real results.
              </p>
              <p className="text-[#B3B3B3] leading-relaxed">
                If you're ready to transform your organization with intelligent systems built to
                last, we should talk.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex gap-4 mb-8">
              <motion.a
                href="sms:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#CC0000] text-white font-medium rounded-lg hover:bg-[#CC0000]/90 transition-all duration-300"
              >
                Text Us
              </motion.a>
              <motion.a
                href="mailto:hello@haestus.dev"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:border-white/40 transition-all duration-300"
              >
                Email Us
              </motion.a>
            </div>

            {/* Footer Note */}
            <div className="text-sm text-white/40">
              <p className="mb-2">Direct line: hello@haestus.dev</p>
              <p>No NDAs needed—we execute faster than lawyers can draft.</p>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm text-white/70 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-[#1a1a1a] rounded-lg text-white focus:border-[#CC0000]/50 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-white/70 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-[#1a1a1a] rounded-lg text-white focus:border-[#CC0000]/50 focus:outline-none transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm text-white/70 mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-[#1a1a1a] rounded-lg text-white focus:border-[#CC0000]/50 focus:outline-none transition-colors"
                  placeholder="Your company"
                />
              </div>

              {/* What are you building? */}
              <div>
                <label className="block text-sm text-white/70 mb-2">What are you building?</label>
                <textarea
                  value={formData.building}
                  onChange={(e) => setFormData({ ...formData, building: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-[#1a1a1a] rounded-lg text-white focus:border-[#CC0000]/50 focus:outline-none transition-colors resize-none"
                  placeholder="Describe your project or challenge..."
                />
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-sm text-white/70 mb-2">Timeline</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-[#1a1a1a] rounded-lg text-white focus:border-[#CC0000]/50 focus:outline-none transition-colors"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (1-2 weeks)</option>
                  <option value="short">Short-term (1-3 months)</option>
                  <option value="medium">Medium-term (3-6 months)</option>
                  <option value="long">Long-term (6+ months)</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm text-white/70 mb-2">Budget</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-[#1a1a1a] rounded-lg text-white focus:border-[#CC0000]/50 focus:outline-none transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="25k-50k">$25K - $50K</option>
                  <option value="50k-100k">$50K - $100K</option>
                  <option value="100k-250k">$100K - $250K</option>
                  <option value="250k+">$250K+</option>
                </select>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#CC0000] text-white font-semibold rounded-lg hover:bg-[#CC0000]/90 transition-all duration-300 shadow-lg shadow-[#CC0000]/25"
              >
                Start Building
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
