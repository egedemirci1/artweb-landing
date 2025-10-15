'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Heart, Building2, Palette } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Ahu & Yaman',
    category: 'Sevdiğinize Özel',
    description: 'Romantik bir çiftin ilişki kronolojisi, şifreli mektuplar ve özel anılar.',
    image: '/sevgiliyesite.png',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    features: ['İlişki Kronolojisi', 'Şifreli Mektuplar', 'Fotoğraf Galerisi'],
  },
  {
    id: 2,
    title: 'Erdem Prefabrik',
    category: 'Kurumsal',
    description: 'Teknoloji şirketi için profesyonel ve modern web sitesi tasarımı.',
    image: '/krumsalsite.png',
    icon: Building2,
    color: 'from-blue-500 to-cyan-500',
    features: ['Modern Tasarım', 'SEO Optimizasyonu', 'İletişim Formu'],
  },
  {
    id: 3,
    title: 'Yağmur & Berk',
    category: 'Özel Gün',
    description: 'Hayatınızın en özel gününü dijital ortamda paylaşın.',
    image: '/dügünvenisan.png',
    icon: Palette,
    color: 'from-purple-500 to-indigo-500',
    features: ['Geri Sayım', 'Fotoğraf Galerisi', 'Katılım Formu'],
  },
  {
    id: 4,
    title: 'Yeni Referanslar Yakında',
    category: 'Çok Yakında',
    description: 'Yeni projelerimiz üzerinde çalışıyoruz. Takipte kalın!',
    image: '',
    icon: Palette,
    color: 'from-gray-400 to-gray-600',
    features: ['Yeni Projeler', 'Geliştirilme Aşamasında', 'Heyecan Verici İçerikler'],
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
            Gerçek hikayeleri dijitale taşımanın heyecanını yaşıyoruz. İşte bazı müşterilerimizin hayallerini nasıl gerçeğe dönüştürdüğümüz.
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
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                {item.comingSoon ? (
                  // Blur Cam Efekti - 4. Kutu
                  <div className="w-full h-full relative backdrop-blur-3xl bg-gradient-to-br from-white/30 via-white/20 to-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 via-pink-200/20 to-rose-200/30 backdrop-blur-3xl"></div>
                    <div className="relative flex items-center justify-center h-full">
                      <div className="text-center text-gray-700">
                        <motion.div
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="mb-4"
                        >
                          <item.icon className="w-20 h-20 mx-auto text-gray-400" />
                        </motion.div>
                        <p className="text-2xl font-bold mb-2">Yeni Referanslar</p>
                        <p className="text-lg">Yakında Burada!</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Gerçek Fotoğraflar
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`bg-gradient-to-r ${item.color} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}>
                    {item.category}
                  </span>
                </div>

                {/* Hover Overlay - Sadece gerçek fotoğraflar için */}
                {!item.comingSoon && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-primary-black px-6 py-3 rounded-full font-semibold flex items-center space-x-2 shadow-xl"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Detayları Gör</span>
                    </motion.button>
                  </motion.div>
                )}
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
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                        item.comingSoon 
                          ? 'bg-gray-100 text-gray-600 border border-gray-200' 
                          : `bg-gradient-to-r ${item.color} text-white shadow-sm`
                      }`}
                    >
                      {feature}
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
              ✨ Sizin Hikayeniz Nasıl Dijitale Dönüşecek?
            </h3>
            <p className="text-lg text-gray-200 mb-6">
              Her projeyi müşterimizin hikayesi, markasının ruhu ve vizyonu ile şekillendiriyoruz. 
              Hazır şablonlar kullanmıyor, sizin için tamamen özgün tasarımlar yaratıyoruz.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Özel Tasarım
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Modern Teknoloji
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Mobil Uyumlu
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Hızlı Teslim
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
