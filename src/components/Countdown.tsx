'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownProps {
  targetDate: string;
  onExpire?: () => void;
}

export default function Countdown({ targetDate, onExpire }: CountdownProps) {
  // Her kart için farklı başlangıç değerleri
  const getInitialTime = () => {
    // targetDate'e göre farklı değerler döndür
    if (targetDate.includes('love') || targetDate.includes('sevgili')) {
      return { days: 8, hours: 12, minutes: 30, seconds: 45 };
    } else if (targetDate.includes('corporate') || targetDate.includes('kurumsal')) {
      return { days: 10, hours: 18, minutes: 15, seconds: 20 };
    } else {
      return { days: 14, hours: 6, minutes: 45, seconds: 10 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(() => getInitialTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
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
          // Reset to initial values
          const initial = getInitialTime();
          return { ...initial, isExpired: false };
        }
        
        return { days, hours, minutes, seconds, isExpired: false };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

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