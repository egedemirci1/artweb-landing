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
    tag: 'Sevdiğinize Özel Site',
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
      { icon: Code, text: 'SEO Optimizasyonu' },
      { icon: Building2, text: '5 Sayfa İçerik' },
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
    tag: 'Düğün Davetiyesi',
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
  const [timeRemaining, setTimeRemaining] = useState(() => 
    getTimeRemaining(cardData[0].endDate, cardData[0].id)
  );

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
    }, 4000);

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
    <div className="relative w-full px-4 sm:px-6 md:px-8 lg:max-w-6xl lg:mx-auto lg:px-0">

      {/* Card Container */}
      <div 
        className="relative h-[320px] sm:h-[340px] md:h-[380px] lg:h-[580px] xl:h-[680px] rounded-2xl overflow-hidden shadow-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={currentCard.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 bg-white rounded-2xl shadow-md p-3 sm:p-4 md:p-5 lg:p-7 xl:p-9 flex flex-col justify-between"
          >
            {/* Header - Centered */}
            <div className="text-center flex-shrink-0">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 lg:gap-2.5 mb-0.5 sm:mb-1 lg:mb-3 flex-wrap px-1">
                <div className={`p-1 sm:p-1.5 lg:p-2.5 rounded-lg ${currentCard.bgColor} flex-shrink-0`}>
                  <currentCard.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 xl:w-9 xl:h-9 text-white stroke-2" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 leading-tight">{currentCard.tag}</h3>
              </div>
              
              {/* Campaign Badge - Centered and Close to Title */}
              <div className={`${
                currentCard.id === 'love' ? 'bg-pink-600' :
                currentCard.id === 'corporate' ? 'bg-indigo-600' :
                'bg-rose-600'
              } text-white px-2 sm:px-2.5 lg:px-3.5 py-0.5 sm:py-1 lg:py-1.5 rounded-full text-center inline-flex items-center mb-0.5 sm:mb-1 lg:mb-3 max-w-full`}>
                <div className="flex items-center space-x-1 sm:space-x-1.5 lg:space-x-2 text-[10px] sm:text-xs lg:text-sm xl:text-base whitespace-nowrap">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 stroke-2 flex-shrink-0" />
                  <span className="font-semibold">
                    {timeRemaining.days}:{timeRemaining.hours}:{timeRemaining.minutes}:{timeRemaining.seconds}
                  </span>
                  <span className="font-semibold">•</span>
                  <span className="font-semibold">{currentCard.campaignText}</span>
                </div>
              </div>

              {/* Description - Between Title and Features */}
              <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-neutral-600 leading-relaxed px-1 lg:px-2 mb-1 sm:mb-1.5 lg:mb-3">
                {currentCard.description}
              </p>
            </div> 

            {/* Content Area - Centered in Remaining Space */}
            <div className="flex flex-col justify-center py-0 sm:py-0.5 lg:py-2">
              {/* Features - Modern Badge Design */}
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 lg:gap-3 xl:gap-4 lg:max-w-lg lg:mx-auto px-1">
                {currentCard.features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 + 0.15, duration: 0.3 }}
                    className={`flex items-center gap-1 sm:gap-1.5 lg:gap-2 px-2 sm:px-2.5 md:px-3 lg:px-4 xl:px-5 py-1.5 sm:py-2 md:py-2.5 lg:py-2.5 xl:py-3 rounded-full ${
                      currentCard.id === 'love' ? 'bg-pink-50 border border-pink-200 md:border-2' :
                      currentCard.id === 'corporate' ? 'bg-indigo-50 border border-indigo-200 md:border-2' :
                      'bg-rose-50 border border-rose-200 md:border-2'
                    } shadow-sm hover:shadow-md transition-all duration-300`}
                  >
                    <feature.icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 ${
                      currentCard.id === 'love' ? 'text-pink-600' :
                      currentCard.id === 'corporate' ? 'text-indigo-600' :
                      'text-rose-600'
                    } stroke-2 flex-shrink-0`} />
                    <span className={`text-sm sm:text-base md:text-lg lg:text-sm xl:text-base font-semibold ${
                      currentCard.id === 'love' ? 'text-pink-700' :
                      currentCard.id === 'corporate' ? 'text-indigo-700' :
                      'text-rose-700'
                    } whitespace-nowrap`}>{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Price & Button Section */}
            <div className="flex-shrink-0">
              {/* Price - Above Button */}
              <div className="text-center mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-4">
                <div className="flex items-center justify-center space-x-1.5 sm:space-x-2 lg:space-x-2.5 flex-wrap">
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                    {formatPrice(currentCard.priceNow)}
                  </span>
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-neutral-400 line-through">
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
                } text-white px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 xl:px-7 xl:py-4 rounded-lg font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-1.5 sm:space-x-2`}
              >
                <span className="truncate">{currentCard.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 stroke-2 flex-shrink-0" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2.5 lg:space-x-3 mt-4 lg:mt-6">
        {cardData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
            }}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 rounded-full transition-all duration-300 ${
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