import styles from "./Footer.module.css";
import { useState } from "react";
import { Links } from "../../constants";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  function handlePost() {
    const feedback = {
      email: email,
    };
    console.log(feedback);
  }
  const links = Links();
  return (
    <footer>
      <div className="container">
        <div className={styles.footer}>
          <div>
            <img
              src="https://themezinho.net/medicina/images/logo-white.png"
              alt=""
            />
            <p>Copyright © 2014 , Medicina</p>
          </div>
          <div className={styles.social}>
            <h3>{t("footer.news")}</h3>
            <p>{t("footer.join")}</p>
            <label htmlFor="mail">
              <input
                type="email"
                id="mail"
                required
                placeholder={t("placeholder.mail")}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <button onClick={handlePost}>{t("send")}</button>
          </div>
          <div className={styles.social}>
            <h3>{t("footer.nav")}</h3>
            {links.map((item) => (
              <li key={item.id}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
          </div>
          <div className={styles.social}>
            <h3>{t("footer.service")}</h3>
            {links.map((item) => (
              <li key={item.id}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
          </div>
          <div className={styles.social}>
            <h3>{t("footer.social")}</h3>
            {links.map((item) => (
              <li key={item.id}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
