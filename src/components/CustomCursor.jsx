import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e) => {
      if (e.target.closest('a, button, .interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full z-[9999] pointer-events-none"
        animate={{ x: position.x - 4, y: position.y - 4 }}
        transition={{ type: 'spring', damping: 30, stiffness: 250 }}
      />
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 border-2 border-accent-indigo rounded-full z-[9998] pointer-events-none transition-all duration-300 ${isHovering ? 'bg-accent-indigo/20 scale-150' : 'bg-transparent'}`}
        animate={{ x: position.x - 16, y: position.y - 16 }}
        transition={{ type: 'spring', damping: 20, stiffness: 150 }}
      />
    </>
  );
};

export default CustomCursor;
