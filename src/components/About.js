import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, GraduationCap, Briefcase, Globe } from 'lucide-react';

const About = () => {
  // Personal information
  const personalInfo = {
    name: "Manith Shashidhar",
    email: "shashidharmanith@gmail.com",
    phone: "(302) 525-1701",
    location: "Delaware, USA",
    linkedin: "www.linkedin.com/in/manith-shashidhar-9462181ba",
    openTo: "Relocation & Remote Work"
  };

  const fadeInUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { 
        delay: custom * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" className="py-20 bg-dark-950/60 relative">
      {/* Background gradient effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-600/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row gap-12"
        >
          {/* Left column - About text */}
          <motion.div 
            custom={0}
            variants={fadeInUpVariants}
            className="md:w-1/2"
          >
            <div className="inline-block mb-2">
              <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary-600/20 text-primary-400">
                About Me
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Know More <span className="text-primary-400">About Me</span>
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p>
                I'm a software engineer with a passion for developing scalable applications and working 
                with data. With 2+ years of professional experience spanning both software development 
                and data engineering, I combine technical expertise with business acumen.
              </p>
              
              <p>
                Currently pursuing my Master's in Business Analytics and Information Management at 
                the University of Delaware, I'm expanding my knowledge in advanced analytics while 
                applying my skills through practical projects.
              </p>
              
              <p>
                Throughout my career at FIS and other organizations, I've built robust software solutions, 
                optimized data workflows, and ensured seamless system integrations while maintaining high 
                standards of security and compliance.
              </p>
            </div>
          </motion.div>
          
          {/* Right column - Personal info cards */}
          <motion.div 
            custom={3}
            variants={fadeInUpVariants}
            className="md:w-1/2"
          >
            <div className="p-6 bg-dark-900/50 rounded-xl border border-dark-700 shadow-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6 text-white">Personal Information</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary-500/20 rounded-lg text-primary-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium truncate">{personalInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary-500/20 rounded-lg text-primary-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white font-medium">{personalInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary-500/20 rounded-lg text-primary-400">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Experience</p>
                    <p className="text-white font-medium">2+ Years</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary-500/20 rounded-lg text-primary-400">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Degree</p>
                    <p className="text-white font-medium">Master's in Business Analytics</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary-500/20 rounded-lg text-primary-400">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Complete in</p>
                    <p className="text-white font-medium">May 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary-500/20 rounded-lg text-primary-400">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Open to</p>
                    <p className="text-white font-medium">{personalInfo.openTo}</p>
                  </div>
                </div>
              </div>
              
              {/* LinkedIn button */}
              <div className="mt-8">
                <a 
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300 group w-full justify-center"
                >
                  <span>Connect on LinkedIn</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;