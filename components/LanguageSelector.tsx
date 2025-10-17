import { useTranslation } from 'react-i18next';
import React from 'react';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <select
      onChange={changeLanguage}
      value={i18n.language}
      className="bg-transparent border border-gray-300 rounded px-2 py-1 text-sm"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
};

export default LanguageSelector;