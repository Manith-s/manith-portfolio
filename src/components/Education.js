import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Award } from 'lucide-react';

const Education = () => {
  // Education data from resume
  const educationData = [
    {
      degree: "Master's in Business Analytics and Information Management",
      institution: "University of Delaware",
      period: "January 2024 - May 2025",
      gpa: "4.0/4.0",
      description: "Focusing on advanced analytics, statistical modeling, and information management systems to drive data-informed business decisions."
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Visvesvaraya Technological University",
      period: "June 2018 - July 2022",
      gpa: "",
      description: "Comprehensive study of computer science fundamentals, software development methodologies, data structures, and system design principles."
    }
  ];

  // Awards data from resume
  const awardsData = [
    "Awarded two TSStarAwards at FIS for leading successful CLS migrations and complex multi-currency deployments within enterprise banking platforms for Brown Brothers Harriman (BBH) and Texas Capital Bank, including ACBS upgrades and go-lives.",
    "Served as Vice President and Treasurer of the Lions Club at Bangalore Institute of Technology, leading impactful campus initiatives and community outreach through strategic planning and execution."
  ];

  // Framer Motion variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="education" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-800/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-800/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-2">
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary-600/20 text-primary-400">
              Education
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Academic <span className="text-primary-400">Background</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My educational journey that has equipped me with the knowledge and skills for my career.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="relative">
                {/* Glowing border effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl opacity-0 group-hover:opacity-60 transition duration-500 blur"></div>
                
                <div className="relative bg-dark-800 p-6 rounded-xl border border-dark-700 h-full flex flex-col">
                  <div className="text-primary-400 mb-4">
                    <BookOpen size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <div className="text-lg text-gray-200 mb-2">{edu.institution}</div>
                  
                  <div className="flex items-center mb-4 text-sm text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    <span>{edu.period}</span>
                  </div>
                  
                  {edu.gpa && (
                    <div className="mb-4 px-3 py-1 bg-primary-900/20 text-primary-400 rounded-lg inline-block text-sm font-medium">
                      GPA: {edu.gpa}
                    </div>
                  )}
                  
                  <p className="text-gray-300 mt-auto">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Awards & Recognition Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-primary-900/20 to-secondary-900/20 rounded-xl border border-primary-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-900/30 rounded-lg text-primary-400">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Awards & Recognition</h3>
            </div>
            
            <div className="space-y-4">
              {awardsData.map((award, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-primary-400 mt-1">•</span>
                  <p className="text-gray-300">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;