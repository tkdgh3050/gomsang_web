import React from "react";
import Card, { CardIconKey } from "./Card";

export default function Project() {
  return (
    <Card iconType={CardIconKey.PROJECT} title="Projects & Skills">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold">회사 프로젝트</div>
          <div className="flex gap-4 mx-1">
            {COMPANY_PROJECT.map((prj) => (
              <div>
                <div className="pb-1 text-base font-semibold underline underline-offset-4">
                  {prj.projectName}
                </div>
                {prj.partList.map((part) => (
                  <div className="py-1">
                    <div className="indent-1">• {part.partName}</div>
                    <div className="indent-4">- {part.skills.join(", ")}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold">개인 프로젝트</div>
          <div className="flex mx-1 gap-14">
            {PERSONAL_PROJECT.map((prj) => (
              <div>
                <div className="pb-1 text-base font-semibold underline underline-offset-4">
                  <a
                    className="text-blue-600"
                    target="_blank"
                    href={prj.projectLink}
                  >
                    {prj.projectName}
                  </a>
                </div>
                {prj.partList.map((part) => (
                  <div className="py-1">
                    <div className="indent-1">• {part.partName}</div>
                    <div className="indent-4">- {part.skills.join(", ")}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

const COMPANY_PROJECT: {
  projectName: string;
  partList: {
    partName: string;
    skills: string[];
  }[];
}[] = [
  {
    projectName: "PVA 솔루션 개발 프로젝트",
    partList: [
      {
        partName: "Frontend",
        skills: ["React", "TypeScript", "Astro", "Tailwind"],
      },
      {
        partName: "Tools",
        skills: ["Gitlab", "Redmine", "Mattermost"],
      },
    ],
  },
  {
    projectName: "배달서비스공제조합 구축 프로젝트",
    partList: [
      {
        partName: "Frontend",
        skills: ["React", "TypeScript", "React-query", "Styled-components"],
      },
      {
        partName: "Tools",
        skills: ["Github", "Jira", "Confluence", "Notion", "Figma"],
      },
    ],
  },
  {
    projectName: "AI디지털교과서 활동카드 FE 개발",
    partList: [
      {
        partName: "Frontend",
        skills: ["React", "TypeScript", "Recoil", "Styled-components"],
      },
      {
        partName: "Tools",
        skills: ["Gitlab", "Notion", "Figma", "Discord", "Slack"],
      },
    ],
  },
];

const PERSONAL_PROJECT: {
  projectName: string;
  projectLink: string;
  partList: {
    partName: string;
    skills: string[];
  }[];
}[] = [
  {
    projectName: "[Gomsonal] - 개인소장용 홈페이지",
    projectLink: "https://github.com/tkdgh3050/gomsang_web",
    partList: [
      {
        partName: "Frontend",
        skills: ["NextJs", "TypeScript", "Tailwind"],
      },
      {
        partName: "Backend",
        skills: ["Express", "TypeScript", "MySQL"],
      },
      {
        partName: "Deploy",
        skills: ["Netlify"],
      },
    ],
  },
  {
    projectName: "[YouTIL] - Youtube 동영상 저장소",
    projectLink: "https://github.com/tkdgh3050/youTIL",
    partList: [
      {
        partName: "Frontend",
        skills: ["React", "TypeScript", "Redux", "Styled-components"],
      },
      {
        partName: "Backend",
        skills: ["Express", "TypeScript", "MySQL"],
      },
      {
        partName: "Deploy",
        skills: ["Amazon EC2", "NGINX"],
      },
    ],
  },
  {
    projectName: "[TotalOri] - 개인 캐릭터 배경화면 공유 사이트",
    projectLink: "https://github.com/tkdgh3050/totalori_blog",
    partList: [
      {
        partName: "Frontend",
        skills: ["HTML", "CSS", "JavaScript"],
      },
      {
        partName: "Backend",
        skills: ["Firebase"],
      },
      {
        partName: "Deploy",
        skills: ["Netlify"],
      },
    ],
  },
];
