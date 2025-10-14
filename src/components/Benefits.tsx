'use client';

import { motion } from 'framer-motion';
import { Palette, Zap, Smartphone, Headphones } from 'lucide-react';

const benefits = [
  {
    icon: Palette,
    title: 'Özel Tasarım',
    description: 'Hazır kalıplara sığmıyoruz. Markanızın ruhunu yansıtan, size özel tasarımlarla dijital kimliğinizi baştan yaratıyoruz.',
    color: 'text-white',
    bgColor: 'bg-gradient-to-br from-pink-500 to-rose-600',
    borderColor: 'border-pink-500',
  },
  {
    icon: Zap,
    title: 'Hızlı Teslim',
    description: 'Zamanınızın değerini biliyoruz. Kaliteden ödün vermeden, projelerinizi belirlenen süre içinde eksiksiz teslim ediyoruz.',
    color: 'text-white',
    bgColor: 'bg-gradient-to-br from-yellow-500 to-orange-500',
    borderColor: 'border-yellow-500',
  },
  {
    icon: Smartphone,
    title: 'Mobil Uyumlu',
    description: 'Kullanıcılarınız nerede olursa olsun, web siteniz her ekranda kusursuz bir deneyim sunar. Responsive tasarım garantisi.',
    color: 'text-white',
    bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500',
  },
  {
    icon: Headphones,
    title: 'Destek & Revizyon',
    description: 'Projeniz tamamlandıktan sonra da yanınızdayız. Küçük güncellemeleri ücretsiz sağlıyor, sürekli destek sunuyoruz.',
    color: 'text-white',
    bgColor: 'bg-gradient-to-br from-green-500 to-emerald-500',
    borderColor: 'border-green-500',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 relative overflow-hidden">
      {/* Rich Color Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ana katman */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-br from-blue-200/20 via-indigo-200/18 to-purple-200/15 rounded-full blur-3xl"></div>
        
        {/* İkincil katman */}
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/18 via-purple-200/15 to-pink-200/12 rounded-full blur-3xl"></div>
        
        {/* Üçüncü katman */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/12 via-pink-200/10 to-rose-200/8 rounded-full blur-3xl"></div>
        
        {/* Dördüncü katman */}
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-gradient-to-br from-cyan-200/15 via-blue-200/12 to-indigo-200/10 rounded-full blur-3xl"></div>
        
        {/* Depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/8 via-indigo-100/10 to-purple-100/12"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 max-w-4xl mx-auto shadow-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Neden ArtWeb.tr?
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Biz sadece kod yazmıyoruz, dijital dünyada iz bırakan sanat eserleri yaratıyoruz. Her projeniz, sizin hikayenizi anlatan eşsiz bir başyapıt.
            </p>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`${benefit.bgColor} ${benefit.borderColor} border-2 rounded-xl p-6 text-center relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {/* Background Animation */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                initial={false}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full bg-white/20 rounded-full" />
              </motion.div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`${benefit.color} mb-4 flex justify-center`}
              >
                <benefit.icon className="w-12 h-12" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-100 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-heading font-bold mb-4 text-primary-black">
              🎯 Hedefimiz: Mükemmellik
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Bizim için hedef sadece bir web sitesi inşa etmek değil, markanız için unutulmaz dijital deneyimler yaratmaktır. Her projeyi bir sanat eseri titizliğiyle ele alır, her müşterimizin benzersiz vizyonunu dijital dünyaya taşırız.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Modern Teknolojiler
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                SEO Optimizasyonu
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Güvenlik Standartları
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Performans Optimizasyonu
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
