"use client";

import HomeText from "../homeText/HomeText";
import styles from "./HomeMain.module.scss";

const HomeMain = () => {
  return (
    <div className={styles.homeMain}>
      <HomeText />
    </div>
  );
};

export default HomeMain;
