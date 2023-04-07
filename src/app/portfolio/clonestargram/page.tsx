import styles from "../../../styles/portfolioItem.module.scss";
import PortFolioImage from "@/components/portFolioImage/PortFolioImage";

const Clonestargram = () => {
  return (
    <div className={styles.portFolioItem}>
      <div className={styles.header}>
        <div className={styles.title}>Clonestargram</div>
        <div className={styles.miniTitle}>Instargram Clone Coding Site</div>
      </div>
      <PortFolioImage title="jigram" src="/imgs/jigram/jigram.png" />
      <div className={styles.texts}>
        <div className={styles.textTitle}>About project</div>
        <div className={styles.line}></div>
        <p className={styles.textContent}>
          Shopping 사이트를 구현하면서 제대로된 DB 사용과 server 통신을 제대로
          해보고 싶어
          <br />
          가장 적절한 예시가 인스타그램이라 생각해 시도하게 됬습니다.
          <br />
          NodeJs와 MySQL을 사용해 처음으로 서버통신을 구현을 해봤고 미숙하지만
          배포까지 했습니다.
          <br />
          또한 Login 작업을 하면서 쿠키와 세션의 개념과 사용 용도를 공부할 수
          있었습니다.
          <br />
          상태관리는 Zustand로 처리했습니다.
          <br />
          많이 미숙하지만 NextJs를 사용해보면서 SSR에 대해서 공부를 하게 되었고
          그에 대한 필요성을 확실히 느꼈습니다.
          <br />
          현재는 이슈 발생으로 인해 호스팅 중단 중에 있습니다.
        </p>
      </div>
      <div className={styles.texts}>
        <div className={styles.textTitle}>Tech</div>
        <div className={styles.line}></div>
        <ul className={styles.textUl}>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>NextJS</li>
          <li>ZuStand</li>
          <li>NodeJS</li>
          <li>MySQL</li>
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
          현재 Clonestargram은 호스팅 중단중입니다...
        </div>
      </div>
    </div>
  );
};

export default Clonestargram;
