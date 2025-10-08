'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle } from 'lucide-react';
import HeroRotatingCard from './HeroRotatingCard';

const typingTexts = [
  'Sevgiline özel 💛',
  'Şirketine özel 🏢',
  'Sanat gibi tasarımlar 🎨',
  'Hızlı teslim garantisi ⚡',
];

export default function Hero() {
  const [typingText, setTypingText] = useState('');
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Typing animation
  useEffect(() => {
    const currentText = typingTexts[currentTypingIndex];
    
    if (isTyping) {
      if (typingText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setTypingText(currentText.slice(0, typingText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => setIsTyping(false), 2500);
      }
    } else {
      if (typingText.length > 0) {
        const timeout = setTimeout(() => {
          setTypingText(typingText.slice(0, -1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(true);
        setCurrentTypingIndex((prev) => (prev + 1) % typingTexts.length);
      }
    }
  }, [typingText, isTyping, currentTypingIndex]);


  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 pt-16 md:pt-24 pb-8">
      {/* Brush Stroke Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Brush Stroke 1 */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -30, 20, 0],
            rotate: [0, 5, -3, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 opacity-20"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M10,50 Q30,20 50,50 T90,50"
              stroke="url(#brush1)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="brush1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Brush Stroke 2 */}
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 40, -20, 0],
            rotate: [0, -8, 4, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute top-40 right-20 w-40 h-40 opacity-15"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M20,30 Q40,60 60,30 T100,30"
              stroke="url(#brush2)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="brush2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Brush Stroke 3 */}
        <motion.div
          animate={{
            x: [0, 70, -40, 0],
            y: [0, -50, 30, 0],
            rotate: [0, 6, -2, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
          className="absolute bottom-32 left-1/4 w-36 h-36 opacity-12"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M15,70 Q35,40 55,70 T95,70"
              stroke="url(#brush3)"
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="brush3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Sol Taraf - Mesaj Alanı */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            {/* Ana Başlık */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-3 md:space-y-4"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                <span className="text-gray-900">Sanat gibi</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">
                  web siteleri
                </span>
              </h1>
              
              {/* Güçlü Typing Animation */}
              <div className="text-lg md:text-xl font-semibold min-h-[2rem]">
                <span className="text-gray-800">
                  {typingText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-1 text-yellow-500"
                  >
                    |
                  </motion.span>
                </span>
              </div>
            </motion.div>

            {/* Güven Veren Satırlar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2 text-sm md:text-base text-gray-700">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="font-medium">1 hafta içinde teslim 🚀</span>
              </div>
              <div className="flex items-center space-x-2 text-sm md:text-base text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="font-medium">Mobil uyumlu + özel tasarım</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-2 md:gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://www.instagram.com/artweb.tr', '_blank')}
                className="group border-2 border-gray-800 bg-white text-gray-800 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-gray-50 transition-all duration-300 shadow-lg"
              >
                <span>Siteni Özelleştir</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/905356281306?text=Merhaba,%20web%20sitesi%20hakkında%20bilgi%20almak%20istiyorum.', '_blank')}
                className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                <span>Hemen Başlayalım</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Sağ Taraf - Rotating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <HeroRotatingCard />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}