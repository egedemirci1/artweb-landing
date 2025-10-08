'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Instagram } from 'lucide-react';
import { CONFIG } from '@/lib/config';

export default function FloatingButtons() {
  const whatsappNumber = CONFIG.whatsapp;
  const instagramHandle = 'artweb.tr'; // Instagram handle'ı CONFIG'e eklenebilir

  const whatsappMessage = encodeURIComponent('Merhaba! Web sitesi hakkında bilgi almak istiyorum.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const instagramUrl = `https://instagram.com/${instagramHandle}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="ml-2 text-sm font-semibold opacity-100 transition-opacity duration-300 whitespace-nowrap">
          WhatsApp
        </span>
      </motion.a>

      {/* Instagram Button */}
      <motion.a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      >
        <Instagram className="w-6 h-6" />
        <span className="ml-2 text-sm font-semibold opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Instagram
        </span>
      </motion.a>

      {/* Pulse Animation for WhatsApp */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-green-500 rounded-full opacity-20 pointer-events-none"
      />
    </div>
  );
}
