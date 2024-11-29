import { FC } from "react";
import styles from "./circle.module.scss";

type Props = {
  color: string;
  size: number;
};

export const Circle: FC<Props> = ({ color, size }) => (
  <div className={styles.border}>
    <div
      style={{ width: size, height: size, backgroundColor: color }}
      className={styles.circle}
    />
  </div>
);
