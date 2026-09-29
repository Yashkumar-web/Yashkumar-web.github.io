import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-12 bg-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold premium-gradient-text mb-4">TECH WITH YASH</h2>
            <p className="text-text-muted max-w-sm mb-6">
              Digital Marketing • Technology • AI • Web.
              Helping brands and professionals build a powerful digital presence.
            </p>
            <div className="flex gap-4">
              <a href="https://www.techwithyash.blog/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <span className="sr-only">Blog</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-text-muted">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="text-text-muted hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-text-muted hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-text-muted hover:text-white transition-colors">Skills</a></li>
              <li><a href="#services" className="text-text-muted hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-text-muted hover:text-white transition-colors">Work</a></li>
              <li><a href="#contact" className="text-text-muted hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-text-muted">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="mailto:kyash3021@gmail.com" className="text-text-muted hover:text-white transition-colors block">kyash3021@gmail.com</a>
              </li>
              <li>
                <a href="tel:+919266605669" className="text-text-muted hover:text-white transition-colors block">+91 9266605669</a>
              </li>
              <li>
                <a href="https://wa.me/919266605669" target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors block">WhatsApp</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            © 2026 Yash Kumar / Tech With Yash. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-text-muted">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
