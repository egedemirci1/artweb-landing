'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Portföy', id: 'portfolio' },
    { label: 'Paketler', id: 'pricing' },
    { label: 'Yorumlar', id: 'testimonials' },
    { label: 'İletişim', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-indigo-900/95 via-purple-900/95 to-pink-900/95 backdrop-blur-md shadow-xl border-b border-white/20'
                  : 'bg-gradient-to-r from-indigo-800/80 via-purple-800/80 to-pink-800/80 backdrop-blur-sm'
              }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2"
            >
                      <Image
                        src="/logo.png"
                        alt="ArtWeb.tr Logo"
                        width={160}
                        height={60}
                        className="h-12 w-auto"
                        priority
                      />
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                          className="text-white/90 hover:text-white transition-colors font-medium"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Hemen Başlayalım
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-gradient-to-r from-indigo-900/95 via-purple-900/95 to-pink-900/95 backdrop-blur-md shadow-lg overflow-hidden"
      >
        <div className="px-4 py-2 space-y-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left py-2 text-white/90 hover:text-white transition-colors font-medium"
            >
              {item.label}
            </motion.button>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="block w-full text-center py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Hemen Başlayalım
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
