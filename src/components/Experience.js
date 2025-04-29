import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  // Experience data from resume
  const experienceData = [
    {
      title: "Software Engineer Intern",
      company: "Alfred Lerner College of Business & Economics",
      period: "January 2025 - Present",
      location: "University of Delaware",
      responsibilities: [
        "Architected a full-stack scheduling system using JavaScript, Node.js, Express.js and PostgreSQL that manages 50+ course offerings through RESTful APIs, incorporating data validation, optimized indexing, and versioned deployments for seamless updates.",
        "Implemented an advanced scheduling algorithm using Python that enforces complex cross-program dependencies, automatically prioritizes core courses, and reduced scheduling conflicts by 45% while providing real-time anomaly detection.",
        "Created a responsive React/TypeScript frontend with secure API integration for schedule generation and conflict resolution, resulting in 65% improved planning efficiency and providing administrators with real-time cross-departmental oversight."
      ]
    },
    {
      title: "Senior Engineer – Development",
      company: "Fidelity Information Services (FIS)",
      period: "June 2022 - January 2024",
      location: "Bengaluru",
      responsibilities: [
        "Developed critical enhancements to the Advanced Commercial Banking System (ACBS) using LANSA and C#, optimizing 15+ commercial lending workflow projects while ensuring strict compliance with U.S. banking regulations and global financial standards.",
        "Orchestrated complex system integration projects by refining interface implementations and standardizing data transfer protocols, achieving 20% increased throughput and ensuring zero-loss migration between legacy and modern banking platforms.",
        "Enhanced compounding and financial calculation engines to support innovative financial instruments, minimizing computational errors by implementing automated validation routines and ensuring regulatory compliance for multi-currency transactions across global markets.",
        "Spearheaded end-to-end UAT testing and issues resolution during major system upgrades, establishing automated regression testing that increased operational uptime by 15% and substantially reduced post-deployment incidents while facilitating seamless regulatory adaptation."
      ]
    },
    {
      title: "IT Trainee",
      company: "Cognizant",
      period: "March 2022 - June 2022",
      location: "Bengaluru",
      responsibilities: [
        "Trained in full-stack development through Cognizant's early engagement program, gaining practical experience in Java programming, SQL, Spring MVC, Spring Boot, and user interface design, completing the program in the top 10% of trainees.",
        "Collaborated on web application projects and integration initiatives, acquiring hands-on expertise while analyzing 7+ internal problem statements and formulating efficient solutions in Java, SQL, and unit testing, excelling in technical assessments."
      ]
    },
    {
      title: "Data Science Intern",
      company: "Exposys Data Labs",
      period: "August 2021 - September 2021",
      location: "Bengaluru",
      responsibilities: [
        "Analyzed 4 datasets to identify crucial features, such as age, gender, and passenger class, and utilized this information to construct machine learning models, improving classification accuracy and decision-making insights.",
        "Applied various algorithms including Support Vector Machine, Random Forest, and Logistic Regression, attaining peak accuracy of 80% with Random Forest. Utilized Seaborn and Matplotlib for data visualization, enhancing analytical insights and model predictions."
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