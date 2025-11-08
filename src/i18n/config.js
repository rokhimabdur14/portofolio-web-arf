import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
import translationID from './locales/id.json';
import translationEN from './locales/en.json';

const resources = {
  id: {
    translation: translationID,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  .use(LanguageDetector) // Auto-detect user language
  .use(initReactI18next) // Pass i18n to react-i18next
  .init({
    resources,
    fallbackLng: 'id', // Default language
    lng: 'id', // Initial language
    debug: false,
    interpolation: {
      escapeValue: false, // React already escapes
    },
    detection: {
      order: ['localStorage', 'navigator'], // Check localStorage first, then browser
      caches: ['localStorage'], // Save language preference
    },
  });

export default i18n;
