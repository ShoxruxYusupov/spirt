import styles from './TovarCard.module.css';

export const TovarCard = () => {
  return (
    <div className={styles.tovarCard}>
      <img
        src="https://api.gopharm.uz/media/drugs-thumbnail/eb47fef0-4cc9-4b64-b26a-86abee218bba.jpg"
        alt=""
      />
      <h5>КЮПЕН таблетки 50мг</h5>
      <p>
        Лекарственные средства, информация о которых представлена на сайте,
        могут иметь противопоказания к их использованию. Перед использованием
        необходимо ознакомиться с инструкцией по применению или получить
        консультацию у специалистов
      </p>
    </div>
  );
};
