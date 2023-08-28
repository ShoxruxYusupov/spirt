import { Button } from "../toogleButton/Button";
import styles from "./Language.module.css";

export const Language = () => {
  const locales = [
    {
      lng: "ru",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png",
    },
    {
      lng: "uz",
      img: "https://www.worldatlas.com/r/w1200/img/flag/uz-flag.jpg",
    },
  ];
  return (
    <div className={styles.language}>
      <div className="container">
        <div className={styles.btns}>
          <img src={locales[0].img} alt="" />
          <Button locales={locales} />
          <img src={locales[1].img} alt="" />
        </div>
      </div>
    </div>
  );
};
