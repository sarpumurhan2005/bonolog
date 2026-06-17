import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import trTranslation from './i18n/tr.json';
import enTranslation from './i18n/en.json';
import deTranslation from './i18n/de.json';
import nlTranslation from './i18n/nl.json';

i18n.use(initReactI18next).init({
  resources: {
    tr: { translation: trTranslation },
    en: { translation: enTranslation },
    de: { translation: deTranslation },
    nl: { translation: nlTranslation }
  },
  lng: 'tr', 
  fallbackLng: 'tr',
  interpolation: { escapeValue: false }
});

export default i18n;