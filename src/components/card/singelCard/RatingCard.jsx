import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useLocalStorage } from "../../../customHook/useLocalStorage";

export default function RatingCard() {
  const [rating, setRating] = useLocalStorage("KEY", 0);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleReset = () => {
    setRating(0);
  };

  /*   useEffect(() => {
    localStorage.setItem("KEY", JSON.stringify(rating));
  }, [rating]); */

  return (
    <>
      <Rating onClick={handleRating} initialValue={rating} />
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
