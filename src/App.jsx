import FilterList from "./components/filterList/FilterList";
import Card from "./components/card/Card";
import "./styles/main.scss";
import { useFetch } from "./customHook/useFetch";

function App() {
  const { data, loading, error } = useFetch("/menu.json");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <FilterList />
      <div className="cardList">
        {data.map((i) => (
          <Card key={i.id} card={i} />
        ))}
      </div>
      <br />
    </>
  );
}

export default App;
