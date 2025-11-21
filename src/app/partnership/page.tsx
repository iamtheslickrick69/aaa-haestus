'use client';

import { motion } from 'framer-motion';

export default function Partnership() {
  const criteria = [
    "Founders with meaningful responsibility",
    "Ready to build systems that drive revenue",
    "Able to move quickly",
    "Committed to long-term evolution",
    "Honest about challenges",
    "Focused on architecture, not hype"
  ];

  const expectations = [
    "Clear goals",
    "Access to systems",
    "A single decision-maker",
    "Honest communication",
    "Willingness to follow architecture",
    "Fast feedback",
    "Commitment to quality"
  ];

  const benefits = [
    "The full Forge Framework",
    "Custom intelligence layer",
    "Production deployment",
    "Founder-level strategic guidance",
    "System evolution",
    "Priority support"
  ];

  return (
    <div className="relative z-10 min-h-screen bg-[#0a0a0a] text-white">

      {/* Hero Section */}
      <section className="px-4 pt-32 pb-12">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500 mb-6"
          >
            Partnership, Not Clients
          </motion.h1>

          {/* Orange Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
          >
            We work with founders who understand that AI isn&apos;t a feature — it&apos;s a structural advantage.
          </motion.p>

        </div>
      </section>

      {/* Who We Partner With Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who We Partner With
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto" />
          </div>

          {/* 3x2 Grid with Alternating Colors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {criteria.map((criterion, index) => {
              // Alternate colors: 0,2,4 = orange, 1,3,5 = blue
              const isOrange = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border transition-all duration-400 shadow-lg cursor-pointer ${
                    isOrange
                      ? 'border-orange-500/20 hover:border-orange-500/60 hover:shadow-orange-500/20'
                      : 'border-blue-500/20 hover:border-blue-500/60 hover:shadow-blue-500/20'
                  } hover:-translate-y-2`}
                >
                  {/* Checkmark Icon Circle */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                    isOrange
                      ? 'bg-orange-500/10 border border-orange-500/20'
                      : 'bg-blue-500/10 border border-blue-500/20'
                  }`}>
                    <svg
                      className={`w-6 h-6 ${isOrange ? 'text-orange-500' : 'text-blue-500'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  {/* Criterion Text */}
                  <p className="text-lg text-white font-medium leading-relaxed">
                    {criterion}
                  </p>
                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* The Exchange Section */}
      <section className="px-4 py-16 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Exchange
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto" />
          </div>

          {/* Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left: What We Expect - Blue */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/40 hover:shadow-blue-500/10 transition-all duration-400"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                What We Expect
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-8" />

              <ul className="space-y-4">
                {expectations.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-blue-500 mt-1 text-xl">•</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: What Partners Receive - Orange */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-orange-500/20 hover:border-orange-500/40 hover:shadow-orange-500/10 transition-all duration-400"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                What Partners Receive
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-8" />

              <ul className="space-y-4">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-orange-500 mt-1 text-xl">•</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Investment Section */}
      <section className="px-4 py-16">
        <div className="max-w-5xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Investment
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto" />
          </div>

          {/* Investment Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 md:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-xl"
          >

            {/* Timelines */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Typical Timelines
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Sprint */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">
                    2-4
                  </div>
                  <div className="text-sm text-gray-400 mb-3">weeks</div>
                  <div className="text-gray-300">Sprint</div>
                </div>

                {/* Standard */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">
                    1-3
                  </div>
                  <div className="text-sm text-gray-400 mb-3">months</div>
                  <div className="text-gray-300">Standard</div>
                </div>

                {/* Comprehensive */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">
                    3-6+
                  </div>
                  <div className="text-sm text-gray-400 mb-3">months</div>
                  <div className="text-gray-300">Comprehensive</div>
                </div>

              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 mb-12" />

            {/* Positioning Statement */}
            <div className="text-center">
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Investment scales with scope and complexity. We take on a limited number of partnerships per quarter to maintain our quality standard.
              </p>
            </div>

          </motion.div>

        </div>
      </section>

      {/* Call to Action - Simple Mailto Button */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-12 md:p-16 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-orange-500/20 shadow-xl"
          >

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to architect intelligence together?
            </h2>

            {/* Orange Underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8" />

            {/* Mailto Button */}
            <a
              href="mailto:hello@haestus.dev?subject=Partnership%20Inquiry"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
            >
              <span>Start the Conversation</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Response Time */}
            <p className="text-gray-400 mt-6">
              We respond within 24 hours.
            </p>

          </motion.div>

        </div>
      </section>

      {/* Closing Quote */}
      <section className="px-4 py-16 pb-32">
        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-xl"
          >
            <p className="text-2xl md:text-3xl font-medium text-orange-500 italic">
              &ldquo;The forge is selective for a reason.&rdquo;
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
