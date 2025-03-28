import styles from "./bookingCard.module.scss";

export default function BookingCard({ card }) {
  const checkinDate = `${String(card.date.year)}-${String(
    card.date.monthDigit
  ).padStart(2, "0")}-${String(card.date.checkin_date).padStart(2, "0")}`;
  const checkoutDate = `${String(card.date.year)}-${String(
    card.date.monthDigit
  ).padStart(2, "0")}-${String(card.date.checkout_date).padStart(2, "0")}`;

  function handleMolt(num1, num2) {
    return num1 * num2;
  }
  const totalDays = card.date.checkout_date - card.date.checkin_date;

  const totalPrice =
    handleMolt(card.price.perNight, totalDays) +
    card.price.cleaning +
    card.price.airbnbService +
    card.price.taxes;

  return (
    <div className={styles.bookingCard}>
      <div className={styles.prn}>{card.price.perNight} € notte</div>
      <div className={styles.date}>
        <div className={styles.dateCheckin}>
          <label htmlFor="checkin_date">check-in</label>
          <input
            id="checkin_date"
            type="date"
            defaultValue={checkinDate}
            className={styles.dateInput}
          />
        </div>
        <div className={styles.dateCheckout}>
          <label htmlFor="checkout_date">check-out</label>
          <input
            id="checkout_date"
            type="date"
            defaultValue={checkoutDate}
            className={styles.dateInput}
          />
        </div>
      </div>
      <button>Prenota</button>
      <p>Non riceverai alcun addebito in questa fase</p>
      <div className={styles.priceBooking}>
        <div className={styles.priceNigths}>
          <p>
            {card.price.perNight} € x {totalDays} notti
          </p>
          <p>{handleMolt(card.price.perNight, totalDays)} €</p>
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
  );
}
