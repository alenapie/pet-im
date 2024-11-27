import { icon } from "icons";
import styles from "./rating.module.scss";
import { FC } from "react";
import { IconSize } from "@/shared/icons/constants";

type Props = {
  max?: number;
  rating: number;
  size?: IconSize;
};

const getStars = (max: number, size: IconSize) =>
  Array.from({ length: max }, (_, index) => (
    <div key={index}>
      <icon.star size={size} />
    </div>
  ));

export const Rating: FC<Props> = ({
  rating = 0,
  max = 5,
  size = IconSize.SM,
}) => {
  const ratingWidth = (rating / max) * 100;
  const stars = getStars(max, size);

  return (
    <div className={styles.rating}>
      <div className={styles.backgroundStars}>{stars}</div>
      <div className={styles.frontStars} style={{ width: ratingWidth + "%" }}>
        {stars}
      </div>
    </div>
  );
};
