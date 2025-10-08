'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Heart, Building2, Palette } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Aşkın Dijital Hikayesi',
    category: 'Sevgiliye Özel',
    description: 'Romantik bir çiftin ilişki kronolojisi, şifreli mektuplar ve özel anılar.',
    image: '/api/placeholder/600/400',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    features: ['İlişki Kronolojisi', 'Şifreli Mektuplar', 'Fotoğraf Galerisi'],
  },
  {
    id: 2,
    title: 'Modern Kurumsal Kimlik',
    category: 'Kurumsal',
    description: 'Teknoloji şirketi için profesyonel ve modern web sitesi tasarımı.',
    image: '/api/placeholder/600/400',
    icon: Building2,
    color: 'from-blue-500 to-cyan-500',
    features: ['Modern Tasarım', 'SEO Optimizasyonu', 'İletişim Formu'],
  },
  {
    id: 3,
    title: 'Sanatçı Portföy Sitesi',
    category: 'Özel Proje',
    description: 'Yerel sanatçı için kişisel portföy ve galeri sitesi.',
    image: '/api/placeholder/600/400',
    icon: Palette,
    color: 'from-purple-500 to-indigo-500',
    features: ['Galeri Sistemi', 'Eser Detayları', 'İletişim'],
  },
  {
    id: 4,
    title: 'Daha Fazla Örnek Yakında',
    category: 'Gelişiyor',
    description: 'Yeni projelerimiz yakında burada olacak. Takip etmeye devam edin!',
    image: '/api/placeholder/600/400',
    icon: Palette,
    color: 'from-gray-400 to-gray-600',
    features: ['Yakında', 'Gelişiyor', 'Çok Yakında'],
    comingSoon: true,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 relative overflow-hidden">
      {/* Rich Color Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ana katman */}
        <div className="absolute top-1/3 left-0 w-88 h-88 bg-gradient-to-br from-purple-200/15 via-pink-200/12 to-rose-200/10 rounded-full blur-3xl"></div>
        
        {/* İkincil katman */}
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-gradient-to-br from-pink-200/12 via-rose-200/10 to-orange-200/8 rounded-full blur-3xl"></div>
        
        {/* Üçüncü katman */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-indigo-200/10 via-purple-200/8 to-pink-200/6 rounded-full blur-3xl"></div>
        
        {/* Dördüncü katman */}
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-200/12 via-indigo-200/10 to-purple-200/8 rounded-full blur-3xl"></div>
        
        {/* Depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100/5 via-pink-100/6 to-rose-100/8"></div>
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-black mb-4">
            Portföyümüz
          </h2>
          <p className="text-lg text-modern-silver max-w-2xl mx-auto">
            Her proje bizim için bir sanat eseri. İşte yaratıcılığımızın birkaç örneği.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              {/* Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
                >
                  <div className="text-center text-gray-500">
                    <item.icon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm font-medium">Proje Görseli</p>
                    <p className="text-xs">Yakında yüklenecek</p>
                  </div>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`bg-gradient-to-r ${item.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {item.category}
                  </span>
                </div>

                {/* Coming Soon Overlay */}
                {item.comingSoon && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto mb-4"
                      />
                      <p className="text-lg font-semibold">Yakında</p>
                    </div>
                  </div>
                )}

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-primary-black px-6 py-3 rounded-full font-semibold flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Detayları Gör</span>
                  </motion.button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary-black mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-gray mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.05 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-primary-yellow rounded-full"></div>
                      <span className="text-sm text-primary-gray">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Background Pattern */}
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
                  className={`w-32 h-32 bg-gradient-to-r ${item.color} rounded-full`}
                />
              </div>
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
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl font-heading font-bold mb-4 text-white">
              🎨 Sizin Projeniz Nasıl Görünecek?
            </h3>
            <p className="text-lg text-gray-200 mb-6">
              Her proje benzersizdir. Sizin hikayenizi, tarzınızı ve ihtiyaçlarınızı 
              yansıtan özel bir tasarım yaratıyoruz. Hazır şablon yok, sadece sanat var.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-yellow rounded-full"></div>
                <span>Özel Tasarım</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-yellow rounded-full"></div>
                <span>Modern Teknoloji</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-yellow rounded-full"></div>
                <span>Mobil Uyumlu</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-yellow rounded-full"></div>
                <span>Hızlı Teslim</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
