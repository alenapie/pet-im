import styles from "./icon-button.module.scss";
import { icon } from "icons";
import { FC, MouseEventHandler } from "react";
import clsx from "clsx";

type Props = {
  icon: keyof typeof icon;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  color: "primary" | "secondary" | "mutedSecondary";
};

export const IconButton: FC<Props> = ({
  icon: name,
  onClick,
  className,
  color = "primary",
}) => {
  const Icon = icon[name];

  return (
    <button onClick={onClick} className={clsx(styles.root, className)}>
      <Icon
        className={clsx(styles.icon, {
          [styles.primary]: color === "primary",
          [styles.secondary]: color === "secondary",
          [styles.mutedSecondary]: color === "mutedSecondary",
        })}
      />
    </button>
  );
};
