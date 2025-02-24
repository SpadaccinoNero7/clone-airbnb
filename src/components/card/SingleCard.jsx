import { useParams } from "react-router-dom";
import { useFetch } from "../../customHook/useFetch";
import styles from "./singleCard.module.scss";
import NotFound from "../notFound/notFound";

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
        <div className={`${styles.singleCard}`}>
          <div className={`${styles.title}`}>
            <h1>Host: {card.host}</h1>
            <h1>Location: {card.location}</h1>
          </div>
          <div className={`${styles.images}`}>
            <img src={card.img.first} className={`${styles.newImg}`} />
            <img src={card.img.second} className={`${styles.newImg}`} />
            <img src={card.img.third} className={`${styles.newImg}`} />
          </div>
        </div>
      )}
    </>
  );
}
