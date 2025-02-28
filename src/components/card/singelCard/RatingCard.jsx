import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import StarRatings from "react-star-ratings";
import { useReviews } from "../../../customHook/useLocalStorage";
import ReactStarsRating from "react-awesome-stars-rating";

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
    <>
      <ReactStarsRating
        value={rating}
        onChange={handleRating}
        primaryColor="gold"
        secondaryColor="gray"
        starGap={5}
      />
      {/* <button onClick={handleButtonClick}>click</button> */}
      {/*       {existingReviews.map(({ reviewId, rating, reviews }) => (
        <div key={reviewId}>
          <p>Rating: {rating}</p>
          <p>Reviews: {reviews}</p>
        </div>
      ))} */}
      {/*       <p>Average rating: {avgRating}</p>
      <p>Total reviews: {sumReviews}</p> */}
      {/* Bottone per aggiungere una recensione */}
      <button onClick={addReview}>Aggiungi recensione</button>

      {/* Visualizza la valutazione media */}
      <p>Valutazione media: {averageRating}</p>

      {/* Elenco delle recensioni */}
      <p>Recensioni totali: {reviews.length}</p>
      {reviews.map(({ reviewId, rating }) => (
        <div key={reviewId}>
          <p>
            Recensione #{reviewId}: {rating} stelle
          </p>
        </div>
      ))}
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
