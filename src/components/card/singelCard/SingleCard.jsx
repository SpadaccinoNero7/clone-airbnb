import { useParams } from "react-router-dom";
import { useFetch } from "../../../customHook/useFetch";
import styles from "./singleCard.module.scss";
import NotFound from "../../notFound/notFound";
import BookingCard from "../bookingCard/BookingCard";
import StarIcon from "@mui/icons-material/Star";
import SearchBarCompatta from "../../searchbar/SearchBarCompatta";

export default function SingleCard() {
  const params = useParams();

  const { data, loading, error } = useFetch("/menu.json");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const card = data.find(({ id }) => id === Number(params.cardId));

  const star = <StarIcon fontSize="small" />;

  const countStar = () => {
    return star * card.rating;
  };

  return (
    <>
      {!card ? (
        <NotFound />
      ) : (
        <>
          <div className={`${styles.singleCard}`}>
            <SearchBarCompatta />
            <div className={`${styles.images}`}>
              <img src={card.img.first} className={`${styles.newImg}`} />
              <img src={card.img.second} className={`${styles.newImg}`} />
              <img src={card.img.third} className={`${styles.newImg}`} />
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
                    <h3>{card.rating}</h3>
                    <p>{countStar()}</p>
                  </div>
                  <div className={styles.recensioni}>
                    {card.reviews}
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
              </div>
              <div className={styles.bookingCard}>
                <BookingCard />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
