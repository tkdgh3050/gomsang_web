import { ReactNode } from "react";
import { ProfileIcon, ProjectIcon, MeIcon } from "@/assets";

type TCardProps = {
  iconType: keyof typeof CardIconKey;
  title: string;
  children: ReactNode;
};

export const CardIconKey = {
  PROFILE: "PROFILE",
  PROJECT: "PROJECT",
  ME: "ME",
} as const;

const IconMap = {
  [CardIconKey.PROFILE]: ProfileIcon,
  [CardIconKey.PROJECT]: ProjectIcon,
  [CardIconKey.ME]: MeIcon,
};

export default function Card({ iconType, title, children }: TCardProps) {
  const IconComponent = IconMap[iconType]; // 해당 아이콘 컴포넌트 가져오기

  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-3 align-baseline">
        <div>
          {IconComponent && (
            <IconComponent width={28} height={28} alt={title} />
          )}
        </div>
        <div className="text-3xl font-bold">{title}</div>
      </div>
      <div className="w-full h-[2px] bg-gray-800 my-2"></div>
      <div>{children}</div>
    </div>
  );
}
