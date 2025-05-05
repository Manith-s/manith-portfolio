import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Github, BarChart2, ExternalLink } from 'lucide-react';

const Projects = () => {
  // Updated projects data with new names, links and descriptions
  const projectsData = [
    {
      title: "HydroYield: Smart Hydroponic Crop Yield Prediction System",
      period: "October 2021 - June 2022",
      description: "Created an IoT-integrated web application using Python, Embedded C, and JavaScript to predict crop yields with 85% accuracy using scikit learn Random Forest algorithms, leveraging real-time sensor data on environmental and soil parameters for predictive analytics.",
      technologies: ["Python", "Javascript", "IoT", "Machine Learning", "Random Forest"],
      github: "https://github.com/Manith-s/HydroYield",
      image: "hydroponic-system.jpg"
    },
    {
      title: "CryptoForecast: Advanced Bitcoin Price Prediction System",
      period: "November 2021 - December 2021",
      description: "Built a comprehensive end-to-end machine learning pipeline for Bitcoin price prediction with 74% directional accuracy. Implemented multiple models including traditional ML, deep learning, ensemble methods, and reinforcement learning approaches. Created 100+ features through advanced feature engineering and interactive visualizations.",
      technologies: ["Python", "Deep Learning", "Reinforcement Learning", "Time-Series Analysis", "Data Visualization", "Ensemble Methods"],
      github: "https://github.com/Manith-s/CryptoForecast",
      image: "bitcoin-prediction.jpg"
    },
    {
      title: "DataViz Hub: Business Intelligence & Analytics Portfolio",
      period: "January 2024 - Present",
      description: "Designed and developed interactive business intelligence dashboards using Tableau and Qlik to visualize complex datasets and provide actionable insights. Created customized visualizations for financial analytics, sales performance, market analysis, and operational KPIs that enhance data-driven decision making.",
      technologies: ["Tableau", "Qlik", "SQL", "Data Analysis", "Business Intelligence", "Dashboard Design"],
      github: "#",
      tableau: "https://public.tableau.com/app/profile/manith.shashidhar/vizzes",
      qlik: "https://jsgue17982vhpsi.us.qlikcloud.com/analytics/catalog?owned_by=you",
      image: "data-viz.jpg"
    },
    {
      title: "University Course Scheduling System",
      period: "January 2025 - Present",
      description: "Developing a full-stack scheduling system using JavaScript, Node.js, Express.js and PostgreSQL that manages course offerings through RESTful APIs. Created an advanced scheduling algorithm using Python that enforces complex dependencies and reduces conflicts.",
      technologies: ["JavaScript", "Node.js", "React", "PostgreSQL", "Python", "Algorithm Design"],
      github: "https://github.com/Manith-s/University-Scheduler-",
      image: "scheduling-system.jpg"
    }
  ];

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-20 bg-dark-950">
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
              My Projects
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Featured <span className="text-primary-400">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Applying my skills to solve real-world problems through innovative solutions.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="relative bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-600/30 transition-all h-full flex flex-col">
                {/* Project header with gradient overlay */}
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2 px-4">{project.title}</h3>
                      <div className="flex items-center justify-center text-sm text-primary-300">
                        <Calendar size={14} className="mr-1" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-dark-700 text-primary-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto flex justify-center gap-4">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                      </a>
                    )}
                    
                    {project.tableau && (
                      <a
                        href={project.tableau}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <BarChart2 size={16} />
                        <span>Tableau</span>
                      </a>
                    )}
                    
                    {project.qlik && (
                      <a
                        href={project.qlik}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Qlik</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action for more projects - Updated GitHub link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-6">
            These are just a few highlights from my portfolio. 
            I'm constantly working on new projects and enhancing my skills.
          </p>
          
          <a
            href="https://github.com/Manith-s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark-800 border border-primary-500 rounded-lg text-primary-400 hover:bg-primary-900/20 transition-all"
          >
            <Github size={18} />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;