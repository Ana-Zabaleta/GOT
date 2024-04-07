// eslint-disable-next-line no-unused-vars

import React from "react";
import { useTranslation } from "react-i18next";
import "./Idiomas.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="translate-buttons">
      <button
        className="english-button"
        onClick={() => changeLanguage("en")}
      ></button>
      <button
        className="spanish-button"
        onClick={() => changeLanguage("es")}
      ></button>
    </div>
  );
};

export default LanguageSwitcher;
