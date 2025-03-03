import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import StarRatings from "react-star-ratings";
import { useReviews } from "../../../customHook/useLocalStorage";
import ReactStarsRating from "react-awesome-stars-rating";
import styles from "./ratingCard.module.scss";

export default function RatingCard({ card }) {
  const { rating, reviews, setRating, addReview, averageRating } = useReviews(
    card.id
  );

  const handleRating = (value) => {
    setRating(value);
  };

  /*   const [reviews, setReviews] = useState(0);
  const [reviewsId, setReviewsId] = useState(0);


  const handleButtonClick = () => {
    setReviews(reviews + 1);
    setReviewsId(reviewsId + 1);

    const newReview = {
      reviewId: reviewsId + 1,
      rating: rating,
      reviews: reviews + 1,
    };

    const existingReviews =
      JSON.parse(localStorage.getItem(`testObject ${card.id}`)) || [];
    existingReviews.push(newReview);
    localStorage.setItem(
      `testObject ${card.id}`,
      JSON.stringify(existingReviews)
    );
  };

  const existingReviews =
    JSON.parse(localStorage.getItem(`testObject ${card.id}`)) || [];

  const sumReviews = existingReviews.length;

  const sumRatings = existingReviews.map(({ rating }) => rating);

  const avgRating =
    sumRatings.length > 0
      ? (
          sumRatings.reduce((acc, curr) => acc + curr, 0) / sumRatings.length
        ).toFixed(2)
      : 0; */

  return (
    <div className={styles.ratingCard}>
      <div className={styles.stars}>
        <ReactStarsRating
          value={rating}
          onChange={handleRating}
          primaryColor="gold"
          secondaryColor="gray"
          starGap={5}
        />
      </div>
      <div className={styles.addReview}>
        <button onClick={addReview}>Aggiungi recensione</button>
      </div>
      <div className={styles.info}>
        <p>Valutazione media: {averageRating}</p>
        <p>Recensioni totali: {reviews.length}</p>
      </div>
      {/* {reviews.map(({ reviewId, rating }) => (
        <div key={reviewId}>
          <p>
            Recensione #{reviewId}: {rating} stelle
          </p>
        </div>
      ))} */}
    </div>
  );
}

{
  /*       <Rating onClick={handleRating} initialValue={rating} fillColor="red" />
<button onClick={handleReset}>Reset</button>
<StarRatings
  rating={rating}
  numberOfStars={5}
  starRatedColor="blue"
  changeRating={handleRating}
  starDimension="20px"
/> */
}
