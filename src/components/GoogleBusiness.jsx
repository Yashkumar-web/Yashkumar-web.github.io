import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Globe, Star } from 'lucide-react';

const GoogleBusiness = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden border-accent-indigo/30">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Globe size={120} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-accent-indigo font-bold mb-4 uppercase tracking-widest text-xs">
                <Star size={14} fill="currentColor" /> Trusted Business
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tech With Yash</h2>
              <p className="text-text-muted text-lg mb-8">
                Verified Marketing Consultant providing professional digital growth services.
                Focused on delivering high-impact results for local and global clients.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="tel:+919266605669" className="premium-btn flex items-center gap-2 text-sm px-6 py-3">
                  <Phone size={18} /> Call Now
                </a>
                <a href="https://wa.me/919266605669" target="_blank" rel="noreferrer" className="premium-btn flex items-center gap-2 text-sm px-6 py-3 bg-green-600 hover:bg-green-500">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-primary/50 p-6 rounded-2xl border border-white/10">
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-white/5">
                  <span className="text-text-muted">Category</span>
                  <span className="font-medium">Marketing Consultant</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/5">
                  <span className="text-text-muted">Location</span>
                  <span className="font-medium">Delhi/NCR, India</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-text-muted">Phone</span>
                  <span className="font-medium">+91 9266605669</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleBusiness;
