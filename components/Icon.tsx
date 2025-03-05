import Image from "next/image";
import React from "react";
import emailSVG from "/icon/email.svg";
import phoneSVG from "/icon/phone.svg";
import portfolioSVG from "/icon/portfolio.svg";
import codeSVG from "/icon/code.svg";

export type IconType = "EMAIL" | "PHONE" | "PORTFOLIO" | "CODE";

type IconProps = {
  type: IconType;
  width: number | `${number}`;
  height: number | `${number}`;
  alt: string;
};

export default function Icon({ alt, type, width, height }: IconProps) {
  const getSVG = (type: IconType) => {
    let svg = "";
    switch (type) {
      case "EMAIL":
        svg = emailSVG;
        break;
      case "PHONE":
        svg = phoneSVG;
        break;
      case "PORTFOLIO":
        svg = portfolioSVG;
        break;
      case "CODE":
        svg = codeSVG;
        break;

      default:
        break;
    }
    return svg;
  };
  return <Image alt={alt} src={getSVG(type)} width={width} height={height} />;
}
