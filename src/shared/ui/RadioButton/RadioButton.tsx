import { FC } from "react";
import styles from "./radioButton.module.scss";
import { Circle } from "@/shared/icons/Circle";

type Props = {
  count: number;
  colors: string[];
};

export const RadioButton: FC<Props> = ({ count, colors }) => {
  const circles = Array.from({ length: count }, (_, index) => {
    const fillColor = colors[index] || "#fff"; // Цвет заливки или белый по умолчанию

    return (
      <div key={index} className={styles.circle}>
        <Circle fill={fillColor} stroke="#D9D9D9" strokeWidth="2" />
      </div>
    );
  });

  return <div className={styles.root}>{circles}</div>;
};
