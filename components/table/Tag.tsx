import clsx from "clsx";

type TTagProps = {
  tagColor: string;
  tagBgColor: string;
  tagText: string;
  width?: string;
  height?: string;
};
export default function Tag({
  tagColor,
  tagBgColor,
  tagText,
  width = "30px",
  height = "15px",
}: TTagProps) {
  return (
    <span
      className={clsx(
        "flex",
        "justify-center",
        "items-center",
        `w-[${width}]`,
        `h-[${height}]`,
        `bg-${tagBgColor}`,
        `text-${tagColor}`
      )}
    >
      {tagText}
    </span>
  );
}
