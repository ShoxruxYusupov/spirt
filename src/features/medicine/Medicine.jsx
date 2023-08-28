import { useTranslation } from 'react-i18next';
import { pulse } from '../../assets';
import { TovarCard } from '../../components';
import styles from './Medicine.module.css';

export const Medicine = () => {
  const {t} = useTranslation();
  return (
    <section>
      <div className="container">
        <div className={styles.medicine}>
          <h2>{t("medicine")}</h2>
          <img
            src={pulse}
            alt=""
          />
          <div className={styles.tovars}>
            <TovarCard />
            <TovarCard />
            <TovarCard />
            <TovarCard />
            <TovarCard />
            <TovarCard />
            <TovarCard />
          </div>
        </div>
      </div>
    </section>
  );
};
