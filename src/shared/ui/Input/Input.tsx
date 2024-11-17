import clsx from "clsx";
import styles from "./input.module.scss";
import { FC, useState } from "react";

type Props = {
  color: "mutedPrimary" | "inputSpecial";
  fixedSize?: "fixedSize";
  placeholder?: string;
};

export const Input: FC<Props> = ({
  color = "mutedPrimary",
  fixedSize,
  placeholder = "",
}) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const isPlaceholderVisible = value === "" && !isFocused;
  return (
    <div className={styles.inputWrapper}>
      <input
        className={clsx(
          styles.root,
          fixedSize && styles[fixedSize],
          styles[color]
        )}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isPlaceholderVisible && placeholder && (
        <span className={styles.placeholder}>{placeholder}</span>
      )}
    </div>
  );
};
