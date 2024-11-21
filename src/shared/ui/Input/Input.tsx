import { FC } from "react";
import clsx from "clsx";
import styles from "./input.module.scss";

type Props = {
  className?: string;
  color?: "primary" | "secondary";
  placeholder?: string;
  onChange: () => void;
};

export const Input: FC<Props> = ({
  color = "primary",
  placeholder = "",
  className,
  onChange,
}) => {
  return (
    <input
      className={clsx(styles.root, styles[color], className)}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
