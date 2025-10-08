'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  ArrowRight,
  Heart,
  Building2,
  Calendar,
  Image,
  Users,
  Sparkles,
  Code,
  Monitor,
  Search,
  Globe,
  Palette,
  Camera,
  Smartphone
} from 'lucide-react';

const cardData = [
  {
    id: 'love',
    tag: 'Sevgiliye Özel Site',
    description: 'İlişkinizi unutulmaz kılacak kişisel web sitesi: özel mektuplar, fotoğraf albümleri ve animasyonlarla dolu.',
    icon: Heart,
    priceNow: 3500,
    priceOld: 12500,
    features: [
      { icon: Heart, text: 'İlişki Kronolojisi' },
      { icon: Palette, text: 'Şifreli Mektuplar' },
      { icon: Smartphone, text: 'Fotoğraf Galerisi' },
    ],
    ctaText: 'Hemen Başlayalım 💕',
    bgColor: 'bg-pink-600',
    accentColor: 'pink-600',
    endDate: '2025-10-05T23:59:59+03:00',
    slotsLeft: 2,
    campaignText: 'Son 2 kişi!',
  },
  {
    id: 'corporate',
    tag: 'Kurumsal Web Sitesi',
    description: 'Firmanızı online dünyada güçlü gösteren, hızlı ve SEO uyumlu modern tasarımlar.',
    icon: Building2,
    priceNow: 15000,
    priceOld: 25000,
    features: [
      { icon: Code, text: 'SEO + Performans' },
      { icon: Building2, text: '5 Sayfa' },
      { icon: Clock, text: '1 Yıl Destek' },
    ],
    ctaText: 'Hemen Başlayalım 🚀',
    bgColor: 'bg-indigo-600',
    accentColor: 'indigo-600',
    endDate: '2025-10-07T23:59:59+03:00',
    slotsLeft: 3,
    campaignText: 'Son 3 kişi!',
  },
  {
    id: 'wedding',
    tag: 'Düğün & Nişan Davetiyesi',
    description: 'Davetiyeler, geri sayım ve fotoğraf galerisiyle etkinliğinizi şık bir şekilde paylaşın.',
    icon: Calendar,
    priceNow: 4500,
    priceOld: 9000,
    features: [
      { icon: Clock, text: 'Geri Sayım + Harita' },
      { icon: Camera, text: 'Foto/Video Galeri' },
      { icon: Users, text: 'Katılım Formu (RSVP)' },
    ],
    ctaText: 'Davetiyeni Hazırla',
    bgColor: 'bg-rose-600',
    accentColor: 'rose-600',
    endDate: '2025-10-09T23:59:59+03:00',
    slotsLeft: 4,
    campaignText: 'Son 4 kişi!',
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const getTimeRemaining = (endDate: string, cardId: string) => {
  // Her kart için farklı sabit değerler
  if (cardId === 'love') {
    return {
      days: '08',
      hours: '12',
      minutes: '30',
      seconds: '45',
      total: 1000000
    };
  } else if (cardId === 'corporate') {
    return {
      days: '10',
      hours: '18',
      minutes: '15',
      seconds: '20',
      total: 1000000
    };
  } else {
    return {
      days: '14',
      hours: '06',
      minutes: '45',
      seconds: '10',
      total: 1000000
    };
  }
};

export default function HeroRotatingCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState({
    days: '00',
    hours: '00', 
    minutes: '00',
    seconds: '00',
    total: 0
  });

  // Real-time countdown
  useEffect(() => {
    // Set initial value immediately
    setTimeRemaining(getTimeRemaining(cardData[currentIndex].endDate, cardData[currentIndex].id));
    
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(cardData[currentIndex].endDate, cardData[currentIndex].id));
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentCard = cardData[currentIndex];

  return (
    <div className="relative w-full max-w-md mx-auto">

      {/* Card Container */}
      <div 
        className="relative h-[500px] rounded-2xl overflow-hidden shadow-md"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 bg-white rounded-2xl shadow-md p-6 sm:p-7 flex flex-col"
          >
            {/* Header - Centered */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <div className={`p-2 rounded-lg ${currentCard.bgColor}`}>
                  <currentCard.icon className="w-6 h-6 text-white stroke-2" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{currentCard.tag}</h3>
              </div>
              
              {/* Campaign Badge - Centered and Close to Title */}
              <div className={`${
                currentCard.id === 'love' ? 'bg-pink-600' :
                currentCard.id === 'corporate' ? 'bg-indigo-600' :
                'bg-rose-600'
              } text-white px-3 py-1 rounded-full text-center inline-block mb-4`}>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="w-4 h-4 stroke-2" />
                  <span className="font-semibold">
                    {timeRemaining.days}:{timeRemaining.hours}:{timeRemaining.minutes}:{timeRemaining.seconds}
                  </span>
                  <span className="font-semibold">•</span>
                  <span className="font-semibold">{currentCard.campaignText}</span>
                </div>
              </div>

              {/* Description - Between Title and Features */}
              <p className="text-sm text-neutral-600 leading-relaxed px-4">
                {currentCard.description}
              </p>
            </div>

            {/* Content Area - Centered in Remaining Space */}
            <div className="flex-1 flex flex-col justify-center">
              {/* Features - 3 Items - Larger Text - Group Centered, Items Left Aligned */}
              <div className="space-y-3 flex flex-col items-center">
                {currentCard.features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                    className="flex items-center gap-3 text-base text-neutral-700"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <feature.icon className={`w-5 h-5 ${
                        currentCard.id === 'love' ? 'text-pink-600' :
                        currentCard.id === 'corporate' ? 'text-indigo-600' :
                        'text-rose-600'
                      } stroke-2`} />
                    </div>
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Price - Above Button */}
            <div className="text-center mb-4">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-4xl font-bold text-gray-900">
                  {formatPrice(currentCard.priceNow)}
                </span>
                <span className="text-lg text-neutral-400 line-through">
                  {formatPrice(currentCard.priceOld)}
                </span>
              </div>
            </div>

            {/* CTA Button - Full Width */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
              className={`w-full ${
                currentCard.id === 'love' ? 'bg-pink-600 hover:bg-pink-700' :
                currentCard.id === 'corporate' ? 'bg-indigo-600 hover:bg-indigo-700' :
                'bg-rose-600 hover:bg-rose-700'
              } text-white px-6 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
            >
              <span>{currentCard.ctaText}</span>
              <ArrowRight className="w-5 h-5 stroke-2" />
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {cardData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gray-800 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Kart ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}