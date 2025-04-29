import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, X, Mail, Linkedin, GitHub, ExternalLink, 
  Code, Database, Terminal, Server, Award, 
  Briefcase, BookOpen, ChevronUp
} from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-white font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Scroll to top button */}
      {showScrollUp && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed z-50 bottom-8 right-8 p-3 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-500 transition-all duration-300"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default App;