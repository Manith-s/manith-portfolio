import React from 'react';
import { Link } from 'react-scroll';
import { Mail, Linkedin, Github, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About column */}
            <div>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                <h2 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    Manith Shashidhar
                  </span>
                </h2>
              </Link>
              
              <p className="text-gray-400 mb-6">
                Software Engineer & Data Specialist with expertise in modern programming languages, 
                database management, and building robust software solutions.
              </p>
              
              <div className="flex space-x-4">
                <a
                  href="mailto:shashidharmanith@gmail.com"
                  className="p-2 bg-dark-800 rounded-full text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/manith-shashidhar-9462181ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-dark-800 rounded-full text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-dark-800 rounded-full text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
            
            {/* Quick links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.id}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="flex items-center text-gray-400 hover:text-primary-400 transition-colors cursor-pointer group"
                    >
                      <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
              <address className="not-italic">
                <p className="text-gray-400 mb-3">Delaware, USA</p>
                <p className="text-gray-400 mb-3">
                  <a 
                    href="mailto:shashidharmanith@gmail.com"
                    className="hover:text-primary-400 transition-colors"
                  >
                    shashidharmanith@gmail.com
                  </a>
                </p>
                <p className="text-gray-400">
                  <a 
                    href="tel:+13025251701"
                    className="hover:text-primary-400 transition-colors"
                  >
                    (302) 525-1701
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 border-t border-dark-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500">
            &copy; {currentYear} Manith Shashidhar. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 md:mt-0">
            Designed with 
            <span className="mx-1 text-red-500">❤</span> 
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;