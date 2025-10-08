export const CONFIG = {
  targetDate: '2025-02-14T20:59:59+03:00',
  remainingSlots: { love: 5, corporate: 7 },
  whatsapp: '905551234567', // Placeholder numara
  email: 'info.artwebtr@gmail.com',
  prices: {
    loveOriginal: 12500,
    loveSale: 3500,
    corpOriginal: 25000,
    corpSale: 15000,
  },
  colors: {
    yellow: '#FFD84D',
    black: '#111111',
    gray: '#8A8A8A',
    darkGray: '#2B2B2B',
    white: '#FFFFFF',
  },
  seo: {
    title: 'ArtWeb.tr – Sanat gibi web siteleri | Açılış kampanyası',
    description:
      'Sevgiline özel sürpriz siteler & kurumsal web tasarım. Açılışa özel indirim, sınırlı kontenjan. Hemen teklif al!',
  },
  social: {
    instagram: 'https://instagram.com/artwebtr',
    whatsapp: 'https://wa.me/905551234567?text=Merhaba,%20web%20sitesi%20teklifi%20almak%20istiyorum.',
  },
} as const;
