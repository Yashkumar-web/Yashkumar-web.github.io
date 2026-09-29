import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Have a Project in <span className="premium-gradient-text">Mind?</span></h2>
          <p className="text-text-muted">Let's turn your idea into a modern digital experience.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-muted">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-indigo outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-muted">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-indigo outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted">Service</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-indigo outline-none transition-all appearance-none">
                  <option className="bg-primary">Website Design</option>
                  <option className="bg-primary">Digital Marketing</option>
                  <option className="bg-primary">SEO Optimization</option>
                  <option className="bg-primary">AI Content</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-indigo outline-none transition-all" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="premium-btn w-full flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="glass-card p-6 flex items-start gap-6 group hover:border-accent-indigo transition-colors">
              <div className="p-3 rounded-xl bg-accent-indigo/20 text-accent-indigo">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-text-muted mb-1">Email Me</p>
                <a href="mailto:kyash3021@gmail.com" className="text-xl font-bold hover:text-accent-indigo transition-colors">kyash3021@gmail.com</a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-6 group hover:border-accent-violet transition-colors">
              <div className="p-3 rounded-xl bg-accent-violet/20 text-accent-violet">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-text-muted mb-1">Call Me</p>
                <a href="tel:+919266605669" className="text-xl font-bold hover:text-accent-violet transition-colors">+91 9266605669</a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-6 group hover:border-accent-cyan transition-colors">
              <div className="p-3 rounded-xl bg-accent-cyan/20 text-accent-cyan">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-sm text-text-muted mb-1">WhatsApp</p>
                <a href="https://wa.me/919266605669" target="_blank" rel="noreferrer" className="text-xl font-bold hover:text-accent-cyan transition-colors">Chat on WhatsApp</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
