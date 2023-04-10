import { ICompany } from "@/util/company";
import styles from "./CompanyItem.module.scss";

interface ICompanyItem {
  company: ICompany;
  key: string;
}

const CompanyItem = ({ company }: ICompanyItem) => {
  return (
    <div className={styles.companyItem}>
      <div className={styles.title}>
        <strong>{company.title}</strong> - {company.date}
      </div>
      <div className={styles.main}>
        <div className={styles.info}>
          <div className={styles.items}>
            <div className={styles.itemTitle}>담당 업무</div>
            <div className={styles.itemText}>
              {company.work.map((work: string) => {
                return <div key={work}>- {work}</div>;
              })}
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.itemTitle}>주요 기술</div>
            <div className={styles.itemText}>
              {company.stack.map((stack: string) => {
                return <div key={stack}>- {stack}</div>;
              })}
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>핵심 진행 업무</div>
          {company.content.map((content: string, i: number) => {
            return (
              <div className={styles.contentItem} key={i}>
                - {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompanyItem;
