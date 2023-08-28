import { useState } from "react";
import { useTranslation } from "react-i18next";
import { List } from "../../assets";
import styles from "./Form.module.css";

export const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  function handlePost(e) {
    e.preventDefault();
    const feedback = {
      name: name,
      phone_number: number,
      email: email,
    };
    console.log(feedback);
  }
  return (
    <form onSubmit={handlePost}>
      <div className="container">
        <div className={styles.form}>
          <img src={List} className={styles.List} alt="" />
          <div className={styles.data}>
            <label htmlFor="name">
              <span>{t("form.name")}</span>
              <input
                type="text"
                id="name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="number">
              <span>{t("form.number")}</span>
              <input
                type="number"
                id="number"
                required
                onChange={(e) => setNumber(e.target.value)}
              />
            </label>
            <label htmlFor="mail">
              <span>E-mail</span>
              <input
                type="email"
                id="mail"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <button onClick={handlePost}>{t("send")}</button>
        </div>
      </div>
    </form>
  );
};
