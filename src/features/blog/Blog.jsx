import { useTranslation } from "react-i18next";
import { pulse } from "../../assets";
import { NewsCard } from "../../components";
import styles from "./Blog.module.css";

export const Blog = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container">
        <div className={styles.medicine}>
          <h2 className="heading">{t("news")}</h2>
          <img src={pulse} className="headingImg" alt="" />
          <div className="news">
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </section>
  );
};
