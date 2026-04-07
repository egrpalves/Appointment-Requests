import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en.json';
import ptTranslations from './locales/pt-PT.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  'pt-PT': {
    translation: ptTranslations,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt-PT'],
    detection: {
      order: ['sessionStorage', 'navigator'],
      caches: ['sessionStorage'],
      lookupSessionStorage: 'i18nextLng',
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
