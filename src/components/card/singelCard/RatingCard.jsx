import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import StarRatings from "react-star-ratings";
import { useLocalStorage } from "../../../customHook/useLocalStorage";
import ReactStarsRating from "react-awesome-stars-rating";

export default function RatingCard({ card }) {
  const [rating, setRating] = useLocalStorage(`InfoCard ${card.id}`);
  const [reviews, setReviews] = useState(0);
  const [reviewsId, setReviewsId] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

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

  const sumReviews = existingReviews
    .map(({ reviews }) => reviews)
    .reduce((acc, curr) => acc + curr, 0);

  const sumRatings = existingReviews.map(({ rating }) => rating);

  const avgRating =
    sumRatings.length > 0
      ? (
          sumRatings.reduce((acc, curr) => acc + curr, 0) / sumRatings.length
        ).toFixed(2)
      : 0;

  return (
    <>
      <ReactStarsRating
        value={rating}
        onChange={handleRating}
        primaryColor="gold"
        secondaryColor="gray"
        starGap={5}
      />
      <button onClick={handleButtonClick}>click</button>
      {/*       {existingReviews.map(({ reviewId, rating, reviews }) => (
        <div key={reviewId}>
          <p>Rating: {rating}</p>
          <p>Reviews: {reviews}</p>
        </div>
      ))} */}
      <p>Average rating: {avgRating}</p>
      <p>Total reviews: {sumReviews}</p>
    </>
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
