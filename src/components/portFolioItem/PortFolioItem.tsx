"use client";

import { useRouter } from "next/navigation";
import styles from "./PortFolioItem.module.scss";

interface IPortFolioItem {
  item: any;
}

const PortFolioItem = ({ item }: IPortFolioItem) => {
  const router = useRouter();

  const onLink = () => {
    router.push(item.url);
  };

  return (
    <div className={styles.portFolioItem} onClick={onLink}>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.content}>{item.content}</div>
    </div>
  );
};

export default PortFolioItem;
