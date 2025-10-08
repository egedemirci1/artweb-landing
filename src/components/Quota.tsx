'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Building2 } from 'lucide-react';

interface QuotaProps {
  type: 'love' | 'corporate';
  onQuotaUpdate?: (type: 'love' | 'corporate') => void;
}

// Quota değerlerini global olarak sakla (component dışında)
let globalQuota = {
  love: 8,
  corporate: 10
};

export default function Quota({ type, onQuotaUpdate }: QuotaProps) {
  const [remaining, setRemaining] = useState(globalQuota[type]);

  useEffect(() => {
    // Her 30 saniyede bir quota'yı güncelle
    const updateQuota = () => {
      const currentQuota = globalQuota[type];
      
      // Eğer quota 0 veya 1'e düştüyse, yeni rastgele sayı ata
      if (currentQuota <= 1) {
        const newQuota = Math.floor(Math.random() * 4) + 7; // 7-10 arası
        globalQuota[type] = newQuota;
        setRemaining(newQuota);
      } else {
        // Rastgele azalt (her 30 saniyede %20 şansla)
        if (Math.random() < 0.2 && currentQuota > 2) {
          const newQuota = currentQuota - 1;
          globalQuota[type] = newQuota;
          setRemaining(newQuota);
        }
      }
    };

    // İlk güncelleme
    updateQuota();
    
    // Her 30 saniyede güncelle
    const interval = setInterval(updateQuota, 30000);

    return () => clearInterval(interval);
  }, [type]);

  // Quota'yı azaltma fonksiyonu (artık kullanılmıyor ama callback için tutuyoruz)
  const decreaseQuota = () => {
    const currentQuota = globalQuota[type];
    if (currentQuota > 0) {
      const newQuota = currentQuota - 1;
      globalQuota[type] = newQuota;
      setRemaining(newQuota);
      onQuotaUpdate?.(type);
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
