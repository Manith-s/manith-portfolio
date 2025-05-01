import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown, Download } from 'lucide-react';

// Image paths to try
const IMAGE_PATHS = [
  '/profile-photo.jpg',
  './profile-photo.jpg',
  `${process.env.PUBLIC_URL}/profile-photo.jpg`,
];

const Hero = () => {
  const canvasRef = useRef(null);
  const [imagePath, setImagePath] = useState(null);

  // Try to load image from different paths
  useEffect(() => {
    const tryLoadImage = async (paths) => {
      for (const path of paths) {
        try {
          console.log(`Trying to load image from: ${path}`);
          const img = new Image();
          img.src = path;
          
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          });
          
          console.log(`Successfully loaded image from: ${path}`);
          setImagePath(path);
          return; // Exit once we find a working path
        } catch (error) {
          console.error(`Failed to load image from: ${path}`);
        }
      }
      
      // If all paths fail
      console.error("All image paths failed. Please check file location and name.");
    };
    
    tryLoadImage(IMAGE_PATHS);
  }, []);

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
    title: "Software Engineer & Business/Data Analyst",
    // Removed the description as requested
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

  // Render photo based on availability
  const renderPhoto = () => {
    if (imagePath) {
      return (
        <div className="relative flex items-center justify-center">
          {/* Main circular frame with balanced sizing */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Outer decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary-400/30 animate-pulse-slow"></div>
            
            {/* Middle decorative ring */}
            <div className="absolute inset-2 rounded-full border border-primary-500/40"></div>
            
            {/* Inner glow effect */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary-500/10 to-secondary-400/10 blur-md"></div>
            
            {/* Photo container - perfectly circular */}
            <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-primary-400/50 shadow-xl shadow-primary-500/20">
              <img 
                src={imagePath} 
                alt={personalInfo.name}
                className="w-full h-full object-cover object-center" 
              />
            </div>
            
            {/* Small accent decorations */}
            <div className="absolute top-4 -right-2 w-5 h-5 rounded-full bg-primary-500 animate-float"></div>
            <div className="absolute bottom-12 -left-3 w-3 h-3 rounded-full bg-secondary-400 animate-float-delay"></div>
            <div className="absolute top-1/4 -left-1 w-2 h-2 rounded-full bg-primary-300 animate-float"></div>
          </div>
        </div>
      );
    } else {
      // Fallback when image is not found
      return (
        <div className="relative flex items-center justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Outer decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary-400/30 animate-pulse-slow"></div>
            
            {/* Middle decorative ring */}
            <div className="absolute inset-2 rounded-full border border-primary-500/40"></div>
            
            {/* Fallback avatar */}
            <div className="absolute inset-6 rounded-full overflow-hidden bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center shadow-xl shadow-primary-500/20 border-2 border-primary-400/50">
              <div className="text-5xl font-bold text-white">
                {personalInfo.name.split(" ").map(name => name[0]).join("")}
              </div>
            </div>
            
            {/* Small accent decorations */}
            <div className="absolute top-4 -right-2 w-5 h-5 rounded-full bg-primary-500 animate-float"></div>
            <div className="absolute bottom-12 -left-3 w-3 h-3 rounded-full bg-secondary-400 animate-float-delay"></div>
            <div className="absolute top-1/4 -left-1 w-2 h-2 rounded-full bg-primary-300 animate-float"></div>
          </div>
        </div>
      );
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

      <div className="container mx-auto px-8 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-8"
        >
          {/* Left column - Text content with balanced spacing */}
          <div className="md:w-1/2 text-center md:text-left">
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
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap md:justify-start justify-center gap-4"
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
              
              {/* "View Projects" button removed as requested */}
              
              <a 
                href="/resume.pdf" 
                download="Manith_Shashidhar_Resume.pdf"
                className="px-8 py-3 rounded-full bg-transparent border border-secondary-500 text-secondary-400 font-medium hover:bg-secondary-500/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </div>

          {/* Right column - Photo */}
          <motion.div 
            variants={itemVariants} 
            className="md:w-1/2 mb-8 md:mb-0 flex justify-center"
          >
            {/* Photo with balanced sizing */}
            {renderPhoto()}
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