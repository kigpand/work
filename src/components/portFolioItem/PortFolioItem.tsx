import styles from "./PortFolioItem.module.scss";

interface IPortFolioItem {
  item: any;
}

const PortFolioItem = ({ item }: IPortFolioItem) => {
  return (
    <div className={styles.portFolioItem}>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.content}>{item.content}</div>
    </div>
  );
};

export default PortFolioItem;
