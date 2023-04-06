import Image from "next/image";
import styles from "./HomeSlider.module.scss";

const HomeSlider = () => {
  return (
    <div className={styles.homeSlider}>
      <div className={styles.img}>
        <Image
          className={styles.image}
          src="/imgs/memotecon.png"
          alt="memotecon"
          fill
        />
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default HomeSlider;
