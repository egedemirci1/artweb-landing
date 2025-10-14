'use client';

import { motion } from 'framer-motion';
import { Heart, Building2, Check, Star } from 'lucide-react';
import { CONFIG } from '@/lib/config';
import { formatPrice } from '@/lib/utils';

const packages = [
  {
    id: 'love',
    icon: Heart,
    title: 'Sevgiliye Özel Site',
    subtitle: 'Aşkınızın dijital hikayesi',
    originalPrice: CONFIG.prices.loveOriginal,
    salePrice: CONFIG.prices.loveSale,
    badge: 'Açılış Fiyatı — Sınırlı Kontenjan',
    badgeColor: 'bg-pink-500',
    features: [
      'İlişki kronolojisi ve anılar',
      'Şifreli mektup sistemi',
      'Fotoğraf albümü galerisi',
      'Özel mesaj bölümü',
      'Mobil uyumlu tasarım',
      '1 hafta teslim garantisi',
      '3 küçük revizyon hakkı',
      '1 yıl teknik destek',
    ],
    ctaText: 'Siteni Özelleştir',
    ctaColor: 'bg-pink-500 hover:bg-pink-600',
    popular: false,
  },
  {
    id: 'corporate',
    icon: Building2,
    title: 'Kurumsal Web Sitesi',
    subtitle: 'Profesyonel dijital kimlik',
    originalPrice: CONFIG.prices.corpOriginal,
    salePrice: CONFIG.prices.corpSale,
    badge: 'Kampanya',
    badgeColor: 'bg-blue-500',
    features: [
      'Modern ve profesyonel tasarım',
      'SEO temel optimizasyon',
      '5 sayfa içerik yönetimi',
      'İletişim formu entegrasyonu',
      'Sosyal medya entegrasyonu',
      'Google Analytics kurulumu',
      'SSL sertifikası dahil',
      '1 yıl hosting ve destek',
    ],
    ctaText: 'Hemen Başlayalım',
    ctaColor: 'bg-blue-500 hover:bg-blue-600',
    popular: true,
  },
];

export default function Pricing() {

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 relative overflow-hidden">
      {/* Rich Color Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ana katman */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-200/18 via-purple-200/15 to-pink-200/12 rounded-full blur-3xl"></div>
        
        {/* İkincil katman */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/15 via-pink-200/12 to-rose-200/10 rounded-full blur-3xl"></div>
        
        {/* Üçüncü katman */}
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-gradient-to-br from-blue-200/12 via-indigo-200/10 to-purple-200/8 rounded-full blur-3xl"></div>
        
        {/* Dördüncü katman */}
        <div className="absolute bottom-1/3 right-0 w-88 h-88 bg-gradient-to-br from-cyan-200/10 via-blue-200/8 to-indigo-200/6 rounded-full blur-3xl"></div>
        
        {/* Depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/6 via-purple-100/8 to-pink-100/10"></div>
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
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-primary-gray max-w-2xl mx-auto mb-6">
            Açılışa özel fiyatlarımızla hayalinizdeki web sitesine sahip olun.
          </p>
          
          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm text-yellow-800">
              <strong>* Kampanya süreci sonunda liste fiyatı uygulanacaktır.</strong>
            </p>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                pkg.popular 
                  ? 'border-primary-yellow ring-4 ring-primary-yellow/20' 
                  : 'border-gray-200'
              } overflow-hidden`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="absolute top-0 right-0 bg-primary-yellow text-primary-black px-4 py-2 rounded-bl-lg font-semibold text-sm z-10"
                >
                  <Star className="w-4 h-4 inline mr-1" />
                  En Popüler
                </motion.div>
              )}

              {/* Package Badge */}
              <div className={`${pkg.badgeColor} text-white px-4 py-2 text-center font-semibold text-sm`}>
                {pkg.badge}
              </div>

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`${
                      pkg.id === 'love' ? 'text-pink-500' : 'text-blue-500'
                    } mb-4 flex justify-center`}
                  >
                    <pkg.icon className="w-16 h-16" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-heading font-bold text-primary-black mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-primary-gray mb-6">
                    {pkg.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-primary-black">
                        {formatPrice(pkg.salePrice)}
                      </span>
                      <span className="text-lg text-primary-gray line-through">
                        {formatPrice(pkg.originalPrice)}
                      </span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      %{Math.round(((pkg.originalPrice - pkg.salePrice) / pkg.originalPrice) * 100)} İndirim!
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-primary-gray text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (pkg.id === 'love') {
                      window.open('https://www.instagram.com/artweb.tr', '_blank');
                    } else {
                      window.open('https://wa.me/905356281306?text=Merhaba,%20web%20sitesi%20hakkında%20bilgi%20almak%20istiyorum.', '_blank');
                    }
                  }}
                  className={`w-full ${pkg.ctaColor} text-white py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg relative z-10 cursor-pointer`}
                >
                  <span>{pkg.ctaText}</span>
                </motion.button>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 -z-10">
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
                  className={`w-32 h-32 ${
                    pkg.id === 'love' ? 'bg-pink-500' : 'bg-blue-500'
                  } rounded-full`}
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
          <div className="bg-gradient-to-r from-primary-yellow to-yellow-400 text-primary-black rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4">
              💫 Farklı Bir Hayaliniz Mi Var?
            </h3>
            <p className="text-lg mb-6">
              Sevgilinize özel bir sürpriz, kurumsal bir web sitesi veya düğününüz için dijital davetiye... 
              Her özel anınız ve hayaliniz için size özel çözümler üretiyoruz. Hikayenizi birlikte dijitale taşıyalım!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.instagram.com/artweb.tr', '_blank')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 shadow-md"
            >
              Projenizi Paylaşın
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
