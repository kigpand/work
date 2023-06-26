import styles from "../../../styles/portfolioItem.module.scss";
import PortFolioImage from "@/components/portFolioImage/PortFolioImage";

const Clonestargram = () => {
  return (
    <div className={styles.portFolioItem}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>Clonestargram</div>
          <div className={styles.miniTitle}>Instargram Clone Coding Site</div>
        </div>
        <PortFolioImage title="jigram" src="/imgs/jigram/jigram.png" />
        <div className={styles.texts}>
          <div className={styles.textTitle}>About project</div>
          <div className={styles.line}></div>
          <p className={styles.textContent}>
            Next.js 연습용 토이 프로젝트입니다.
            <br />
            스타일링은 Scss를 사용했으며 상태관리로 Zustand를 사용했습니다.
            <br />
            혼자 진행한 토이 프로젝트 중 가장 규모가 컸던 작업이었으며 UI 역시
            가장 신경을 많이 쓴 프로젝트입니다.
            <br />
            진행을 하면서 SSG, SSR, CSR의 동작 방식과 어떤 상황에서 써야하는지를
            확실하게 배울 수 있었고
            <br />
            Sanity 사용을 통해 Headless CMS의 환경에 대해 공부를 할 수
            있었습니다.
            <br />
            현재 코드의 부족함을 많이 느껴 지속적으로 리팩토링 진행 중에
            있습니다.
          </p>
        </div>
        <div className={styles.texts}>
          <div className={styles.textTitle}>Tech</div>
          <div className={styles.line}></div>
          <ul className={styles.textUl}>
            <li>HTML</li>
            <li>CSS</li>
            <li>Typescript</li>
            <li>NextJS</li>
            <li>ZuStand</li>
          </ul>
        </div>
        <div className={styles.texts}>
          <div className={styles.textTitle}>Link</div>
          <div className={styles.line}></div>
          <div className={styles.linkItem}>
            GitHub:{" "}
            <a
              href="https://github.com/kigpand/clonestargram"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/kigpand/clonestargram
            </a>
          </div>
          <div className={styles.linkItem}>
            Page:{" "}
            <a
              href="https://clonestargram-2z3dxbcae-kigpand.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              https://clonestargram-2z3dxbcae-kigpand.vercel.app/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clonestargram;
