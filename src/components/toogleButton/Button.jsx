import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Button.module.css";

export const Button = ({ locales }) => {
  const { i18n } = useTranslation();
  function toogleLanguage(e) {
    if (e.target.checked) {
      i18n.changeLanguage(locales[1].lng);
    } else {
      i18n.changeLanguage(locales[0].lng);
    }
  }
  return (
    <div>
      <input
        onChange={toogleLanguage}
        type="checkbox"
        className={styles.checkbox}
        id="toogle"
      />
      <label className={styles.toogle} htmlFor="toogle"></label>
    </div>
  );
};
