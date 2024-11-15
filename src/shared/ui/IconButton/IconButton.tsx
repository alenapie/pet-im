import Image from "next/image";
import styles from "./icon-button.module.scss";
import { icon } from "icons";
import { FC, MouseEventHandler } from "react";
import clsx from "clsx";

type Props = {
  icon: keyof typeof icon;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export const IconButton: FC<Props> = ({ icon: name, onClick, className }) => {
  return (
    <button onClick={onClick} className={clsx(styles.root, className)}>
      <Image src={icon[name]} alt={name} />
    </button>
  );
};
