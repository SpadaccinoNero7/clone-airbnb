import { useEffect, useState } from "react";

/* export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key, initialValue);
    return storedValue ? JSON.parse(storedValue) : [];
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
} */

/* export function useLocalStorageObject(key) {
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [reviewsId, setReviewsId] = useState(0);

  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : [];
  });

  const newReview = {
    reviewId: reviewsId + 1,
    rating: rating,
    reviews: reviews + 1,
  };

  useEffect(() => {
    setReviews(reviews + 1);
    setReviewsId(reviewsId + 1);

    const existingReviews = JSON.parse(localStorage.getItem(key)) || [];
    existingReviews.push(newReview);
    localStorage.setItem(key, JSON.stringify(existingReviews));
  }, [key, value]);

  return [value, setValue];
} */

// Custom hook per la gestione delle recensioni
export function useReviews(cardId) {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Recupera le recensioni dal localStorage al caricamento del componente
    const existingReviews =
      JSON.parse(localStorage.getItem(`INFO CARD ${cardId}`)) || [];
    setReviews(existingReviews);
  }, [cardId]);

  // Funzione per aggiungere una nuova recensione
  const addReview = () => {
    const reviewId = reviews.length + 1;
    const newReview = {
      reviewId,
      rating,
    };

    // Aggiungi la nuova recensione all'elenco
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);

    // Salva le recensioni aggiornate nel localStorage
    localStorage.setItem(`INFO CARD ${cardId}`, JSON.stringify(updatedReviews));
  };

  // Calcolo della valutazione media
  const calculateAverageRating = () => {
    const sumRatings = reviews.map(({ rating }) => rating);
    return sumRatings.length > 0
      ? (
          sumRatings.reduce((acc, curr) => acc + curr, 0) / sumRatings.length
        ).toFixed(2)
      : 0;
  };

  return {
    reviews,
    rating,
    setRating,
    addReview,
    averageRating: calculateAverageRating(),
  };
}
