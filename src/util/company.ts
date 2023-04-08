export interface ICompany {
  title: string;
  date: string;
  work: string[];
  stack: string[];
  content: string[];
}

export const companies: ICompany[] = [
  {
    title: "창소프트아이앤아이",
    date: "2021.04.01 ~ 2021.09.30",
    work: ["Front-end 개발"],
    stack: ["Javascript", "React"],
    content: [
      "건축 BMI 설계 기반 B2C 개발 프로젝트 참여(React)",
      "사내 웹 앱 프론트엔드 업무 담당",
    ],
  },
  {
    title: "Dabeeo",
    date: "2021.11.01 ~ 2023.02.28",
    work: ["Front-end 개발", "전용 libaray 개발"],
    stack: ["Javascript", "Typescript", "React", "three.js"],
    content: [
      "회사 데모 사이트 개발 및 유지보수 담당(React + Typescript)",
      "WebXR navigation 웹 앱 개발 프론트담당(React)",
      "dabeeomaps library 개발 및 유지보수 담당(three.js 기반)",
      "자사 Kiosk App 개발 및 이슈 대응",
    ],
  },
];
