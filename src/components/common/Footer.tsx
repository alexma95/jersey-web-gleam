import { Link } from "react-router-dom";
import { Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const quickLinks = [
    { name: "Study Games", path: "/games", icon: "🎮" },
    { name: "Downloads", path: "/downloads", icon: "📚" },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="text-2xl lg:text-3xl font-heading font-bold gradient-text">
                  NJSLA
                </div>
                <motion.div 
                  className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="text-xl lg:text-2xl font-heading font-medium text-gray-300 ml-2">
                Success Portal
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering New Jersey students to achieve their best on NJSLA assessments through 
              comprehensive study resources and interactive learning experiences.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={16} className="text-primary-500" />
                <span className="text-sm">prestigiousprepeducation@gmail.com</span>
              </div>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-heading font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles size={16} className="text-primary-500" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors duration-300 group"
                  >
                    <span className="text-base group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                    <span className="text-sm font-medium">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © 2024 NJSLA Study Guides. All rights reserved. | New Jersey Assessment Success Portal
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              Made with <span className="text-red-500 animate-pulse">❤️</span> for New Jersey students
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;