import clsx from "clsx";
import styles from "./button.module.scss";
import { FC, MouseEventHandler, ReactNode } from "react";

type CommonProps = {
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

type ContainedProps = {
  variant?: "contained";
  color?: "primary" | "secondary";
  size: "lg" | "sm";
};

type OutlinedProps = {
  variant: "outlined";
  color?: never;
  size: "lg" | "md";
};

type TextProps = {
  variant: "text";
  color?: never;
  size?: never;
};

type Props = CommonProps & (ContainedProps | OutlinedProps | TextProps);

export const Button: FC<Props> = ({
  size = "lg",
  variant = "contained",
  color = "primary",
  className,
  onClick,
  children,
}) => {
  const getVariantClasses = () => {
    if (variant === "contained") {
      return [styles.contained, styles[color], styles[size]];
      //! todo: check size
    }

    if (variant === "text") {
      return styles.text;
    }

    return [styles.outlined, styles[size]];
  };

  return (
    <button
      onClick={onClick}
      className={clsx(className, styles.button, getVariantClasses())}
    >
      {children}
    </button>
  );
};
