import Icon, { IconType } from "@/components/Icon";
import Image from "next/image";
import { EmailIcon, CodeIcon, PhoneIcon, PortfolioIcon } from "@/assets";
import Card, { CardIconKey } from "./Card";
import Profile from "./Profile";

export default function Resume() {
  return (
    <main className="flex flex-col gap-10 px-32 py-10">
      <section className="flex justify-between align-middle gap-y-6 gap-x-2">
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-bold">
            안녕하세요. 곰처럼 우직한 개발자 김상호입니다.
          </div>
          <p className="text-lg">
            다양한 도메인에서 웹 개발자 경력을 쌓아가고 있으며, 맡은 일은
            책임지고 우직하게 해냅니다. <br /> 웹 프론트엔드 직무에 전문가가
            되기 위해 React 프레임워크를 중심으로 업무 스킬을 쌓고 있습니다.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {LINK_LIST.map((val) => (
            <div key={val.text} className="flex items-center gap-1">
              <val.icon width={20} height={20} alt={val.text} />
              {val.type === "LINK" ? (
                <a className="text-blue-600" target="_blank" href={val.link}>
                  {val.text}
                </a>
              ) : (
                <span className="text-gray-600">{val.text}</span>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-10">
        <Profile />
        <Card iconType={CardIconKey.PROJECT} title="Projects & Skills">
          <div>aa</div>
        </Card>
        <Card iconType={CardIconKey.ME} title="About Me">
          <div>aa</div>
        </Card>
      </section>
    </main>
  );
}

const LINK_LIST: {
  type: "TEXT" | "LINK";
  icon: any;
  text: string;
  link?: string;
}[] = [
  {
    type: "TEXT",
    icon: EmailIcon,
    text: "tkdgh3050@gmail.com",
  },
  {
    type: "LINK",
    icon: PortfolioIcon,
    text: "Portfolio Link",
    link: "https://www.notion.so/1159957616c38094aa83c77586825e5f?pvs=4",
  },
  {
    type: "TEXT",
    icon: PhoneIcon,
    text: "+82 10-3052-2860",
  },
  {
    type: "LINK",
    icon: CodeIcon,
    text: "Github Link",
    link: "https://github.com/tkdgh3050",
  },
];
