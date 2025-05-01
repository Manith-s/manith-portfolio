import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  // Experience data from resume with simplified bullet points
  const experienceData = [
    {
      title: "Software Engineer Intern",
      company: "Alfred Lerner College of Business & Economics",
      period: "January 2025 - Present",
      location: "University of Delaware",
      responsibilities: [
        "Architecting a full-stack scheduling system using JavaScript, Node.js, Express.js and PostgreSQL that manages course offerings through RESTful APIs, while implementing an advanced scheduling algorithm that reduces conflicts and improves planning efficiency."
      ]
    },
    {
      title: "Senior Engineer – Development",
      company: "Fidelity Information Services (FIS)",
      period: "June 2022 - January 2024",
      location: "Bengaluru",
      responsibilities: [
        "Developed critical enhancements to the Advanced Commercial Banking System using LANSA and C#, optimizing commercial lending workflow projects while ensuring compliance with banking regulations and implementing automated validation routines for financial calculations."
      ]
    },
    {
      title: "IT Trainee",
      company: "Cognizant",
      period: "March 2022 - June 2022",
      location: "Bengaluru",
      responsibilities: [
        "Trained in full-stack development, gaining practical experience in Java programming, SQL, Spring frameworks, and UI design while collaborating on web application projects and integration initiatives."
      ]
    },
    {
      title: "Data Science Intern",
      company: "Exposys Data Labs",
      period: "August 2021 - September 2021",
      location: "Bengaluru",
      responsibilities: [
        "Analyzed datasets to identify crucial features and constructed machine learning models using algorithms like Support Vector Machine, Random Forest, and Logistic Regression, achieving 80% accuracy while enhancing analytical insights through data visualization."
      ]
    }
  ];

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="experience" className="py-20 bg-dark-950 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-600/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary-600/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block mb-2">
                <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary-600/20 text-primary-400">
                  Experience
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Work <span className="text-primary-400">Experience</span>
              </h2>
              <p className="text-gray-300">
                Professional journey spanning multiple organizations and roles in software development and data engineering.
              </p>
            </motion.div>
          </div>

          <div className="md:w-2/3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="relative pl-8 border-l-2 border-dark-700 space-y-12"
            >
              {experienceData.map((job, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline circle */}
                  <div className="absolute -left-[41px] p-2 rounded-full bg-dark-950 border-4 border-dark-700">
                    <Briefcase size={16} className="text-primary-400" />
                  </div>

                  <div className="bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-dark-700 hover:border-primary-700/30 transition-all shadow-lg hover:shadow-primary-900/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      <div className="flex items-center text-primary-400 text-sm font-medium">
                        <Calendar size={14} className="mr-1" />
                        <span>{job.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center mb-6">
                      <div className="text-lg text-gray-200">{job.company}</div>
                      <span className="mx-2 text-gray-500">•</span>
                      <div className="text-gray-400">{job.location}</div>
                    </div>

                    <ul className="space-y-3">
                      {job.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-primary-400 mt-1.5 shrink-0">•</span>
                          <p className="text-gray-300">{responsibility}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;