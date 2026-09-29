import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: "Digital Marketing",
      skills: ["SEO", "Google Analytics", "Google Search Console", "Google Ads", "Google Trends", "Content Marketing", "Performance Marketing", "Affiliate Marketing"],
      color: "from-accent-indigo to-accent-violet",
      image: "https://images.unsplash.com/photo-1533750349080-392d7324322a?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Web Design",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "WordPress", "Elementor", "WooCommerce", "Blogger"],
      color: "from-accent-violet to-accent-cyan",
      image: "https://images.unsplash.com/photo-1547658719-15074d5a7676?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "AI & Technology",
      skills: ["AI Tools", "ChatGPT", "AI Content", "AI Image Generation", "AI Video Generation", "Prompt Engineering"],
      color: "from-accent-cyan to-accent-indigo",
      image: "https://images.unsplash.com/photo-1677442136019-6575b37669bc?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Currently Learning",
      skills: ["Advanced JavaScript", "React", "Node.js", "Express", "MongoDB", "MERN", "Python", "SQL", "Next.js", "Tailwind CSS"],
      color: "from-white/20 to-white/10",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="skills" className="relative py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My Digital <span className="premium-gradient-text">Toolkit</span>
          </motion.h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            A combination of technical expertise and creative strategy to drive digital success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card group relative overflow-hidden"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-b ${cat.color} opacity-20`} />
              </div>

              <div className="relative z-10 p-6">
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${cat.color}`} />
                <h3 className="text-xl font-bold mb-6 flex items-center justify-between">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-text-muted group-hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
