import PortFolioItem from "@/components/portFolioItem/PortFolioItem";
import styles from "./page.module.scss";

const PortfolioArr = [
  {
    title: "Recipe",
    content: "React + Typescript기반 요리 Recipe App",
    url: "/portfolio/recipe",
  },
  {
    title: "Pokemon 도감",
    content: "poke api를 활용한 웹앱 포켓몬 도감",
    url: "/portfolio/Pokemon",
  },
  {
    title: "cloneStargram",
    content: "NextJS 기반 인스타그램 클론 사이트",
    url: "portfolio/clonestargram",
  },
  {
    title: "중고거래",
    content: "개인 공부용 개발 중고거래 사이트",
    url: "portfolio/shopping",
  },
];

export default function Portfolio() {
  return (
    <div className={styles.portFolio}>
      {PortfolioArr.map((item: any, i: number) => {
        return <PortFolioItem item={item} key={i} />;
      })}
    </div>
  );
}
