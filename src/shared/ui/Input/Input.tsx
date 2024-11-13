import clsx from "clsx";
import styles from "./input.module.scss";
import { FC } from "react";

type Props = {
  color: "green" | "brown";
};

export const Input: FC<Props> = ({ color }) => {
  return (
    <input
      className={clsx(styles.root, {
        [styles.green]: color === "green",
        [styles.brown]: color === "brown",
      })}
      type="text"
    />
  );
};
