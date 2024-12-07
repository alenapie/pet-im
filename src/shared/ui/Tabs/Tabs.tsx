import { FC } from "react";
import clsx from "clsx";

import styles from "./tabs.module.scss";

type Props = {
  tabs: { title: string; value: string }[];
  onChange: (value: string) => void;
  active: string;
};

export const Tabs: FC<Props> = ({ active, tabs, onChange }) => {
  if (!tabs?.length) {
    return null;
  }

  return (
    <div className={clsx(styles.root)}>
      <div className={styles.tabs}>
        {tabs.map(({ title, value }) => (
          <button
            key={value}
            className={clsx(styles.tab, {
              [styles.active]: value === active,
            })}
            onClick={() => onChange(value)}
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
};
