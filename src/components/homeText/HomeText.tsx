"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import styles from "./HomeText.module.scss";

const HomeText = () => {
  const ref = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  const onSideTitle = () => {
    if (ref.current) {
      ref.current.style.opacity = "1";
    }

    if (btnRef.current) {
      btnRef.current.style.opacity = "1";
      btnRef.current.style.bottom = "40px";
    }
  };

  return (
    <div className={styles.homeText}>
      <div className={styles.title} onAnimationEnd={onSideTitle}>
        안녕하세요. Front-end 개발자 김지훈입니다.
      </div>
      <div className={styles.sideTitle} ref={ref}>
        주로 React + typescript 작업을 많이 진행해봤고 새로운 기술을 습득을 위해
        끊임없이 노력하고 있습니다.
      </div>
      <div className={styles.btns} ref={btnRef}>
        <Image src="/imgs/github.png" alt="github" width={30} height={30} />
        <Image src="/imgs/notion.png" alt="notion" width={30} height={30} />
      </div>
    </div>
  );
};

export default HomeText;
