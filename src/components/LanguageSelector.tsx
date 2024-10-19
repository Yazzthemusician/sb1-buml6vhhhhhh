import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, setLanguage }) => {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500" id="language-menu" aria-expanded="true" aria-haspopup="true">
          <Globe className="mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
          {language.toUpperCase()}
        </button>
      </div>

      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="language-menu">
        <div className="py-1" role="none">
          {Object.keys(languageNames).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`${
                language === lang ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              } block px-4 py-2 text-sm w-full text-left hover:bg-gray-100`}
              role="menuitem"
            >
              {languageNames[lang]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const languageNames: { [key: string]: string } = {
  es: "Español",
  en: "English",
  no: "Norsk",
  so: "Soomaali",
  th: "ไทย",
  lt: "Lietuvių",
  fr: "Français",
  uk: "Українська",
  ku: "Kurdî",
  tr: "Türkçe",
  ar: "العربية",
};

export default LanguageSelector;