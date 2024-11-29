import { FC } from "react";
import { IconSize } from "./constants";

type Props = { size?: IconSize };

export const OppositeArrows: FC<Props> = ({ size = IconSize.MD }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="icon"
      d="M9 14H2V16H9V19L13 15L9 11V14ZM15 13V10H22V8H15V5L11 9L15 13Z"
      fill="white"
    />
  </svg>
);
