'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import * as z from 'zod';

// Form validation schema
const partnershipSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  website: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  role: z.string().min(2, 'Please specify your role'),
  projectType: z.string().min(1, 'Please select a project type'),
  timeline: z.string().min(1, 'Please select a timeline'),
  budget: z.string().min(1, 'Please select a budget range'),
  description: z.string().min(50, 'Please provide at least 50 characters'),
  source: z.string().optional()
});

type PartnershipFormData = z.infer<typeof partnershipSchema>;

export default function Partnership() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<PartnershipFormData>({
    resolver: zodResolver(partnershipSchema)
  });

  const onSubmit = async (data: PartnershipFormData) => {
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/partnership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset(); // Clear form
        // Scroll to success message
        setTimeout(() => {
          document.getElementById('success-message')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Show error message to user
      alert('There was an error submitting your application. Please try again or email us directly at hello@haestus.dev');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Page Content - NO video background */}
      <div className="relative">

        {/* Hero Section */}
        <section className="min-h-[50vh] flex items-center justify-center px-4 pt-32 pb-16">
          <div className="max-w-5xl mx-auto text-center">

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Partnership, Not Clients
            </h1>

            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8" />

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We work with founders who understand that AI isn&apos;t a feature — it&apos;s a structural advantage.
            </p>

          </div>
        </section>

        {/* Who We Partner With Section */}
        <section className="px-4 py-20">
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Who We Partner With
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

              {criteria.map((criterion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-6 md:p-8 shadow-2xl hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Checkmark Icon */}
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  {/* Criterion Text */}
                  <p className="text-lg text-white font-medium leading-relaxed">
                    {criterion}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* The Exchange Section */}
        <section className="px-4 py-20 bg-black/30">
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                The Exchange
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

              {/* Left Column - What We Expect */}
              <div className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-8 md:p-10 shadow-2xl">

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  What We Expect
                </h3>
                <div className="w-16 h-1 bg-orange-500 mb-8" />

                <ul className="space-y-4">
                  {expectations.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="text-orange-500 mt-1">•</div>
                      <span className="text-gray-300 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Right Column - What Partners Receive */}
              <div className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-8 md:p-10 shadow-2xl">

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  What Partners Receive
                </h3>
                <div className="w-16 h-1 bg-orange-500 mb-8" />

                <ul className="space-y-4">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="text-orange-500 mt-1">•</div>
                      <span className="text-gray-300 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="px-4 py-20">
          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Investment
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto" />
            </div>

            <div className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-8 md:p-12 shadow-2xl">

              {/* Timelines */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                  Typical Timelines
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-2">2-4</div>
                    <div className="text-gray-400">weeks</div>
                    <div className="text-sm text-gray-500 mt-2">Sprint</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-2">1-3</div>
                    <div className="text-gray-400">months</div>
                    <div className="text-sm text-gray-500 mt-2">Standard</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-2">3-6+</div>
                    <div className="text-gray-400">months</div>
                    <div className="text-sm text-gray-500 mt-2">Comprehensive</div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="border-t border-orange-500/20 pt-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                  Engagement Range
                </h3>

                <div className="text-center mb-8">
                  <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    $25K - $250K+
                  </div>
                </div>

                <p className="text-lg text-gray-400 text-center">
                  We take three partnerships per month.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Partnership Application Form */}
        <section className="px-4 py-20">
          <div className="max-w-4xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Request a Partnership Call
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
              <p className="text-lg text-gray-400">
                Tell us about your project. We&apos;ll respond within 24 hours.
              </p>
            </div>

            <div className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-8 md:p-12 shadow-2xl">

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-black/40 border border-orange-500/20 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 bg-black/40 border border-orange-500/20 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                {/* Company Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company *
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    placeholder="Your company name"
                    className="w-full px-4 py-3 bg-black/40 border border-orange-500/20 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                  {errors.company && (
                    <p className="mt-2 text-sm text-red-400">{errors.company.message}</p>
                  )}
                </div>

                {/* Website Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Website
                  </label>
                  <input
                    {...register('website')}
                    type="url"
                    placeholder="https://yourcompany.com"
                    className="w-full px-4 py-3 bg-black/40 border border-orange-500/20 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                  {errors.website && (
                    <p className="mt-2 text-sm text-red-400">{errors.website.message}</p>
                  )}
                </div>

                {/* Role Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Role *
                  </label>
                  <input
                    {...register('role')}
                    type="text"
                    placeholder="e.g., Founder, CEO, CTO"
                    className="w-full px-4 py-3 bg-black/40 border border-orange-500/20 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                  {errors.role && (
                    <p className="mt-2 text-sm text-red-400">{errors.role.message}</p>
                  )}
                </div>

                {/* Project Type Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    {...register('projectType')}
                    className="w-full px-4 py-3 bg-black/40 border border-orange-500/20 rounded-xl text-white focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                  >
                    <option value="">Select project type</option>
                    <option value="revenue">Revenue Intelligence</option>
                    <option value="operational">Operational Intelligence</option>
                    <option value="founder">Founder Intelligence</option>
                    <option value="custom">Custom System</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.projectType && (
                    <p className="mt-2 text-sm text-red-400">{errors.projectType.message}</p>
                  )}
                </div>

                {/* Timeline Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Timeline *
                  </label>
                  <select
                    {...register('timeline')}
                    className="w-full px-4 py-3 bg-black/40 border border-orange-500/20 rounded-xl text-white focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                  >
                    <option value="">Select timeline</option>
                    <option value="2-4-weeks">2-4 weeks (Sprint)</option>
                    <option value="1-3-months">1-3 months (Standard)</option>
                    <option value="3-6-months">3-6+ months (Comprehensive)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                  {errors.timeline && (
                    <p className="mt-2 text-sm text-red-400">{errors.timeline.message}</p>
                  )}
                </div>

                {/* Budget Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range *
                  </label>
                  <select
                    {...register('budget')}
                    className="w-full px-4 py-3 bg-black/40 border border-orange-500/20 rounded-xl text-white focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                  >
                    <option value="">Select budget range</option>
                    <option value="25k-50k">$25K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k-250k">$100K - $250K</option>
                    <option value="250k+">$250K+</option>
                    <option value="open">Open to Discussion</option>
                  </select>
                  {errors.budget && (
                    <p className="mt-2 text-sm text-red-400">{errors.budget.message}</p>
                  )}
                </div>

                {/* Project Description Textarea */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    {...register('description')}
                    rows={6}
                    placeholder="Describe your project, challenges you're facing, and what you're hoping to achieve..."
                    className="w-full px-4 py-3 bg-black/40 border border-orange-500/20 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all resize-vertical"
                  />
                  {errors.description && (
                    <p className="mt-2 text-sm text-red-400">{errors.description.message}</p>
                  )}
                  <p className="mt-2 text-sm text-gray-500">
                    {watch('description')?.length || 0} / 500 characters (minimum 50)
                  </p>
                </div>

                {/* Source Field (Optional) */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    How did you hear about us?
                  </label>
                  <input
                    {...register('source')}
                    type="text"
                    placeholder="e.g., LinkedIn, referral, search..."
                    className="w-full px-4 py-3 bg-black/40 border border-orange-500/20 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request Partnership Call
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>

              </form>

              {/* Success Message (Conditional) */}
              {submitSuccess && (
                <motion.div
                  id="success-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-green-500/10 border border-green-500/30 rounded-xl"
                >
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-green-500 mb-1">
                        Application Received
                      </h3>
                      <p className="text-gray-300">
                        We&apos;ll review your partnership request and respond within 24 hours.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="px-4 py-12 pb-32">
          <div className="max-w-3xl mx-auto text-center">

            <div className="bg-[#0a0a0a] border border-orange-500/20 rounded-2xl p-8 md:p-10 shadow-2xl">
              <p className="text-2xl md:text-3xl font-bold text-orange-500">
                &ldquo;The forge is selective for a reason.&rdquo;
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
