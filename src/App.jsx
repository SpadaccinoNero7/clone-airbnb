import { useState } from "react";
import Wrapper from "./components/wrapper/Wrapper";
import SearchBar from "./components/searchbar/SearchBar";
import FilterList from "./components/filterList/FilterList";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import ViewModeContextProvider from "./context/ViewModeContext";
import "./styles/main.scss";

function App() {
  const [card] = useState([
    {
      id: 1,
      location: "Trasquera",
      country: "Italia",
      host: "Loredana",
      checkin_date: 7,
      checkout_date: 12,
      month: "gen",
      price: 256,
      isStarred: false,
    },
    {
      id: 2,
      location: "Bettmeralp",
      country: "Svizzera",
      host: "David Und Elenore",
      checkin_date: 16,
      checkout_date: 21,
      month: "mag",
      price: 213,
      isStarred: false,
    },
    {
      id: 3,
      location: "Varzo",
      country: "Italia",
      host: "Francesca BB Chalet Il Picchio",
      checkin_date: 16,
      checkout_date: 21,
      month: "dic",
      price: 142,
      isStarred: false,
    },
    {
      id: 4,
      location: "Lauterbrunnen",
      country: "Svizzera",
      host: "azienda specializzata",
      checkin_date: 6,
      checkout_date: 11,
      month: "gen",
      price: 441,
      isStarred: false,
    },
    {
      id: 5,
      location: "Rabbi",
      country: "Italia",
      host: "Nicola",
      checkin_date: 6,
      checkout_date: 11,
      month: "gen",
      price: 235,
      isStarred: false,
    },
    {
      id: 6,
      location: "Obermutten",
      country: "Svizzera",
      host: "Silvia",
      checkin_date: 24,
      checkout_date: 30,
      month: "gen",
      price: 106,
      isStarred: false,
    },
    {
      id: 7,
      location: "Thyon Les Collons",
      country: "Svizzera",
      host: "azienda specializzata",
      checkin_date: 13,
      checkout_date: 18,
      month: "gen",
      price: 1071,
      isStarred: true,
    },
  ]);
  return (
    <>
      {/* <Header />
        <SearchBar /> */}
      <FilterList />
      <div className="cardList">
        {card.map((i) => (
          <Card key={i.id} card={i} />
        ))}
      </div>
      <br />
    </>
  );
}

export default App;
