'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle } from 'lucide-react';
import HeroRotatingCard from './HeroRotatingCard';

const typingTexts = [
  { text: 'Sevdiğinize özel', emoji: '💛' },
  { text: 'Şirketine özel', emoji: '🏢' },
  { text: 'Sanat gibi tasarımlar', emoji: '🎨' },
  { text: 'Hızlı teslim garantisi', emoji: '⚡' },
];

export default function Hero() {
  const [typingText, setTypingText] = useState('');
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showEmoji, setShowEmoji] = useState(false);

  // Typing animation
  useEffect(() => {
    const currentItem = typingTexts[currentTypingIndex];
    const currentText = currentItem.text;
    
    if (isTyping) {
      if (typingText.length < currentText.length) {
        setShowEmoji(false);
        const timeout = setTimeout(() => {
          setTypingText(currentText.slice(0, typingText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        setShowEmoji(true);
        setTimeout(() => setIsTyping(false), 2500);
      }
    } else {
      setShowEmoji(false);
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 pt-8 md:pt-16 pb-8">
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

      <div className="w-full px-4 sm:px-6 md:px-8 lg:max-w-5xl lg:mx-auto lg:px-8 relative z-10">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-2 gap-4 lg:gap-12 xl:gap-16 items-stretch">
          {/* Başlık Alanı - Mobilde Ortalı */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full text-center lg:text-left space-y-6 md:space-y-8 lg:space-y-10 flex flex-col justify-center"
          >
            {/* Ana Başlık */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4 lg:space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight">
                <span className="text-gray-900">Sanat gibi</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">
                  web siteleri
                </span>
              </h1>
              
              {/* Güçlü Typing Animation */}
              <div className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold min-h-[2.5rem]">
                <span className="text-gray-800">
                  {typingText}
                  {showEmoji && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2 emoji"
                    >
                      {typingTexts[currentTypingIndex].emoji}
                    </motion.span>
                  )}
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

            {/* Güven Veren Satırlar - Sadece Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hidden lg:block space-y-3"
            >
              <div className="flex items-center space-x-3 text-lg lg:text-xl text-gray-700">
                <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-yellow-500" />
                <span className="font-medium">7 gün içinde teslim garantisi</span>
              </div>
              <div className="flex items-center space-x-3 text-lg lg:text-xl text-gray-700">
                <CheckCircle className="w-6 h-6 lg:w-7 lg:h-7 text-green-500" />
                <span className="font-medium">Responsive tasarım & SEO optimizasyonu</span>
              </div>
            </motion.div>

            {/* CTA Buttons - Sadece Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="hidden lg:flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://www.instagram.com/artweb.tr', '_blank')}
                className="group border-2 border-gray-800 bg-white text-gray-800 px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg"
              >
                <span>Siteni Özelleştir</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/905356281306?text=Merhaba,%20web%20sitesi%20hakkında%20bilgi%20almak%20istiyorum.', '_blank')}
                className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                <span>Hemen Başlayalım</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Rotating Card - Mobilde Altında ve Büyük */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full flex items-center justify-center"
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