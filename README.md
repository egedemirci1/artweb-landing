# ArtWeb.tr Landing Page

ArtWeb.tr için satış odaklı, yüksek dönüşüm sağlayan açılış landing page'i.

## 🎯 Özellikler

- **Modern Tasarım**: Minimal ve zarif tasarım dili
- **Kampanya Odaklı**: Açılış kampanyası vurgusu
- **Geri Sayım**: Kampanya bitiş süresi sayacı
- **Kontenjan Takibi**: Kalan kontenjan göstergeleri
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Animasyonlar**: Framer Motion ile zarif mikro-animasyonlar
- **SEO Optimized**: Arama motoru optimizasyonu
- **Analytics**: Google Analytics ve Meta Pixel entegrasyonu
- **Erişilebilirlik**: WCAG standartlarına uygun

## 🚀 Teknolojiler

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **UI Components**: Radix UI + Custom Components

## 📦 Kurulum

```bash
# Projeyi klonlayın
git clone <repository-url>
cd artweb-landing

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

## 🛠️ Geliştirme

```bash
# Linting
npm run lint

# Linting ve otomatik düzeltme
npm run lint:fix

# Production build
npm run build

# Production sunucusu
npm start
```

## 📁 Proje Yapısı

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global stiller
│   ├── layout.tsx      # Ana layout
│   └── page.tsx        # Ana sayfa
├── components/         # React bileşenleri
│   ├── Navbar.tsx      # Navigasyon
│   ├── Hero.tsx        # Ana bölüm
│   ├── Benefits.tsx    # Faydalar
│   ├── Pricing.tsx     # Paketler
│   ├── Portfolio.tsx   # Portföy
│   ├── Testimonials.tsx # Yorumlar
│   ├── FAQ.tsx         # SSS
│   ├── LeadForm.tsx    # Teklif formu
│   ├── Footer.tsx      # Footer
│   ├── Countdown.tsx   # Geri sayım
│   └── Quota.tsx       # Kontenjan
├── lib/                # Utility fonksiyonları
│   ├── config.ts       # Konfigürasyon
│   └── utils.ts        # Yardımcı fonksiyonlar
└── types/              # TypeScript tip tanımları
    └── global.d.ts     # Global tipler
```

## ⚙️ Konfigürasyon

`src/lib/config.ts` dosyasından tüm ayarları yönetebilirsiniz:

- Kampanya tarihi
- Fiyatlar
- İletişim bilgileri
- SEO ayarları
- Renk paleti

## 🎨 Tasarım Sistemi

### Renkler
- **Sarı (Ana)**: #FFD84D
- **Siyah**: #111111
- **Koyu Gri**: #2B2B2B
- **Gri**: #8A8A8A
- **Beyaz**: #FFFFFF

### Fontlar
- **Başlık**: Montserrat
- **Metin**: Inter

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel
```bash
# Vercel CLI ile
vercel

# GitHub entegrasyonu ile otomatik deploy
```

### Netlify
```bash
# Netlify CLI ile
netlify deploy --prod

# Drag & drop ile build klasörü
```

## 📊 Analytics

- **Google Analytics**: GA_MEASUREMENT_ID
- **Meta Pixel**: YOUR_PIXEL_ID

Bu ID'leri `src/app/layout.tsx` dosyasında güncelleyin.

## 🔧 Özelleştirme

### Kampanya Tarihi
`src/lib/config.ts` dosyasında `targetDate` değerini güncelleyin.

### Kontenjan
`remainingSlots` değerlerini güncelleyin.

### Fiyatlar
`prices` objesindeki değerleri güncelleyin.

## 📄 Lisans

Bu proje özel kullanım için geliştirilmiştir.

## 🤝 Destek

Sorularınız için:
- **E-posta**: info.artwebtr@gmail.com
- **WhatsApp**: [WhatsApp Link](https://wa.me/905551234567)

---

**ArtWeb.tr** - Sanat gibi web siteleri 🎨