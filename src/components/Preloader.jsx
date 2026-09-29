import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center"
    >
      <div className="relative">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold premium-gradient-text tracking-tighter"
        >
          TECH WITH YASH
        </motion.h1>

        <div className="absolute -inset-4 blur-2xl opacity-30 bg-gradient-to-r from-accent-indigo to-accent-violet animate-pulse-slow" />
      </div>

      <div className="mt-12 w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-cyan"
          style={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-text-muted text-sm font-medium uppercase tracking-widest"
      >
        Initializing Experience...
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
