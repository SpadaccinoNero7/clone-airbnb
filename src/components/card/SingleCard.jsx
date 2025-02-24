import { useParams } from "react-router-dom";
import { useFetch } from "../../customHook/useFetch";
import styles from "./singleCard.module.scss";
import NotFound from "../notFound/notFound";
import Header from "../header/Header";
import SearchBar from "../searchbar/SearchBar";

export default function SingleCard() {
  const params = useParams();

  const { data, loading, error } = useFetch("/menu.json");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const card = data.find(({ id }) => id === Number(params.cardId));

  return (
    <>
      {!card ? (
        <NotFound />
      ) : (
        <>
          <Header />
          <SearchBar />
          <div className={`${styles.singleCard}`}>
            <div className={`${styles.images}`}>
              <img src={card.img.first} className={`${styles.newImg}`} />
              <img src={card.img.second} className={`${styles.newImg}`} />
              <img src={card.img.third} className={`${styles.newImg}`} />
            </div>
            <div className={`${styles.title}`}>
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
          </div>
        </>
      )}
    </>
  );
}
