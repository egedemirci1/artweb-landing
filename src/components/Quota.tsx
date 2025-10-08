'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Building2 } from 'lucide-react';

interface QuotaProps {
  type: 'love' | 'corporate';
  onQuotaUpdate?: (type: 'love' | 'corporate') => void;
}

export default function Quota({ type, onQuotaUpdate }: QuotaProps) {
  const [remaining, setRemaining] = useState(type === 'love' ? 8 : 10);

  useEffect(() => {
    // Client-side rendering kontrolü
    if (typeof window === 'undefined') return;

    const getQuotaFromStorage = () => {
      try {
        const stored = localStorage.getItem('aw_opening_quota');
        if (stored) {
          const quota = JSON.parse(stored);
          let currentQuota = quota[type] || (type === 'love' ? 8 : 10);
          
          // Eğer quota 0 veya 1'e düştüyse, 7-10 arası rastgele sayı ata
          if (currentQuota <= 1) {
            const newQuota = type === 'love' 
              ? Math.floor(Math.random() * 4) + 7 // 7-10 arası
              : Math.floor(Math.random() * 4) + 7; // 7-10 arası
            
            // Yeni quota'yi localStorage'a kaydet
            const updatedQuota = { ...quota, [type]: newQuota };
            localStorage.setItem('aw_opening_quota', JSON.stringify(updatedQuota));
            return newQuota;
          }
          
          return currentQuota;
        }
        
        // İlk kez çalışıyorsa başlangıç değeri ata
        const initialQuota = type === 'love' ? 8 : 10;
        const initialData = { love: 8, corporate: 10 };
        localStorage.setItem('aw_opening_quota', JSON.stringify(initialData));
        return initialQuota;
      } catch (error) {
        console.error('Error reading quota from localStorage:', error);
        return type === 'love' ? 8 : 10;
      }
    };

    // Hemen hesapla
    setRemaining(getQuotaFromStorage());
    
    // 1 saniye sonra tekrar hesapla (localStorage hazır olması için)
    const timer = setTimeout(() => {
      setRemaining(getQuotaFromStorage());
    }, 1000);

    return () => clearTimeout(timer);
  }, [type]);

  // Quota'yı azaltma fonksiyonu
  const decreaseQuota = () => {
    try {
      const stored = localStorage.getItem('aw_opening_quota');
      if (stored) {
        const quota = JSON.parse(stored);
        let currentQuota = quota[type] || 0;
        
        if (currentQuota > 0) {
          const newQuota = currentQuota - 1;
          
          // Eğer 0'a düştüyse, yeni rastgele sayı ata
          const finalQuota = newQuota <= 0 
            ? (type === 'love' ? Math.floor(Math.random() * 4) + 7 : Math.floor(Math.random() * 4) + 7)
            : newQuota;
          
          const updatedQuota = { ...quota, [type]: finalQuota };
          localStorage.setItem('aw_opening_quota', JSON.stringify(updatedQuota));
          setRemaining(finalQuota);
          onQuotaUpdate?.(type);
        }
      }
    } catch (error) {
      console.error('Error updating quota:', error);
    }
  };


  const isLowStock = remaining <= 2;
  const isOutOfStock = remaining === 0;

  const config = {
    love: {
      icon: Heart,
      label: 'Sevgiliye Özel Site',
      color: 'text-pink-500',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
    },
    corporate: {
      icon: Building2,
      label: 'Kurumsal Web Sitesi',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
  };

  const { icon: Icon, label, color, bgColor, borderColor } = config[type];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`${bgColor} ${borderColor} border rounded-lg p-4 relative overflow-hidden`}
    >
      {/* Stock indicator */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Icon className={`w-5 h-5 ${color}`} />
          <span className="font-medium text-primary-black">{label}</span>
        </div>
        
        {isOutOfStock ? (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold"
          >
            Tükendi
          </motion.span>
        ) : (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              isLowStock
                ? 'bg-orange-500 text-white'
                : 'bg-green-500 text-white'
            }`}
          >
            {remaining} Kaldı
          </motion.span>
        )}
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(remaining / (type === 'love' ? 10 : 10)) * 100}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-2 rounded-full ${
            isOutOfStock
              ? 'bg-red-500'
              : isLowStock
              ? 'bg-orange-500'
              : 'bg-green-500'
          }`}
        />
      </div>

      {/* Urgency message */}
      {isLowStock && !isOutOfStock && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-orange-600 font-medium"
        >
          ⚠️ Son {remaining} kontenjan! Hemen başvurun.
        </motion.p>
      )}

      {isOutOfStock && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-red-600 font-medium"
        >
          😔 Bu paket için kontenjan doldu. Diğer paketlerimizi inceleyin.
        </motion.p>
      )}

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-32 h-32 bg-primary-yellow rounded-full"
        />
      </div>
    </motion.div>
  );
}
