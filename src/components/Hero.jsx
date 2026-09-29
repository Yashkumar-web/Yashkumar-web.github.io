import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Award } from 'lucide-react';
import profileImg from '../assets/yash-profile.jpg';

const Hero = () => {
  const roles = [
    "Digital Marketer",
    "Website Designer",
    "Tech Creator",
    "AI Enthusiast",
    "Tech Blogger"
  ];

  // State for "HELLO, I'M YASH KUMAR" typing effect
  const [introText, setIntroText] = useState("");
  const fullIntro = "HELLO, I'M YASH KUMAR";

  // State for roles typewriter effect
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  // Effect for the top "HELLO" text
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setIntroText(fullIntro.substring(0, i + 1));
      i++;
      if (i === fullIntro.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Effect for the roles typewriter
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setRoleText(currentRole.substring(0, roleText.length + 1));
        if (roleText === currentRole) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setRoleText(currentRole.substring(0, roleText.length - 1));
        if (roleText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-4 py-1 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo text-sm font-medium mb-6"
          >
            {introText}
            <span className="inline-block w-1 h-4 ml-1 bg-accent-indigo animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          >
            <span className="block text-white">Digital </span>
            <span className="premium-gradient-text">Marketing</span>
            <span className="block text-white">& </span>
            <span className="premium-gradient-text">Technology</span>
            <span className="block text-white">Creator</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-text-muted text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
          >
            Building modern digital experiences, technology content and online solutions through <span className="text-white font-medium">Tech With Yash</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#portfolio" className="premium-btn flex items-center gap-2">
              Explore My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full font-medium transition-all duration-300 border border-white/10 hover:bg-white/5 text-white">
              Work With Me
            </a>
            <a href="https://www.techwithyash.blog/" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full font-medium transition-all duration-300 bg-white/5 hover:bg-white/10 text-white flex items-center gap-2">
              Visit Blog <ExternalLink size={16} />
            </a>
          </motion.div>

          {/* Animated Typewriter Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex items-center gap-3 text-text-muted font-mono"
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-sm uppercase tracking-widest">
              Currently: <span className="text-white font-bold">{roleText}</span>
              <span className="inline-block w-1 h-4 ml-1 bg-accent-indigo animate-bounce" />
            </span>
          </motion.div>
        </motion.div>

        {/* Right Content - Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Gradient Ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border-2 border-dashed border-accent-indigo/30 animate-spin-slow" />
            <div className="absolute w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full border border-accent-violet/20 animate-reverse-spin" />
          </div>

          {/* Profile Image */}
          <div className="relative z-10 mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-accent-indigo/20">
            <img
              src="/public/yash-profile.jpg"
              alt="Yash Kumar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Glass Cards */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 glass-card p-4 flex items-center gap-3 z-20"
          >
            <div className="p-2 rounded-lg bg-accent-indigo/20 text-accent-indigo">
              <Award size={24} />
            </div>
            <div>
              <p className="text-xs text-text-muted">Certification</p>
              <p className="text-sm font-bold">Google Certified</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -left-8 glass-card p-4 flex items-center gap-3 z-20"
          >
            <div className="p-2 rounded-lg bg-accent-cyan/20 text-accent-cyan">
              <Award size={24} />
            </div>
            <div>
              <p className="text-xs text-text-muted">Expertise</p>
              <p className="text-sm font-bold">SEO & AI Tools</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
