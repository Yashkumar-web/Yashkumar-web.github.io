import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Monitor } from 'lucide-react';

const TechWithYash = () => {
  return (
    <section id="blog" className="relative py-24 bg-secondary/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to <span className="premium-gradient-text">Tech With Yash</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Explore technology, AI, digital tools, smartphones, SEO, blogging and the evolving digital world. My blog is a hub for enthusiasts and professionals looking to stay ahead in the digital age.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {["AI", "Technology", "AI Tools", "Smartphones", "SEO", "Blogging", "Cybersecurity"].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-text-muted">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://www.techwithyash.blog/"
              target="_blank"
              rel="noreferrer"
              className="premium-btn inline-flex items-center gap-2"
            >
              Explore Tech With Yash <ExternalLink size={18} />
            </a>
          </motion.div>

          {/* Right Live Website Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Browser Frame */}
            <div className="glass-card rounded-t-xl border-b-0 flex items-center gap-2 px-4 py-3 bg-secondary/80">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="mx-auto bg-white/5 rounded-md px-3 py-1 text-[10px] text-text-muted flex items-center gap-2">
                <Monitor size={10} /> techwithyash.blog
              </div>
            </div>

            {/* Clickable iframe container */}
            <div className="glass-card rounded-b-xl overflow-hidden h-[500px] relative group">
              <a
                href="https://www.techwithyash.blog/"
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 z-20 cursor-pointer"
                title="Click to open live website"
              >
                {/* Hover Overlay to make it clear it's clickable */}
                <div className="absolute inset-0 bg-accent-indigo/0 group-hover:bg-accent-indigo/10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white font-bold flex items-center gap-2">
                    Open Live Website <ExternalLink size={18} />
                  </div>
                </div>
              </a>

              <iframe
                src="https://www.techwithyash.blog/"
                className="w-full h-full border-none"
                title="Tech With Yash Live Preview"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TechWithYash;
