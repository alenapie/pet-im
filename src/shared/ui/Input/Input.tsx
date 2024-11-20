import clsx from "clsx";
import styles from "./input.module.scss";
import { FC, useState } from "react";

type Props = {
  //! todo: добавить className чтобы снаружи менять цвет
  color: "mutedPrimary" | "inputSpecial"; //! todo: поправить цвета
  fixedSize?: "fixedSize"; //! todo: развернуть логику и  переименовать в fullSize
  placeholder?: string;
};

export const Input: FC<Props> = ({
  color = "mutedPrimary", //! todo: исправить на primary
  fixedSize,
  placeholder = "",
}) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const isPlaceholderVisible = value === "" && !isFocused;
  return (
    <div className={styles.inputWrapper}>
      {" "}
      //! todo: ???
      <input
        className={clsx(
          styles.root,
          fixedSize && styles[fixedSize],
          styles[color]
        )}
        value={value}
        //! todo: убрать стейты и сделать проп onChange
        onChange={(e) => setValue(e.target.value)}
        //! todo: убрать это все
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {/* {isPlaceholderVisible && placeholder && (
        <span className={styles.placeholder}>{placeholder}</span> //! todo: убрать, вынести в input
      )} */}
    </div>
  );
};
