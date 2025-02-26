import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <section className="flex items-center bg-white border-b">
      <Link className="p-1" href={"/"}>
        <Image src="/gomsang.png" alt="main" width={50} height={50} />
      </Link>
      <div className="flex flex-auto gap-8 px-6">
        {MENU_LIST.map((val) => (
          <Link
            key={val.name}
            href={val.href}
            className="text-base font-semibold"
          >
            {val.name}
          </Link>
        ))}
      </div>
      <div role="button" className="p-3">
        <Image src="/icon/padlock.png" alt="lock" width={20} height={20} />
      </div>
    </section>
  );
}
type TMenu = {
  name: string;
  href: string;
};

const MENU_LIST: TMenu[] = [
  {
    name: "Resume",
    href: "/resume",
  },
  {
    name: "Todo",
    href: "/todo",
  },
  {
    name: "Daily",
    href: "/daily",
  },
  {
    name: "Idea",
    href: "/idea",
  },
  {
    name: "BucketList",
    href: "/bucketList",
  },
];
