import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import TechWithYash from './components/TechWithYash';
import FeaturedArticles from './components/FeaturedArticles';
import Portfolio from './components/Portfolio';
import Credentials from './components/Credentials';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import GoogleBusiness from './components/GoogleBusiness';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import BackgroundMesh from './components/BackgroundMesh';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CustomCursor />
          <BackgroundMesh />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Services />
            <TechWithYash />
            <FeaturedArticles />
            <Portfolio />
            <Credentials />
            <WhyWorkWithMe />
            <GoogleBusiness />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
