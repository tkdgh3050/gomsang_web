import React from "react";
import Card, { CardIconKey } from "./Card";

export default function Profile() {
  return (
    <Card iconType={CardIconKey.PROFILE} title="Profile">
      <div className="flex gap-x-72">
        <div>
          <div className="pb-2 text-2xl font-bold">
            경력 <span className="text-xl font-semibold">(총 3년 3개월)</span>
          </div>
          <div className="flex flex-col gap-4 ml-1">
            {CAREER_LIST.map((val) => (
              <div key={val.companyName} className="flex flex-col gap-1">
                <div className="flex items-baseline gap-4">
                  <div className="text-base font-semibold underline underline-offset-4">
                    {val.companyName}
                  </div>
                  <div className="text-gray-400">{val.workPeriod}</div>
                </div>
                <div className="flex flex-col gap-1">
                  {val.workList.map((work) => (
                    <div key={work} className="ml-2">
                      • {work}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <div className="pb-2 text-2xl font-bold">학력</div>
            <div className="flex flex-col gap-4 ml-1">
              {GRADUATE_LIST.map((val) => (
                <div key={val.majorName} className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-4">
                    <div className="text-base font-semibold underline underline-offset-4">
                      {val.majorName}
                    </div>
                    <div className="text-gray-400">{val.majorPeriod}</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="ml-2">• {val.majorContent}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="pb-2 text-2xl font-bold">자격증</div>
            <div className="flex flex-col gap-4 ml-1">
              {CERTIFICATE_LIST.map((val) => (
                <div key={val.certName} className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-4">
                    <div className="text-base font-semibold underline underline-offset-4">
                      {val.certName}
                    </div>
                    <div className="text-gray-400">{val.certDate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

const CAREER_LIST: {
  companyName: string;
  workPeriod: string;
  workList: string[];
}[] = [
  {
    companyName: "(주)이노룰스",
    workPeriod: "2025.01 ~ ",
    workList: ["PV 솔루션 신규 구축 FE 개발"],
  },
  {
    companyName: "주식회사 티맥스핀테크",
    workPeriod: "2023.06 ~ 2024.10",
    workList: [
      "배달서비스공제조합 구축 프로젝트 백오피스 FE 개발",
      "AI디지털교과서 활동카드 FE 개발 파견",
    ],
  },
  {
    companyName: "(주)신세계아이앤씨",
    workPeriod: "2019.09 ~ 2021.08",
    workList: [
      "신세계티비쇼핑팀 물류/WMS 시스템 담당자",
      "자사 WMS 시스템 구축 프로젝트 참여",
      "물류/WMS 백오피스 시스템 운영 및 유지보수",
    ],
  },
];

const GRADUATE_LIST: {
  majorName: string;
  majorPeriod: string;
  majorContent: string;
}[] = [
  {
    majorName: "숭실대학교 산업정보시스템공학과",
    majorPeriod: "2013.03 ~ 2019.08",
    majorContent: "학사 졸업",
  },
  {
    majorName: "고려대학교 인공지능학과",
    majorPeriod: "2021.09 ~ 2023.06",
    majorContent: "석사 중퇴",
  },
];

const CERTIFICATE_LIST: {
  certName: string;
  certDate: string;
}[] = [
  {
    certName: "투자자산운용사",
    certDate: "2024.03",
  },
  {
    certName: "정보처리기사",
    certDate: "2019.05",
  },
  {
    certName: "ADsP(데이터분석준전문가)",
    certDate: "2019.04",
  },
];
