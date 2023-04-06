import styles from "./page.module.scss";
import "../styles/globals.scss";
import HomeSlider from "@/components/homeSlider/HomeSlider";
import HomeMain from "@/components/HomeMain/HomeMain";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* <HomeSlider /> */}
      <HomeMain />
    </div>
  );
}
