"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import styles from "./Menu.module.scss";

interface IMenu {
  closeMenu: () => void;
}

const Menu = ({ closeMenu }: IMenu) => {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onClose = () => {
    if (ref.current) {
      ref.current.style.animation = "closeAnim 0.5s linear forwards";
      ref.current.addEventListener("animationend", () => {
        closeMenu();
      });
    }
  };

  const onRoute = (item: string) => {
    if (ref.current) {
      ref.current.style.animation = "closeAnim 0.5s linear forwards";
      ref.current.addEventListener("animationend", () => {
        closeMenu();
        router.push(`/${item}`);
      });
    }
  };

  return (
    <div className={styles.menu} ref={ref}>
      <div className={styles.close} onClick={onClose}>
        x
      </div>
      <ul>
        <li onClick={() => onRoute("")}>About</li>
        <li onClick={() => onRoute("career")}>Career</li>
        <li onClick={() => onRoute("portfolio")}>Portfolio</li>
      </ul>
    </div>
  );
};

export default Menu;
