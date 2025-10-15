'use client';

import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Mail } from 'lucide-react';
import { CONFIG } from '@/lib/config';

export default function LeadForm() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-lime-100 via-green-100 to-teal-100 relative overflow-hidden">
      {/* Rich Color Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ana katman */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-teal-200/8 via-cyan-200/6 to-blue-200/5 rounded-full blur-3xl"></div>
        
        {/* İkincil katman */}
        <div className="absolute bottom-0 right-1/4 w-88 h-88 bg-gradient-to-br from-cyan-200/6 via-blue-200/5 to-indigo-200/4 rounded-full blur-3xl"></div>
        
        {/* Üçüncü katman */}
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-to-br from-emerald-200/5 via-teal-200/4 to-cyan-200/3 rounded-full blur-3xl"></div>
        
        {/* Dördüncü katman */}
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-gradient-to-br from-blue-200/5 via-indigo-200/4 to-purple-200/3 rounded-full blur-3xl"></div>
        
        {/* Depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-lime-100/2 via-green-100/3 to-teal-100/4"></div>
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
            Bize Ulaşın
          </h2>
          <p className="text-lg text-primary-gray max-w-2xl mx-auto">
            Projeleriniz için bizimle iletişime geçin. Size en uygun çözümü birlikte bulalım.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sol Kolon - İletişim Bilgileri ve WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-heading font-bold text-primary-black mb-6">
                İletişim Bilgileri
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Instagram className="w-5 h-5 text-purple-500" />
                  <div>
                    <div className="font-semibold text-primary-black">Instagram</div>
                    <a href="https://www.instagram.com/artweb.tr" target="_blank" rel="noopener noreferrer" className="text-primary-gray hover:text-purple-500 transition-colors">
                      @artweb.tr
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-semibold text-primary-black">WhatsApp</div>
                    <a href={CONFIG.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-primary-gray hover:text-green-500 transition-colors">
                      Hemen Mesaj Gönder
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-yellow" />
                  <div>
                    <div className="font-semibold text-primary-black">E-posta</div>
                    <a href={`mailto:${CONFIG.email}`} className="text-primary-gray hover:text-primary-yellow transition-colors">
                      {CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <p className="text-sm text-purple-800">
                  <strong>💡 İpucu:</strong> En hızlı dönüş için WhatsApp üzerinden iletişime geçebilirsiniz!
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-500 text-white rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <MessageCircle className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold mb-4">
                  WhatsApp ile Hızlı İletişim
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Projeniz hakkında konuşmak için WhatsApp üzerinden 
                  hızlıca iletişime geçin.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://wa.me/905356281306?text=Merhaba,%20web%20sitesi%20hakkında%20bilgi%20almak%20istiyorum.', '_blank')}
                  className="bg-white text-green-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center space-x-2 mx-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp&apos;tan Yaz</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Sağ Kolon - Büyük Instagram Profile Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Instagram Profile Embed */}
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h3 className="text-2xl font-heading font-bold text-primary-black mb-6 text-center">
                Instagram Profilimiz
              </h3>
              
              {/* Instagram Profile Embed */}
              <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center">
                <iframe
                  src="https://www.instagram.com/artweb.tr/embed/"
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  scrolling="no"
                  className="rounded-lg"
                  title="Instagram Profile"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}