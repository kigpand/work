import styles from "../../../styles/portfolioItem.module.scss";
import PortFolioImage from "@/components/portFolioImage/PortFolioImage";

const Recipe = () => {
  return (
    <div className={styles.portFolioItem}>
      <div className={styles.header}>
        <div className={styles.title}>Recipe 정리 사이트</div>
        <div className={styles.miniTitle}>요리 Recipe 사이트</div>
      </div>
      <PortFolioImage title="shopping" src="/imgs/shopping/shopping.png" />
      <div className={styles.texts}>
        <div className={styles.textTitle}>About project</div>
        <div className={styles.line}></div>
        <p className={styles.textContent}>
          css gird와 component 구조를 조금 더 구조화를 하는 연습을 하기 위해
          진행한 프로젝트입니다.
          <br />
          요리 레시피로 진행한 이유는 취미가 요리이기도 하고 언제가 될지는
          모르겠지만
          <br />
          서버까지 구축을 완료하여 저만의 작은 웹 앱을 만들어 보고 싶은 욕심도
          있습니다.
          <br />
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
            href="https://github.com/kigpand/shopping"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/kigpand/shopping
          </a>
        </div>
        <div className={styles.linkItem}>
          Page:{" "}
          <a
            href="https://kigpand.github.io/shopping/"
            target="_blank"
            rel="noreferrer"
          >
            https://kigpand.github.io/shopping/
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
