import { Star } from "@/shared/icons/Star";
import styles from "./stars-rating.module.scss";
import { FC } from "react";

type StarsRatingProps = {
  rating: number;
  maxStars?: number;
};

export const StarsRating: FC<StarsRatingProps> = ({
  rating = 0,
  maxStars = 5,
}) => {
  const stars = Array.from({ length: maxStars }, (_, index) => {
    const starRating = Math.max(0, Math.min(1, rating - index));
    const clipWidth = starRating * 100;

    return (
      <span key={index} className={styles.star}>
        <Star clipWidth={clipWidth} />
      </span>
    );
  });

  return <div className={styles.starRating}>{stars}</div>;
};
