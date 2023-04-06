"use client";

import { useState } from "react";
import Menu from "../menu/Menu";
import styles from "./Header.module.scss";

const Header = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const closeMenu = () => {
    setIsMenu(false);
  };

  return (
    <div className={styles.header}>
      <img
        className={styles.image}
        src="/imgs/menu.png"
        alt="menu"
        onClick={() => setIsMenu(true)}
      />
      {isMenu && <Menu closeMenu={closeMenu} />}
    </div>
  );
};

export default Header;
