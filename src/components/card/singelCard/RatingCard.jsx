import { Rating } from "react-simple-star-rating";
import StarRatings from "react-star-ratings";
import { useLocalStorage } from "../../../customHook/useLocalStorage";
import ReactStarsRating from "react-awesome-stars-rating";

export default function RatingCard({ card }) {
  const [rating, setRating] = useLocalStorage(`RATING CardId ${card.id}`, 0);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleReset = () => {
    setRating(0);
  };

  return (
    <>
      <Rating onClick={handleRating} initialValue={rating} fillColor="red" />
      <button onClick={handleReset}>Reset</button>
      <StarRatings
        rating={rating}
        numberOfStars={5}
        starRatedColor="blue"
        changeRating={handleRating}
        starDimension="20px"
      />
      <ReactStarsRating
        value={rating}
        onChange={handleRating}
        primaryColor="gold"
        secondaryColor="gray"
        starGap={5}
      />
    </>
  );
}
