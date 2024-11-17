import { FC, SVGProps } from "react";

export const OppositeArrows: FC<SVGProps<SVGSVGElement>> = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="path"
      d="M9 14H2V16H9V19L13 15L9 11V14ZM15 13V10H22V8H15V5L11 9L15 13Z"
      fill="white"
    />
  </svg>
);
