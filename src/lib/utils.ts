import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatTimeRemaining(targetDate: string): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
} {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();
  const difference = target - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true,
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    isExpired: false,
  };
}

export function getQuotaFromStorage(): { love: number; corporate: number } {
  if (typeof window === 'undefined') {
    return { love: 5, corporate: 7 };
  }

  try {
    const stored = localStorage.getItem('aw_opening_quota');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error reading quota from localStorage:', error);
  }

  return { love: 5, corporate: 7 };
}

export function updateQuotaInStorage(type: 'love' | 'corporate'): void {
  if (typeof window === 'undefined') return;

  try {
    const current = getQuotaFromStorage();
    const updated = {
      ...current,
      [type]: Math.max(0, current[type] - 1),
    };
    localStorage.setItem('aw_opening_quota', JSON.stringify(updated));
  } catch (error) {
    console.error('Error updating quota in localStorage:', error);
  }
}
