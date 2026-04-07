import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const langs = [
    {
      code: 'en',
      flag: '🇬🇧',
      name: 'English',
    },
    {
      code: 'pt-PT',
      flag: '🇵🇹',
      name: 'Português',
    },
  ];
  const currentLanguage = i18n.resolvedLanguage || i18n.language;
  const handleLanguageChange = (event) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <select
      value={currentLanguage}
      onChange={handleLanguageChange}
      className="bg-transparent border-none text-slate-600 hover:text-slate-800 transition-colors cursor-pointer focus:outline-none rounded px-2 py-1 appearance-none hover:bg-brand-600 text-2xl"
    >
      {langs.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.flag}
        </option>
      ))}
    </select>
  );
}
