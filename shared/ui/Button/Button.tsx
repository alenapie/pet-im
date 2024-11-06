import clsx from "clsx";
import styles from "./button.module.scss";
import { FC } from "react";

type Props = {
  size: "lg" | "md" | "sm";
};

export const Button: FC<Props> = ({ size = "sm" }) => {
  return (
    <button
      className={clsx(styles.root, {
        [styles.large]: size === "lg",
        [styles.medum]: size === "md",
        [styles.small]: size === "sm",
      })}
    >
      button
    </button>
  );
};
