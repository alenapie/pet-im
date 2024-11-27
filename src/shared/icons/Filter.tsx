import { FC, SVGProps } from "react";
import { IconSize } from "./constants";
import clsx from "clsx";

type Props = { size?: IconSize };

export const Filter: FC<Props> = ({ size = IconSize.MD }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="icon"
      d="M6 13H18V11H6M3 6V8H21V6M10 18H14V16H10V18Z"
      fill="white"
    />
  </svg>
);
