import React from 'react';
import { ArrowUp, Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-growzzy-dark text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <img src="/lovable-uploads/5b22c906-da6f-4a74-93b1-443537c5a5f4.png" alt="Growzzy Media Logo" className="h-12 mb-6" />
            <p className="text-gray-300 mb-6 max-w-md text-justify">A digital-first, performance-driven marketing agency that helps brands stand out using AI, connect with their audience, and achieve measurable growth in today's competitive digital landscape.</p>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/Growzzymedia" target="_blank" rel="noopener noreferrer" className="p-2 bg-growzzy-dark border border-gray-600 rounded-full text-gray-300 hover:bg-growzzy-primary hover:border-growzzy-primary hover:text-white transition-all" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/growzzy_media/" target="_blank" rel="noopener noreferrer" className="p-2 bg-growzzy-dark border border-gray-600 rounded-full text-gray-300 hover:bg-growzzy-primary hover:border-growzzy-primary hover:text-white transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/growzzy-media/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="p-2 bg-growzzy-dark border border-gray-600 rounded-full text-gray-300 hover:bg-growzzy-primary hover:border-growzzy-primary hover:text-white transition-all" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Our Work</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:growzzymedia@gmail.com" className="text-gray-300 hover:text-white transition-colors">growzzymedia@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+919259737609" className="text-gray-300 hover:text-white transition-colors">+91-9259737609</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Growzzy Media. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="mt-4 md:mt-0 bg-growzzy-primary hover:bg-growzzy-primary/80 text-white p-3 rounded-full transition-colors animate-bounce" aria-label="Scroll to top">
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>;
};
export default Footer;