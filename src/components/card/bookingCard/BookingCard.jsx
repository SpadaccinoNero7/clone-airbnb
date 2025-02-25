import { useParams } from "react-router-dom";
import { useFetch } from "../../../customHook/useFetch";
import styles from "./bookingCard.module.scss";

export default function BookingCard() {
  const { data, loading, error } = useFetch("/menu.json");
  const params = useParams();

  const card = data.find(({ id }) => id === Number(params.cardId));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const checkinDate = `${String(card.date.year)}-${String(
    card.date.monthDigit
  ).padStart(2, "0")}-${String(card.date.checkin_date).padStart(2, "0")}`;
  const checkoutDate = `${String(card.date.year)}-${String(
    card.date.monthDigit
  ).padStart(2, "0")}-${String(card.date.checkout_date).padStart(2, "0")}`;

  function handleMolt(num1, num2) {
    return num1 * num2;
  }

  const firstNum = card.price.perNight;
  const totalDays = card.date.checkout_date - card.date.checkin_date;
  const totalPrice =
    handleMolt(firstNum, totalDays) +
    card.price.cleaning +
    card.price.airbnbService +
    card.price.taxes;

  return (
    <>
      <div className={styles.bookingCard}>
        <div className={styles.prn}>{card.price.perNight} € notte</div>
        <div className={styles.date}>
          <p>
            <input type="date" defaultValue={checkinDate} />
            <input type="date" defaultValue={checkoutDate} />
          </p>
          <p>
            <button>Prenota</button>
          </p>
        </div>
        <p>Non riceverai alcun addebito in questa fase</p>
        <div className={styles.priceBooking}>
          <div className={styles.priceNigths}>
            <p>
              {card.price.perNight} € x {totalDays} notti
            </p>
            <p>{handleMolt(firstNum, totalDays)} €</p>
          </div>
          <div className={styles.priceCleaning}>
            <p>Costi di pulizia</p>
            <p>{card.price.cleaning} €</p>
          </div>
          <div className={styles.priceService}>
            <p>Costi del servizio Airbnb</p>
            <p>{card.price.airbnbService} €</p>
          </div>
          <div className={styles.priceTaxes}>
            <p>Tasse</p>
            <p>{card.price.taxes} €</p>
          </div>
          <hr className={styles.hr} />
          <div className={styles.priceTotal}>
            <p>Totale</p>
            <p>{totalPrice} €</p>
          </div>
        </div>
      </div>
    </>
  );
}
