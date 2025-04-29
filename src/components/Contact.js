import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false
  });

  // Personal contact info
  const contactInfo = {
    email: "shashidharmanith@gmail.com",
    phone: "(302) 525-1701",
    location: "Delaware, USA",
    linkedin: "www.linkedin.com/in/manith-shashidhar-9462181ba"
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false });
    
    // Simulate API submission
    setTimeout(() => {
      setFormStatus({ isSubmitting: false, isSubmitted: true, isError: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);
    }, 1500);
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
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="lg:col-span-2"
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
                  <div className="p-3 bg-primary-900/30 text-primary-400 rounded-lg">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">LinkedIn</h4>
                    <a 
                      href={`https://${contactInfo.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <div className="mt-12 pt-8 border-t border-dark-700">
                <p className="text-gray-300 mb-4">
                  Let's connect and discuss how we can work together on your next project.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 h-full">
              <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>
              
              {formStatus.isSubmitted ? (
                <div className="bg-green-900/20 border border-green-700 text-green-300 p-4 rounded-lg mb-6">
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Your message has been sent successfully! I'll get back to you soon.</span>
                  </p>
                </div>
              ) : null}

              {formStatus.isError ? (
                <div className="bg-red-900/20 border border-red-700 text-red-300 p-4 rounded-lg mb-6">
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>There was an error sending your message. Please try again later.</span>
                  </p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                    placeholder="Project Discussion"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white resize-none"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 text-white font-medium transition-all ${
                      formStatus.isSubmitting
                        ? 'bg-primary-700 cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-700'
                    }`}
                  >
                    {formStatus.isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;