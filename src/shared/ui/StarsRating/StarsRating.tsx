import { Star } from "@/shared/icons/Star";
import styles from "./stars-rating.module.scss";
import { FC } from "react";

type Props = {
  max?: number;
  rating: number;
};

const getStars = (max: number) =>
  Array.from({ length: max }, (_, index) => (
    <div key={index}>
      <Star />
    </div>
  ));

export const StarsRating: FC<Props> = ({ rating = 0, max = 5 }) => {
  const ratingWidth = (rating / max) * 100;
  const stars = getStars(max);

  return (
    <div className={styles.rating}>
      <div className={styles.backgroundStars}>{stars}</div>
      <div className={styles.frontStars} style={{ width: ratingWidth + "%" }}>
        {stars}
      </div>
    </div>
  );
};
