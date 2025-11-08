import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <motion.button
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe size={20} />
        <span className="current-lang">{currentLanguage.flag}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="language-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              className="language-dropdown"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  className={`language-option ${
                    i18n.language === lang.code ? 'active' : ''
                  }`}
                  onClick={() => changeLanguage(lang.code)}
                  whileHover={{ backgroundColor: 'rgba(78, 205, 196, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="lang-flag">{lang.flag}</span>
                  <span className="lang-name">{lang.name}</span>
                  {i18n.language === lang.code && (
                    <motion.div
                      className="active-indicator"
                      layoutId="activeLanguage"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
