import { Star } from "@/shared/icons/Star";
import styles from "./rating.module.scss";
import { FC } from "react";

type Props = {
  max?: number;
  rating: number;
  width?: number;
  height?: number;
};

const getStars = (max: number, width: number, height: number) =>
  Array.from({ length: max }, (_, index) => (
    <div key={index}>
      <Star width={width} height={height} />
    </div>
  ));

export const Rating: FC<Props> = ({
  rating = 0,
  max = 5,
  width = 20,
  height = 20,
}) => {
  const ratingWidth = (rating / max) * 100;
  const stars = getStars(max, width, height);

  return (
    <div className={styles.rating}>
      <div className={styles.backgroundStars}>{stars}</div>
      <div className={styles.frontStars} style={{ width: ratingWidth + "%" }}>
        {stars}
      </div>
    </div>
  );
};
