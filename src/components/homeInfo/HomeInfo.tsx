"use client";

import Image from "next/image";
import styles from "./HomeInfo.module.scss";
import React, { useRef, useState } from "react";

const HomeInfo = () => {
  const [hover, setHover] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const onCardClick = () => {
    if (ref.current) {
      ref.current.style.animation = "cardOut 0.5s forwards";

      ref.current.addEventListener("animationend", () => {
        setIsClick(false);
      });
    }
  };

  return (
    <div className={styles.homeInfo}>
      <Image
        className={styles.infoImg}
        src={hover ? "/imgs/memotecon2.png" : "/imgs/memotecon.png"}
        width={150}
        height={150}
        alt="me"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setIsClick(true)}
      />
      <Image
        src="/imgs/click.png"
        width={25}
        height={25}
        alt="click"
        className={styles.click}
      />
      {isClick && (
        <div className={styles.card} onClick={onCardClick} ref={ref}>
          <div className={styles.name}>김지훈</div>
          <div className={styles.job}>프론트엔드</div>
          <div className={styles.line}></div>
          <div className={styles.phone}>
            <div className={styles.title}>Tel.</div> 010-7202-9508
          </div>
          <div className={styles.email}>
            <div className={styles.title}>E.</div> kigpand@gmail.com
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeInfo;
