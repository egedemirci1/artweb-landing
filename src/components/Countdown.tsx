'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownProps {
  targetDate: string;
  onExpire?: () => void;
}

export default function Countdown({ targetDate, onExpire }: CountdownProps) {
  // Sabit başlangıç değerleri
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 12,
    minutes: 35,
    seconds: 42,
    isExpired: false,
  });

  useEffect(() => {
    // 2 saniye sonra başla (sayfa yüklenmesini bekle)
    const startTimer = setTimeout(() => {
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
            // Süre doldu, yeni değerler ata
            days = Math.floor(Math.random() * 5) + 12; // 12-16 gün
            hours = Math.floor(Math.random() * 24); // 0-23 saat
            minutes = Math.floor(Math.random() * 60); // 0-59 dakika
            seconds = Math.floor(Math.random() * 60); // 0-59 saniye
          }
          
          return { days, hours, minutes, seconds, isExpired: false };
        });
      }, 1000);

      return () => clearInterval(timer);
    }, 2000);

    return () => clearTimeout(startTimer);
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
