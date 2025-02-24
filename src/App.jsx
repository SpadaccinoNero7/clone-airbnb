import FilterList from "./components/filterList/FilterList";
import Card from "./components/card/Card";
import "./styles/main.scss";
import { useFetch } from "./customHook/useFetch";
import { Link } from "react-router-dom";

function App() {
  const { data, loading, error } = useFetch("/menu.json");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <FilterList />
      <div className="cardList">
        {data.map((i) => (
          <Link to={`/singlecard/${i.id}`}>
            <Card key={i.id} card={i} />
          </Link>
        ))}
      </div>
      <br />
    </>
  );
}

export default App;
