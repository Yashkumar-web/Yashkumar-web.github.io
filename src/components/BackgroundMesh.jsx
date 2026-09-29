import React from 'react';
import { motion } from 'framer-motion';

const BackgroundMesh = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-indigo/10 blur-[120px] animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-violet/10 blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-accent-cyan/10 blur-[120px] animate-float" style={{ animationDelay: '-6s' }} />

      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0F_80%)]" />
    </div>
  );
};

export default BackgroundMesh;
