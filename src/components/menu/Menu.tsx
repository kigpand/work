"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import styles from "./Menu.module.scss";
import Image from "next/image";

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
      <Image
        src="/imgs/close.png"
        width={25}
        height={25}
        className={styles.close}
        onClick={onClose}
        alt="close"
      ></Image>
      <ul>
        <li onClick={() => onRoute("")}>About</li>
        <li onClick={() => onRoute("career")}>Career</li>
        <li onClick={() => onRoute("portfolio")}>Portfolio</li>
      </ul>
    </div>
  );
};

export default Menu;
