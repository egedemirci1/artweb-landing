'use client';

import { motion } from 'framer-motion';
import { Mail, Instagram, Heart, Shield, Cookie } from 'lucide-react';
import Image from 'next/image';
import { CONFIG } from '@/lib/config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="ArtWeb.tr Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Dijital dünyada iz bırakan, özgün web siteleri tasarlıyoruz. 
              Her müşterimizin hikayesini, vizyonunu ve ruhunu dijitale taşıyoruz.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Heart className="w-4 h-4 text-pink-500" />
              <span>Sevgiyle kodlanmıştır</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-base font-semibold text-white">
              Hızlı Linkler
            </h4>
            <div className="space-y-2">
              {[
                { label: 'Hizmetlerimiz', id: 'pricing' },
                { label: 'Portföy', id: 'portfolio' },
                { label: 'Yorumlar', id: 'testimonials' },
                { label: 'SSS', id: 'faq' },
                { label: 'İletişim', id: 'contact' },
              ].map((link) => (
                <motion.button
                  key={link.id}
                  whileHover={{ x: 5 }}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors text-left text-sm"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-base font-semibold text-white">
              İletişim
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-yellow" />
                <a 
                  href={`mailto:${CONFIG.email}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {CONFIG.email}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-primary-yellow" />
                <a 
                  href={CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  @artweb.tr
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-3">
              <p className="text-sm text-gray-500 mb-3">Sosyal Medya</p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:shadow-lg transition-shadow"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={CONFIG.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:shadow-lg transition-shadow"
                >
                  <Mail className="w-5 h-5 text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Legal Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs text-gray-400">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-1 hover:text-white transition-colors"
              >
                <Shield className="w-3 h-3" />
                <span>KVKK</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-1 hover:text-white transition-colors"
              >
                <Cookie className="w-3 h-3" />
                <span>Çerez Politikası</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="hover:text-white transition-colors"
              >
                Kullanım Şartları
              </motion.button>
            </div>

            <div className="text-xs text-gray-400">
              © 2025 ArtWeb.tr - Tüm hakları saklıdır.
            </div>
          </div>
        </motion.div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="bg-primary-yellow text-primary-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors text-sm"
          >
            ↑ Başa Dön
          </motion.button>
        </motion.div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-64 h-64 bg-primary-yellow rounded-full"
          />
        </div>
      </div>
    </footer>
  );
}
