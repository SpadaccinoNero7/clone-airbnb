import "./card.scss";

const Card = ({ card }) => {
  return (
    <div className="card">
      <h5>
        {card.location}, {card.country} {card.isStarred && <div>♡</div>}
      </h5>
      <p>Host: {card.host}</p>
      <p>
        {card.checkin_date}-{card.checkout_date} {card.month}
      </p>
      <p>{card.price} € notte</p>
    </div>
  );
};

export default Card;
