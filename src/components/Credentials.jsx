import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Credentials = () => {
  const certs = [
    {
      name: "Google Certified Digital Marketer",
      issuer: "Google",
      icon: <Award className="text-accent-indigo" />
    },
    {
      name: "Google Analytics Certified",
      issuer: "Google",
      icon: <Award className="text-accent-violet" />
    },
    {
      name: "Advanced JavaScript",
      issuer: "Indian Institute of Computer Science",
      icon: <Award className="text-accent-cyan" />
    }
  ];

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Verified <span className="premium-gradient-text">Credentials</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-8 flex flex-col items-center text-center"
            >
              <div className="p-4 rounded-2xl bg-white/5 mb-6">
                {c.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{c.name}</h3>
              <p className="text-text-muted text-sm">{c.issuer}</p>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-green-400">
                <CheckCircle size={14} /> Verified
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
