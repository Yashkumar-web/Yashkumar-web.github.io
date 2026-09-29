import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, Rocket, Compass, Lightbulb } from 'lucide-react';

const WhyWorkWithMe = () => {
  const reasons = [
    { title: "Modern Approach", desc: "Staying ahead of trends to ensure your brand remains relevant.", icon: <Brain />, color: "text-accent-indigo" },
    { title: "Technology Focused", desc: "Leveraging the latest tools to automate and optimize growth.", icon: <Zap />, color: "text-accent-violet" },
    { title: "Creative Thinking", desc: "Designing unique digital experiences that capture attention.", icon: <Lightbulb />, color: "text-accent-cyan" },
    { title: "Digital Mindset", desc: "Data-driven strategies focused on measurable results.", icon: <Target />, color: "text-accent-indigo" },
    { title: "Continuous Learning", desc: "Constantly evolving with the rapid pace of AI and Tech.", icon: <Compass />, color: "text-accent-violet" },
    { title: "AI-Aware Workflows", desc: "Integrating AI to increase content speed and quality.", icon: <Rocket />, color: "text-accent-cyan" },
  ];

  return (
    <section className="relative py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Work With <span className="premium-gradient-text">Me?</span></h2>
          <p className="text-text-muted">Combining creativity with a technology-first mindset.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group"
            >
              <div className={`mb-6 p-3 w-fit rounded-xl bg-white/5 ${r.color}`}>
                {r.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent-indigo transition-colors">{r.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
