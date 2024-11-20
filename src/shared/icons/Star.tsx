import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  clipWidth?: number;
}

export const Star: FC<Props> = ({ clipWidth = 0 }) => (
  <div style={{ position: "relative", width: "24px", height: "24px" }}>
    {/* верхний слой */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      <polygon
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        fill="#FFFFFF"
        stroke="#1C7161"
        strokeWidth="1"
      />
    </svg>
    {/* нижний слой */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        clipPath: `polygon(0 0, ${clipWidth}% 0, ${clipWidth}% 100%, 0 100%)`,
      }}
    >
      <polygon
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        fill="#1C7161"
      />
    </svg>
  </div>
);
