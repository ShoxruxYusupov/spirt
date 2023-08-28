import { useState } from "react";
import styles from "./Contact.module.css";
import GetMap from "../../components/map/MAP";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState();
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");

  const { t } = useTranslation();

  function handlePost(e) {
    e.preventDefault();
    const feedback = {
      name: name,
      surname: surname,
      phone_number: number,
      email: email,
      reason: reason,
      message: message,
    };
    console.log(feedback);
  }
  return (
    <main>
      <div className={styles.title}>
        <div className="container">
          <h1>{t("contact.title")}</h1>
        </div>
      </div>
      <div className="container">
        <div className={styles.contact}>
          <form onSubmit={handlePost} className={styles.contactForm}>
            <h2>{t("contact.form")}</h2>
            <p>{t("contact.text")}</p>
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                required
                placeholder={t("placeholder.name")}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="surname">
              <input
                type="text"
                id="surname"
                required
                placeholder={t("placeholder.surname")}
                onChange={(e) => setSurname(e.target.value)}
              />
            </label>
            <label htmlFor="number">
              <input
                type="number"
                id="number"
                required
                placeholder={t("placeholder.phone")}
                onChange={(e) => setNumber(e.target.value)}
              />
            </label>
            <label htmlFor="mail">
              <input
                type="email"
                id="mail"
                required
                placeholder={t("placeholder.mail")}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="reason">
              <input
                type="text"
                id="reason"
                className={styles.reason}
                required
                placeholder={t("placeholder.reason")}
                onChange={(e) => setReason(e.target.value)}
              />
            </label>
            <textarea
              placeholder={t("placeholder.message")}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onSubmit={handlePost}>{t("send")}</button>
          </form>
          <div className={styles.headOffice}>
            <h2>{t("contact.office")}</h2>
            <h4>{t("contact.location")}</h4>
            <GetMap />
          </div>
        </div>
      </div>
    </main>
  );
};
