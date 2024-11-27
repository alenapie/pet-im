import styles from "./circle.module.scss";

export const Circle = ({ color, size = 24 }: any) => (
  <div className={styles.border}>
    <div
      style={{ width: size, height: size, backgroundColor: color }}
      className={styles.circle}
    />
  </div>
);
