import "./cardResidenze.scss";

const CardResidenze = ({ card }) => {
  return (
    <div className="card">
      <h5>
        {card.location}, {card.country}{" "}
        {card.isStarred ? <div>🖤</div> : <div>♡</div>}
      </h5>
      <p>Host: {card.host.name}</p>
      <p>
        {card.date.checkin_date}-{card.date.checkout_date}{" "}
        {card.date.monthAlphabet}
      </p>
      <p>{card.price.perNight} € notte</p>
    </div>
  );
};

export default CardResidenze;
