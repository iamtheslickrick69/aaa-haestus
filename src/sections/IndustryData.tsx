'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    number: '78%',
    headline: 'of organizations now use AI in at least one business function',
    detail: 'Up from 55% one year ago',
    source: 'McKinsey Global Survey, 2024',
  },
  {
    number: '30%',
    headline: 'of generative AI projects are abandoned after proof of concept',
    detail: 'Fast deployment without architecture leads to expensive failures.',
    source: 'Gartner Research, 2025',
  },
  {
    number: '$644B',
    headline: 'global AI spending projected for 2025',
    detail: 'Massive investment reshaping industries.',
    source: 'Gartner Forecast, 2025',
  },
  {
    number: '1%',
    headline: 'of leaders say their org is mature in AI deployment',
    detail: 'The gap between ambition and execution is where we operate.',
    source: 'McKinsey Global Survey, 2024',
  },
];

export default function IndustryData() {
  return (
    <section className="py-32 px-6 bg-[#0b0b0b]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black border border-[#1a1a1a] rounded-xl p-8 shadow-lg"
            >
              {/* Icon placeholder */}
              <div className="w-12 h-12 bg-[#CC0000]/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-[#CC0000]/50 rounded" />
              </div>

              {/* Big Number */}
              <h3 className="text-5xl font-bold text-[#CC0000] mb-4">{stat.number}</h3>

              {/* Headline */}
              <p className="text-lg text-white font-medium mb-3">{stat.headline}</p>

              {/* Supporting paragraph */}
              <p className="text-[#B3B3B3] mb-4 text-sm leading-relaxed">{stat.detail}</p>

              {/* Source */}
              <p className="text-xs text-white/40">Source: {stat.source}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
