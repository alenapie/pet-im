import { FC } from "react";
import styles from "./radioButton.module.scss";
import { Circle } from "./Circle";

type Props = {
  values: string[];
  size?: number;
  colored?: boolean;
};

export const RadioButton: FC<Props> = ({ colored, values, size = 24 }) => {
  if (colored) {
    return (
      <div className={styles.colored}>
        {values.map((color) => (
          <Circle
            key={color}
            color={color}
            size={size}
            className={styles.colored}
          />
        ))}
      </div>
    );
  }
  return (
    <div className={styles.text}>
      {values.map((value) => (
        <div key={value} className={styles.radioBtnText}>
          {value}{" "}
        </div>
      ))}
    </div>
  );
};
