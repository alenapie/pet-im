import { FC, SVGProps } from "react";

export const Circle: FC<SVGProps<SVGSVGElement>> = ({
  fill = "white",
  stroke = "black",
  strokeWidth = 1,
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill={fill} // Цвет заливки
      stroke={stroke} // Цвет обводки
      strokeWidth={strokeWidth} // Ширина обводки
    />
  </svg>
);
