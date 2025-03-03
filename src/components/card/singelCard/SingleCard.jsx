import { useParams } from "react-router-dom";
import { useFetch } from "../../../customHook/useFetch";
import styles from "./singleCard.module.scss";
import NotFound from "../../notFound/notFound";
import BookingCard from "../bookingCard/BookingCard";
import StarIcon from "@mui/icons-material/Star";
import SearchBarCompatta from "../../searchbar/SearchBarCompatta";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RatingCard from "./RatingCard";
import ReactStarsRating from "react-awesome-stars-rating";
import { useReviews } from "../../../customHook/useLocalStorage";

export default function SingleCard() {
  const params = useParams();

  const { data, loading, error } = useFetch("/menu.json");

  // Ensure useReviews is called unconditionally
  const cardId = data ? Number(params.cardId) : null;
  const { reviews, averageRating } = useReviews(cardId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const card = data.find(({ id }) => id === cardId);
  return (
    <>
      {!card ? (
        <NotFound />
      ) : (
        <>
          <div className={`${styles.singleCard}`}>
            <SearchBarCompatta />
            <div className={styles.titlePage}>
              <h1>{card.titlePage}</h1>
              <div className={styles.titlePageIcons}>
                <p>
                  <IosShareIcon fontSize="small" /> condividi
                </p>
                <p>
                  <FavoriteBorderIcon fontSize="small" /> salva
                </p>
              </div>
            </div>
            <div className={`${styles.images}`}>
              {card.img.map((item, index) => {
                // Per ogni elemento dell'array, accediamo alla chiave dinamica (first, second, third)
                const key = Object.keys(item)[1]; // otteniamo la chiave "first", "second" o "third"
                const { img } = item[key]; // accediamo a "title" e "description"

                return (
                  <img
                    key={index}
                    src={img}
                    className={`${styles.newImg}`}
                  ></img>
                );
              })}
            </div>
            <div className={styles.title}>
              <div className={styles.titleCard}>
                <div className={styles.infoLocation}>
                  <h3>
                    {card.location}, {card.country}. {card.type}
                  </h3>
                  <p>
                    {card.ospitiTot} ospiti -{" "}
                    {card.bedroom > 1
                      ? `${card.bedroom} camere da letto`
                      : `${card.bedroom} camera da letto`}{" "}
                    - {card.bed > 1 ? `${card.bed} letti` : `${card.bed} letto`}
                  </p>
                </div>
                <div className={styles.rating}>
                  <h3>Amato dagli ospiti</h3>
                  <div>
                    <h3>{averageRating}</h3>
                    <p>
                      <ReactStarsRating
                        isEdit={false}
                        value={averageRating}
                        primaryColor="gold"
                        secondaryColor="gray"
                        starGap={5}
                      />
                    </p>
                  </div>
                  <div className={styles.recensioni}>
                    {reviews.length}
                    <p>recensioni</p>
                  </div>
                </div>
                <div className={styles.hostSection}>
                  <h4>Nome dell'host: {card.host.name}</h4>
                  <p>
                    {card.host.isSuperhost ? "Superhost" : null}{" "}
                    {card.host.yearsSinceHost > 1
                      ? `${card.host.yearsSinceHost} anni`
                      : `${card.host.yearsSinceHost} anno`}{" "}
                    {""}
                    da host
                  </p>
                  <hr />
                </div>
                <div className={styles.particularity}>
                  {card.infoLocation.map((item, index) => {
                    // Per ogni elemento dell'array, accediamo alla chiave dinamica (first, second, third)
                    const key = Object.keys(item)[1]; // otteniamo la chiave "first", "second" o "third"
                    const { title, description } = item[key]; // accediamo a "title" e "description"

                    return (
                      <div key={index}>
                        <h4>{title}</h4>
                        <p>{description}</p>
                      </div>
                    );
                  })}
                </div>
                <hr />
              </div>
              <div className={styles.spacingDiv}></div>
              <div className={styles.bookAndReviews}>
                <div className={styles.bookingCard}>
                  <BookingCard card={card} />
                </div>
                <div>
                  <RatingCard card={card} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
