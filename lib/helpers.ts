import readingTime from "reading-time";
import { DateTime } from "luxon";

// Okuma süresi hesaplama fonksiyonu
export const getReadingTime = (text: string) => {
  // Girdi doğrulaması yapın
  if (!text || typeof text !== 'string') {
    console.error('Invalid text input:', text); // Hata durumunda girdi değeri yazdırın
    throw new Error('Invalid text input for reading time calculation');
  }

  return readingTime(text).text;
};

// Tarih dönüştürme fonksiyonu
export const getRelativeDate = (date: string) => {
  // Tarih doğrulaması yapın
  if (!date || typeof date !== 'string' || isNaN(Date.parse(date))) {
    console.error('Invalid date input:', date); // Hata durumunda girdi değeri yazdırın
    throw new Error('Invalid date input for relative date calculation');
  }

  return DateTime.fromISO(date).toRelative();
};
