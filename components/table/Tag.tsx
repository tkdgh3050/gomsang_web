"use client";
import clsx from "clsx";

type TTagProps = {
  tagColor: string;
  tagBgColor: string;
  tagText: string;
};
export default function Tag({ tagColor, tagBgColor, tagText }: TTagProps) {
  return (
    <div
      className={clsx(
        "flex",
        "justify-center",
        "items-center",
        "rounded-lg",
        "p-1",
        tagBgColor,
        tagColor
      )}
    >
      {tagText}
    </div>
  );
}
