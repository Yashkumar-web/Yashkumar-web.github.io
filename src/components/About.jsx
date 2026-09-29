import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="/yash-profile.jpg"
                alt="Yash Kumar"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent-indigo/20 blur-3xl rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-accent-cyan/20 blur-3xl rounded-full -z-10" />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              More Than Just <span className="premium-gradient-text">Digital</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              I am Yash Kumar, a professional Digital Marketer, Website Designer, and Technology Creator based in Delhi/NCR. Through my brand <span className="text-white font-medium">Tech With Yash</span>, I bridge the gap between complex technology and practical digital growth.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { title: "Digital Marketing", color: "bg-accent-indigo" },
                { title: "Web Design", color: "bg-accent-violet" },
                { title: "AI & Technology", color: "bg-accent-cyan" },
                { title: "SEO & Blogging", color: "bg-white/20" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-4 flex items-center gap-3"
                >
                  <div className={`w-2 h-2 rounded-full ${item.color}`} />
                  <span className="text-sm font-medium">{item.title}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="https://about.me/iamyashkumar"
              target="_blank"
              rel="noreferrer"
              className="premium-btn inline-flex items-center gap-2"
            >
              View My Profile <ExternalLink size={18} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
