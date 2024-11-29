import { FC, MouseEventHandler } from "react";
import { icon, IconSize } from "icons";
import clsx from "clsx";

import styles from "./iconButton.module.scss";

type Props = {
  icon: keyof typeof icon;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  color: "primary" | "secondary" | "mutedSecondary";
  size?: IconSize;
};

export const IconButton: FC<Props> = ({
  icon: name,
  onClick,
  className,
  color = "primary",
  size = IconSize.MD,
}) => {
  const Icon = icon[name];

  return (
    <button
      onClick={onClick}
      className={clsx(styles.root, className, styles[color])}
    >
      <Icon size={size} />
    </button>
  );
};
