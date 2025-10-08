'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownProps {
  targetDate: string;
  onExpire?: () => void;
}

export default function Countdown({ targetDate, onExpire }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 23,
    minutes: 59,
    seconds: 59,
    isExpired: false,
  });

  // Sürekli güncellenen hedef tarih hesaplama
  const getDynamicTargetDate = () => {
    if (typeof window === 'undefined') {
      // Server-side rendering için fallback
      return new Date(Date.now() + (15 * 24 * 60 * 60 * 1000));
    }

    const now = new Date();
    const storedEndDate = localStorage.getItem('aw_countdown_end');
    
    if (storedEndDate) {
      const endDate = new Date(storedEndDate);
      const nowTime = now.getTime();
      const endTime = endDate.getTime();
      
      // Eğer süre dolmuşsa 15 gün ekle
      if (nowTime >= endTime) {
        const newEndDate = new Date(nowTime + (15 * 24 * 60 * 60 * 1000));
        localStorage.setItem('aw_countdown_end', newEndDate.toISOString());
        return newEndDate;
      }
      
      return endDate;
    } else {
      // İlk kez çalışıyorsa 15 gün ekle
      const newEndDate = new Date(now.getTime() + (15 * 24 * 60 * 60 * 1000));
      localStorage.setItem('aw_countdown_end', newEndDate.toISOString());
      return newEndDate;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        // Saniye azalt
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else if (days > 0) {
          seconds = 59;
          minutes = 59;
          hours = 23;
          days--;
        } else {
          // Süre doldu, 15 gün ekle
          days = 15;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds, isExpired: false };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Artık expired durumu göstermiyoruz, sürekli güncelleniyor

  const timeUnits = [
    { label: 'Gün', value: timeLeft.days },
    { label: 'Saat', value: timeLeft.hours },
    { label: 'Dakika', value: timeLeft.minutes },
    { label: 'Saniye', value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h3 className="text-lg font-semibold text-primary-black mb-4">
        ⏰ Kampanya Bitiş Süresi
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg p-4 shadow-lg border border-gray-100"
          >
            <motion.div
              key={unit.value}
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-primary-black mb-1"
            >
              {unit.value.toString().padStart(2, '0')}
            </motion.div>
            <div className="text-sm text-primary-gray font-medium">
              {unit.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
