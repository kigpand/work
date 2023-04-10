import styles from "./page.module.scss";
import "../styles/globals.scss";
import HomeMain from "@/components/HomeMain/HomeMain";
import HomeInfo from "@/components/homeInfo/HomeInfo";

export default function Home() {
  return (
    <div className={styles.home}>
      <HomeInfo />
      <HomeMain />
    </div>
  );
}
