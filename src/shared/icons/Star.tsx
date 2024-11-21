import { FC, SVGProps } from "react";

export const Star: FC<SVGProps<SVGSVGElement>> = ({
  width = 20,
  height = 20,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <polygon
      points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
      fill="white"
      className="icon"
    />
  </svg>
);
