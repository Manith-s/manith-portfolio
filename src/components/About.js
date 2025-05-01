import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Linkedin } from 'lucide-react';

const About = () => {
  // Personal information
  const personalInfo = {
    name: "Manith Shashidhar",
    email: "shashidharmanith@gmail.com",
    location: "Delaware, USA",
    linkedin: "www.linkedin.com/in/manith-shashidhar-9462181ba"
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 relative bg-dark-950 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute w-full h-full" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Subtle glow elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Simplified section heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-5xl font-bold mb-2 text-white">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-gray-400 text-xl">Bridging technology and business insights</p>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column - About text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-dark-900/60 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-blue-900/20 relative overflow-hidden shadow-xl h-full">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600/80 via-indigo-500/80 to-purple-600/80"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-32 -left-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
              
              <div className="space-y-6 text-lg text-gray-300">
                <p className="text-justify">
                  I bring together technical expertise in software engineering with a data-driven analytical mindset. 
                  My experience encompasses full-stack development, database architecture, and business analytics, 
                  enabling me to develop solutions that connect complex systems with actionable insights. 
                  With my background in Computer Science and current focus on Business Analytics and 
                  Information Management, I excel at translating business requirements into technological 
                  solutions that deliver measurable value. I'm passionate about leveraging data to 
                  drive decision-making and optimize processes.
                </p>
                
                <p className="text-justify">
                  My strengths include adapting quickly to new technologies, approaching problems 
                  from multiple perspectives, and communicating technical concepts to diverse stakeholders. 
                  I thrive in collaborative environments where innovation and strategic thinking 
                  are valued.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Personal information */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2"
          >
            <div className="bg-dark-900/70 backdrop-blur-sm rounded-3xl border border-blue-900/30 overflow-hidden shadow-xl">
              {/* Header */}
              <div className="bg-blue-700 bg-gradient-to-r from-blue-700 to-blue-600 py-5 px-6 shadow-lg">
                <h3 className="text-2xl font-bold text-white flex items-center justify-between">
                  Personal Information
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-white/70"></div>
                    <div className="w-2 h-2 rounded-full bg-white/70"></div>
                    <div className="w-2 h-2 rounded-full bg-white/70"></div>
                  </div>
                </h3>
              </div>
              
              {/* Info items with borders between them */}
              <div className="divide-y divide-blue-900/20">
                <motion.div variants={itemVariants} className="p-5 hover:bg-dark-800/50 transition-colors">
                  <h4 className="text-blue-400 font-medium mb-2">Email</h4>
                  <p className="text-white">{personalInfo.email}</p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="p-5 hover:bg-dark-800/50 transition-colors">
                  <h4 className="text-blue-400 font-medium mb-2">Location</h4>
                  <p className="text-white">{personalInfo.location}</p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="p-5 hover:bg-dark-800/50 transition-colors">
                  <h4 className="text-blue-400 font-medium mb-2">Degree</h4>
                  <p className="text-white">MS in Business Analytics and Information Management</p>
                  <p className="text-white mt-1">BE in Computer Science</p>
                </motion.div>
              </div>
              
              {/* LinkedIn button with LinkedIn logo */}
              <motion.div 
                variants={itemVariants}
                className="p-5 bg-dark-950/50"
              >
                <a 
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 py-4 px-6 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-medium transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Connect on LinkedIn</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-400 transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      </div>
    </section>
  );
};

export default About;