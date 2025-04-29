import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef(null);

  // Create animated particles in the background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', setCanvasDimensions);
    setCanvasDimensions();
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(${Math.floor(Math.random() * 100 + 50)}, ${
          Math.floor(Math.random() * 100 + 100)
        }, ${Math.floor(Math.random() * 155 + 100)}, ${Math.random() * 0.7 + 0.3})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.size > 0.2) this.size -= 0.01;
        
        // Wrap around screen edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particle array
    const particleArray = [];
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000));
    
    for (let i = 0; i < particleCount; i++) {
      particleArray.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
      }
      
      // Draw connections between particles
      connectParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Connect particles with lines if they're close enough
    const connectParticles = () => {
      for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
          const dx = particleArray[a].x - particleArray[b].x;
          const dy = particleArray[a].y - particleArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.strokeStyle = `rgba(100, 149, 237, ${0.2 - distance/600})`;
            ctx.lineWidth = 0.2;
            ctx.beginPath();
            ctx.moveTo(particleArray[a].x, particleArray[a].y);
            ctx.lineTo(particleArray[b].x, particleArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Personal details
  const personalInfo = {
    name: "Manith Shashidhar",
    title: "Software Engineer & Data Specialist",
    description: "Technically curious and enthusiastic software engineer with 2+ years of experience specializing in software development, data engineering, and systems integration."
  };

  // Animation variants for text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-900/50 to-dark-950/80 -z-10"></div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary-600/20 text-primary-400 mb-2">
              Hello, I'm
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 animate-gradient bg-size-200"
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold mb-8 text-gray-200"
          >
            {personalInfo.title}
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            {personalInfo.description}
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 text-white font-medium hover:shadow-lg hover:shadow-primary-600/30 transition-all duration-300 transform hover:-translate-y-1">
                Get In Touch
              </button>
            </Link>
            
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className="px-8 py-3 rounded-full bg-transparent border border-primary-500 text-primary-400 font-medium hover:bg-primary-500/10 transition-all duration-300 transform hover:-translate-y-1">
                View Projects
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
        <ChevronDown size={20} className="text-primary-400" />
      </motion.div>
    </section>
  );
};

export default Hero;