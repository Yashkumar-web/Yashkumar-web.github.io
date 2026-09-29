import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Megaphone, Search, Globe, Smartphone, Sparkles, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Website Design",
      desc: "Modern, responsive websites designed for businesses, professionals and personal brands.",
      icon: <Layout />,
      color: "from-accent-indigo to-accent-violet"
    },
    {
      id: "02",
      title: "Digital Marketing",
      desc: "Build and strengthen your online presence with practical digital marketing strategies.",
      icon: <Megaphone />,
      color: "from-accent-violet to-accent-cyan"
    },
    {
      id: "03",
      title: "SEO",
      desc: "Improve website visibility and create a stronger search presence.",
      icon: <Search />,
      color: "from-accent-cyan to-accent-indigo"
    },
    {
      id: "04",
      title: "WordPress",
      desc: "Professional WordPress website creation and customization.",
      icon: <Globe />,
      color: "from-accent-indigo to-accent-cyan"
    },
    {
      id: "05",
      title: "Google Business",
      desc: "Setup and optimization assistance for local business visibility.",
      icon: <Smartphone />,
      color: "from-accent-violet to-accent-indigo"
    },
    {
      id: "06",
      title: "AI Content",
      desc: "AI-assisted creative workflows for modern digital content.",
      icon: <Sparkles />,
      color: "from-accent-cyan to-accent-violet"
    },
    {
      id: "07",
      title: "Tech Content",
      desc: "Technology and AI-focused content creation and blogging.",
      icon: <PenTool />,
      color: "from-white/20 to-white/10"
    }
  ];

  return (
    <section id="services" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            What I Can Help You <span className="premium-gradient-text">Build</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className={`absolute -inset-px bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${s.color} text-white`}>
                    {s.icon}
                  </div>
                  <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                    {s.id}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-indigo transition-colors">
                  {s.title}
                </h3>
                <p className="text-text-muted mb-8 leading-relaxed">
                  {s.desc}
                </p>

                <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all duration-300">
                  Learn More <span className="text-accent-indigo">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
