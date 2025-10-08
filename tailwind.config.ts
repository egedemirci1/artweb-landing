import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ana Marka Renkleri
        brand: {
          primary: '#1A1A2E',      // Koyu lacivert - Ana renk
          secondary: '#16213E',     // Orta lacivert
          accent: '#0F3460',        // Açık lacivert
          gold: '#E94560',          // Altın kırmızı - Vurgu rengi
          cream: '#F5F5DC',         // Krem - Arka plan
        },
        // Modern Gradyan Renkleri
        modern: {
          midnight: '#0D1117',      // Gece mavisi
          ocean: '#161B22',         // Okyanus mavisi
          steel: '#21262D',         // Çelik mavisi
          slate: '#30363D',         // Koyu gri
          pearl: '#F0F6FC',         // İnci beyazı
          silver: '#8B949E',        // Gümüş gri
        },
        // Accent Renkleri
        accent: {
          coral: '#FF6B6B',         // Mercan kırmızısı
          mint: '#4ECDC4',          // Nane yeşili
          lavender: '#A8E6CF',      // Lavanta yeşili
          peach: '#FFB3BA',         // Şeftali
          sky: '#87CEEB',           // Gökyüzü mavisi
          sunset: '#FF8C42',        // Günbatımı turuncu
        },
        // Gradyan Kombinasyonları
        gradient: {
          'midnight-ocean': 'from-midnight to-ocean',
          'ocean-steel': 'from-ocean to-steel',
          'steel-slate': 'from-steel to-slate',
          'coral-mint': 'from-coral to-mint',
          'lavender-peach': 'from-lavender to-peach',
          'sky-sunset': 'from-sky to-sunset',
          'brand-gold': 'from-brand-primary to-brand-gold',
          'cream-pearl': 'from-cream to-pearl',
        },
        // Primary renkler (Legacy uyumluluk için)
        primary: {
          DEFAULT: '#E94560',
          yellow: '#E94560',
          black: '#1A1A2E',
          gray: '#8B949E',
          darkGray: '#21262D',
          white: '#F0F6FC',
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 2s infinite",
        "flip": "flip 0.6s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        flip: {
          "0%": { transform: "rotateY(0)" },
          "50%": { transform: "rotateY(90deg)" },
          "100%": { transform: "rotateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
