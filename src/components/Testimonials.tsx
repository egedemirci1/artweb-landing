'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Heart, Building2 } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ahmet & Elif',
    role: 'Sevgiliye Özel Site',
    avatar: '👫',
    rating: 5,
    text: 'Sevgilim için yaptırdığımız site tam bir sürpriz oldu! İlişkimizin tüm güzel anıları tek bir yerde toplandı. Şifreli mektup özelliği çok romantikti. Kesinlikle tavsiye ederim.',
    highlight: 'Romantik ve özel',
    color: 'from-pink-500 to-rose-500',
    icon: Heart,
  },
  {
    id: 2,
    name: 'Mehmet Y.',
    role: 'Kurumsal Web Sitesi',
    avatar: '👨‍💼',
    rating: 5,
    text: 'Şirketimiz için yaptırdığımız web sitesi müşterilerimizi çok etkiledi. Modern tasarım ve hızlı yükleme süreleri sayesinde satışlarımız arttı. Profesyonel yaklaşımları için teşekkürler.',
    highlight: 'Profesyonel ve etkili',
    color: 'from-blue-500 to-cyan-500',
    icon: Building2,
  },
  {
    id: 3,
    name: 'Zeynep K.',
    role: 'Sanatçı Portföy Sitesi',
    avatar: '👩‍🎨',
    rating: 5,
    text: 'Sanat eserlerimi sergilemek için yaptırdığım site tam istediğim gibiydi. Galeri sistemi çok kullanışlı, müşterilerim eserlerimi kolayca inceleyebiliyor. Çok memnunum!',
    highlight: 'Yaratıcı ve kullanışlı',
    color: 'from-purple-500 to-indigo-500',
    icon: Quote,
  },
  {
    id: 4,
    name: 'Can & Ayşe',
    role: 'Sevgiliye Özel Site',
    avatar: '💕',
    rating: 5,
    text: 'Evlilik teklifimizi web sitesi üzerinden yaptık! Site o kadar güzeldi ki, Ayşe gözyaşlarına boğuldu. Bu anıyı ömür boyu hatırlayacağız. ArtWeb.tr\'ye minnettarız.',
    highlight: 'Unutulmaz anılar',
    color: 'from-red-500 to-pink-500',
    icon: Heart,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100 relative overflow-hidden">
      {/* Rich Color Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ana katman */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-rose-200/12 via-orange-200/10 to-yellow-200/8 rounded-full blur-3xl"></div>
        
        {/* İkincil katman */}
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-br from-orange-200/10 via-yellow-200/8 to-lime-200/6 rounded-full blur-3xl"></div>
        
        {/* Üçüncü katman */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-br from-pink-200/8 via-rose-200/6 to-orange-200/5 rounded-full blur-3xl"></div>
        
        {/* Dördüncü katman */}
        <div className="absolute bottom-1/2 right-0 w-88 h-88 bg-gradient-to-br from-yellow-200/6 via-lime-200/5 to-green-200/4 rounded-full blur-3xl"></div>
        
        {/* Depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100/4 via-rose-100/5 to-orange-100/6"></div>
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
            Müşteri Yorumları
          </h2>
          <p className="text-lg text-primary-gray max-w-2xl mx-auto">
            Mutlu müşterilerimizin deneyimleri. Her proje bizim için bir başarı hikayesi.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-white rounded-2xl shadow-lg p-8 border border-gray-200 overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-primary-gray" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-5 h-5 text-primary-yellow fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-primary-gray leading-relaxed mb-6 text-lg">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-primary-black">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary-gray">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Highlight Badge */}
              <div className="absolute bottom-4 right-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`bg-gradient-to-r ${testimonial.color} text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1`}
                >
                  <testimonial.icon className="w-3 h-3" />
                  <span>{testimonial.highlight}</span>
                </motion.div>
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
                  className={`w-32 h-32 bg-gradient-to-r ${testimonial.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-primary-yellow mb-2"
            >
              100%
            </motion.div>
            <div className="text-primary-gray font-medium">Müşteri Memnuniyeti</div>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-primary-yellow mb-2"
            >
              1 Hafta
            </motion.div>
            <div className="text-primary-gray font-medium">Ortalama Teslim Süresi</div>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-primary-yellow mb-2"
            >
              24/7
            </motion.div>
            <div className="text-primary-gray font-medium">Teknik Destek</div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-yellow to-yellow-400 text-primary-black rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4">
              💬 Siz de Memnun Müşterilerimizden Biri Olun
            </h3>
            <p className="text-lg mb-6">
              Müşterilerimizin mutluluğu bizim en büyük motivasyonumuz. 
              Sizin projeniz de başarı hikayelerimizden biri olabilir.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-black">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-primary-black" />
                <span>5 Yıldız Hizmet</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-primary-black" />
                <span>Kişisel Yaklaşım</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-primary-black" />
                <span>Hızlı İletişim</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-primary-black" />
                <span>Sürekli Destek</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
