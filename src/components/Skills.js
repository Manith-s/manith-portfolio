import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Terminal, Server, Monitor } from 'lucide-react';

const Skills = () => {
  // Skills data from resume
  const skillsData = [
    {
      category: "Programming",
      icon: <Code size={24} />,
      skills: ["Java", "Python", "C++", "C#", "JavaScript", "TypeScript", "R", "SAS", "LANSA (RDML)"],
      color: "from-blue-500 to-blue-700"
    },
    {
      category: "Web Development",
      icon: <Monitor size={24} />,
      skills: ["React", "Node.js", "Express.js", ".NET", "RESTful APIs", "Sequelize", "Visual LANSA"],
      color: "from-green-500 to-green-700"
    },
    {
      category: "Databases",
      icon: <Database size={24} />,
      skills: ["MySQL", "PostgreSQL", "Oracle", "SQLite", "IBM DB2/AS400"],
      color: "from-yellow-500 to-yellow-700"
    },
    {
      category: "Data & Analytics",
      icon: <Terminal size={24} />,
      skills: ["Tableau", "Power BI", "Qlik", "Alteryx", "Excel (VBA)", "OR-Tools"],
      color: "from-purple-500 to-purple-700"
    },
    {
      category: "Tools & Platforms",
      icon: <Server size={24} />,
      skills: ["Git", "Postman", "Visual Studio", "JIRA", "Linux/Unix", "Agile (Scrum)"],
      color: "from-red-500 to-red-700"
    }
  ];

  // Framer Motion variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
          className="text-center mb-16"
        >
          <div className="inline-block mb-2">
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary-600/20 text-primary-400">
              My Skills
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Technical <span className="text-primary-400">Expertise</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A diverse toolkit of languages, frameworks, and platforms that enable me to build comprehensive solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-dark-800 p-6 rounded-xl h-full border border-dark-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-sm transition-colors hover:bg-primary-900/40 hover:text-primary-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional skills highlight */}
        <motion.div
          variants={cardVariants}
          className="mt-12 p-6 bg-gradient-to-r from-primary-900/20 to-secondary-900/20 rounded-xl border border-primary-900/30 shadow-lg"
        >
          <h3 className="text-xl font-bold mb-4 text-primary-400">Additional Proficiencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <div className="text-primary-400 mt-1">•</div>
              <p className="text-gray-300">
                <strong className="text-white">CI/CD Pipelines:</strong> Experience with continuous integration and deployment workflows
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-primary-400 mt-1">•</div>
              <p className="text-gray-300">
                <strong className="text-white">Test-Driven Development:</strong> Proficient in writing and maintaining test suites
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-primary-400 mt-1">•</div>
              <p className="text-gray-300">
                <strong className="text-white">Data Visualization:</strong> Creating insightful dashboards and reports
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-primary-400 mt-1">•</div>
              <p className="text-gray-300">
                <strong className="text-white">System Integration:</strong> Connecting disparate systems and ensuring data consistency
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;