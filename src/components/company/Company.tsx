import { ICompany, companies } from "@/util/company";
import styles from "./Company.module.scss";
import CompanyItem from "../companyItem/CompanyItem";

const Company = () => {
  return (
    <div className={styles.company}>
      <div className={styles.title}>
        <div className={styles.titleItem}>Career</div>
      </div>
      {companies.map((company: ICompany) => {
        return <CompanyItem company={company} key={company.title} />;
      })}
    </div>
  );
};

export default Company;
