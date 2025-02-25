import { useParams } from "react-router-dom";
import { useFetch } from "../../../customHook/useFetch";

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

  return (
    <>
      <div>BookingCard</div>
      {card.price.perNight} € notte
      <p>
        <input type="date" defaultValue={checkinDate} />
        <input type="date" defaultValue={checkoutDate} />
      </p>
    </>
  );
}
