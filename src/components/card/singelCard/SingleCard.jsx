import { useParams } from "react-router-dom";
import { useFetch } from "../../../customHook/useFetch";
import styles from "./singleCard.module.scss";
import NotFound from "../../notFound/notFound";
import BookingCard from "../bookingCard/BookingCard";
import SearchBarCompatta from "../../searchbar/SearchBarCompatta";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RatingCard from "./RatingCard";
import { useReviews } from "../../../customHook/useLocalStorage";
import { Rating } from "react-simple-star-rating";

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
                  <img key={index} src={img} className={styles.newImg}></img>
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
                    <Rating
                      allowFraction
                      titleSeparator="su"
                      initialValue={averageRating}
                      readonly
                    />
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
                  <hr />
                </div>
                <div className={styles.descriptionUnderInfoLocation}>
                  {card.descriptionUnderInfoLocation}
                  <hr />
                </div>
                <div className={styles.textUnderUnder}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis ab inventore quasi necessitatibus dicta
                  repellendus porro suscipit qui laboriosam quam, voluptate
                  ducimus tempore iusto, neque ipsa magni aut eius tenetur!
                  Molestiae quas ipsa laudantium deserunt suscipit ea voluptatem
                  at voluptas magnam qui voluptatum eius temporibus ducimus,
                  deleniti eaque optio quaerat vero eligendi iste mollitia
                  molestias impedit. Autem, ut dolor? Ut. Ducimus consequuntur
                  delectus soluta accusantium laudantium quidem laborum
                  voluptates molestiae aliquam at nobis provident saepe fugit,
                  consequatur incidunt veniam omnis reiciendis similique!
                  Doloribus eius aliquam praesentium. Non iusto tempore at?
                  Exercitationem consequatur obcaecati nisi quo doloribus atque
                  fugit? Explicabo, voluptatem? Recusandae necessitatibus
                  tenetur earum laborum voluptatem commodi aliquid accusamus
                  facilis! Culpa impedit suscipit enim eos? Saepe nisi quas nemo
                  suscipit? Animi, laudantium eius ad vel consectetur quos!
                  Maiores quos dicta quis repellendus pariatur, iusto ratione
                  nisi eveniet. Natus iure, modi soluta consequuntur provident
                  illum architecto nemo veritatis optio amet voluptatum?
                  <hr />
                </div>
                <div className={styles.doveDormirai}>
                  <h3>Dove dormirai</h3>
                  <div className={styles.doveDormiraiFoto}>
                    {Object.keys(card.bedImages).map((key) => {
                      const img = card.bedImages[key];
                      return (
                        <img
                          key={key}
                          src={img}
                          alt={`Bed image ${key}`}
                          className={styles.newImg}
                        />
                      );
                    })}
                    <hr />
                  </div>
                </div>
                <div className={styles.cosaTroverai}>
                  <h2>Cosa troverai</h2>
                  <div className={styles.cosaTroveraiIcons}>
                    <div className={styles.cosaTroveraiLeft}>
                      <p>Vista sul lago</p>
                      <p>Lungomare</p>
                      <p>Wi-fi</p>
                      <p>Parcheggio gratuito nella proprietà</p>
                    </div>
                    <div className={styles.cosaTroveraiRight}>
                      <p>Vista sulle montagne</p>
                      <p>Cucina</p>
                      <p>Spazio di lavoro dedicato</p>
                      <p>Animali domestici ammessi</p>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
              <div className={styles.bookAndReviews}>
                <div className={styles.bookingCard}>
                  <BookingCard card={card} />
                </div>
                <div className={styles.ratingCard}>
                  <RatingCard card={card} />
                </div>
              </div>
            </div>{" "}
            {/* titlepage */}
          </div>
        </>
      )}
    </>
  );
}
