import { useParams } from "react-router-dom";

export default function Prenotazione() {
  const params = useParams();
  return (
    <>
      <h1>Prenotazione {params.prenotazioneId}</h1>
    </>
  );
}
