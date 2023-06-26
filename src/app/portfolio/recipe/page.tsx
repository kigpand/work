import styles from "../../../styles/portfolioItem.module.scss";
import PortFolioImage from "@/components/portFolioImage/PortFolioImage";

const Recipe = () => {
  return (
    <div className={styles.portFolioItem}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>Recipe 정리 사이트</div>
          <div className={styles.miniTitle}>요리 Recipe 사이트</div>
        </div>
        <PortFolioImage title="recipe" src="/imgs/recipe/recipe.png" />
        <div className={styles.texts}>
          <div className={styles.textTitle}>About project</div>
          <div className={styles.line}></div>
          <p className={styles.textContent}>
            component 구조를 조금 더 깔끔하고 재사용성 있게 만드는 연습을 하기
            위해 진행한 프로젝트입니다.
            <br />
            최대한 custom hook 사용에 능숙하게 하기 위해 구글링이 아닌 자체
            제작만 했으며
            <br />
            렌더링 최적화를 위해 메모이제이션 함수들을 공부하고 사용했습니다.
          </p>
        </div>
        <div className={styles.texts}>
          <div className={styles.textTitle}>Tech</div>
          <div className={styles.line}></div>
          <ul className={styles.textUl}>
            <li>HTML</li>
            <li>CSS</li>
            <li>Typescript</li>
            <li>React</li>
            <li>zustand</li>
          </ul>
        </div>
        <div className={styles.texts}>
          <div className={styles.textTitle}>Link</div>
          <div className={styles.line}></div>
          <div className={styles.linkItem}>
            GitHub:{" "}
            <a
              href="https://github.com/kigpand/cook-recipe"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/kigpand/cook-recipe
            </a>
          </div>
          <div className={styles.linkItem}>
            Page:{" "}
            <a
              href="https://kigpand.github.io/cook-recipe/"
              target="_blank"
              rel="noreferrer"
            >
              https://kigpand.github.io/cook-recipe/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
