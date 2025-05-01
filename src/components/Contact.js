import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  // Personal contact info
  const contactInfo = {
    email: "shashidharmanith@gmail.com",
    phone: "(302) 525-1701",
    location: "Delaware, USA",
    linkedin: "https://www.linkedin.com/in/manith-shashidhar-9462181ba/"
  };

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-primary-500/5 filter blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-secondary-500/5 filter blur-3xl"></div>
      
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
              Contact
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Get In <span className="text-primary-400">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out if you want to connect and discuss anything.
          </p>
        </motion.div>

        {/* Contact information - Now centered and wider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 h-full">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-900/30 text-primary-400 rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-900/30 text-primary-400 rounded-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                  <a 
                    href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-900/30 text-primary-400 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                  <p className="text-gray-300">{contactInfo.location}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <a 
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors w-max"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;