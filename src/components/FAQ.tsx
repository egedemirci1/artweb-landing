'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Clock, CreditCard, Globe, MessageCircle, Shield } from 'lucide-react';
import { CONFIG } from '@/lib/config';

const faqs = [
  {
    id: 1,
    question: 'Teslim süresi ne kadar?',
    answer: 'Sevgiliye özel siteler için 1 hafta, kurumsal siteler için 1-2 hafta içinde teslim ediyoruz. Acil projeler için express teslim seçeneği de mevcut.',
    icon: Clock,
  },
  {
    id: 2,
    question: 'Revize hakkım var mı?',
    answer: 'Evet! Sevgiliye özel siteler için 3 küçük revizyon, kurumsal siteler için 5 revizyon hakkınız var. Büyük değişiklikler için ek ücret alınabilir.',
    icon: MessageCircle,
  },
  {
    id: 3,
    question: 'Ödemeyi nasıl yapıyorum?',
    answer: 'Ödemeyi 2 taksitte yapabilirsiniz: %50 başlangıçta, %50 teslimde. Havale, EFT veya kredi kartı ile ödeme kabul ediyoruz.',
    icon: CreditCard,
  },
  {
    id: 4,
    question: 'Domain ve hosting sizden mi?',
    answer: 'Kurumsal paketlerde 1 yıl hosting ücretsiz. Domain ücreti ayrıca alınır. Sevgiliye özel siteler için hosting önerisi veriyoruz.',
    icon: Globe,
  },
  {
    id: 5,
    question: 'Kurumsal sitelerde SEO var mı?',
    answer: 'Evet! Temel SEO optimizasyonu dahil. Google Analytics kurulumu, meta etiketleri ve site haritası oluşturma hizmeti veriyoruz.',
    icon: Shield,
  },
  {
    id: 6,
    question: 'İçerikleri kim sağlıyor?',
    answer: 'Metinler, fotoğraflar ve diğer içerikler müşteri tarafından sağlanır. İçerik yazımı için ek hizmet sunuyoruz.',
    icon: MessageCircle,
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-orange-100 via-yellow-100 to-lime-100 relative overflow-hidden">
      {/* Rich Color Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ana katman */}
        <div className="absolute top-1/4 right-0 w-88 h-88 bg-gradient-to-br from-lime-200/10 via-green-200/8 to-emerald-200/6 rounded-full blur-3xl"></div>
        
        {/* İkincil katman */}
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-to-br from-green-200/8 via-emerald-200/6 to-teal-200/5 rounded-full blur-3xl"></div>
        
        {/* Üçüncü katman */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-yellow-200/6 via-lime-200/5 to-green-200/4 rounded-full blur-3xl"></div>
        
        {/* Dördüncü katman */}
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-emerald-200/6 via-teal-200/5 to-cyan-200/4 rounded-full blur-3xl"></div>
        
        {/* Depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/3 via-yellow-100/4 to-lime-100/5"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-black mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-lg text-primary-gray max-w-2xl mx-auto">
            Merak ettiğiniz her şey burada. Sorularınızın cevaplarını bulamazsanız bizimle iletişime geçin.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <motion.button
                whileHover={{ backgroundColor: '#f8f9fa' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleItem(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <faq.icon className="w-6 h-6 text-primary-yellow" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-black">
                    {faq.question}
                  </h3>
                </div>
                
                <motion.div
                  animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  {openItems.includes(faq.id) ? (
                    <Minus className="w-5 h-5 text-primary-gray" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary-gray" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openItems.includes(faq.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-10">
                        <p className="text-primary-gray leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-heading font-bold mb-4 text-white">
              🤔 Başka Sorularınız mı Var?
            </h3>
            <p className="text-lg text-gray-200 mb-6">
              Merak ettiğiniz her şeyi sormaktan çekinmeyin. Size en uygun çözümü 
              birlikte bulalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto shadow-lg"
              >
                Soru Sor
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(CONFIG.social.whatsapp, '_blank')}
                className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors w-full sm:w-auto"
              >
                WhatsApp'tan Yaz
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
