import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="IMPACTZ Logo" 
                className="h-10 mr-3"
              />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent mb-4">
              IMPACTZ
            </h3>
            <p className="text-gray-400 mb-4">
              Making life better with technology. We build cutting-edge tech solutions that improve lives,
              push innovation and create new possibilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-brand-blue transition-colors p-2 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-brand-blue transition-colors p-2 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-brand-blue transition-colors p-2 rounded-full">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-brand-blue transition-colors p-2 rounded-full">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Mobile Applications
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Software Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Custom Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Innovation Consulting
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-2" /> About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <p>123 Innovation Drive</p>
                <p>Tech City, TC 12345</p>
              </li>
              <li>
                <p>Phone: (123) 456-7890</p>
              </li>
              <li>
                <p>Email: contact@impactz.com</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} IMPACTZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
