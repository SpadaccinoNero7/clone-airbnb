import { NavLink } from "react-router-dom";
import { ViewModeContext } from "../../context/ViewModeContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function NavbarTemporanea() {
  const { viewMode } = useContext(ViewModeContext);
  const inactiveColor = viewMode === "dark-mode" ? "white" : "black";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /*useEffect(() => {
    const url = "/file.json";

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Errore");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); */

  useEffect(() => {
    const url = "/file.json";
    try {
      axios.get(url).then((res) => {
        setData(res.data);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <nav>
        {data.map((i) => {
          return (
            <p key={i.id}>
              {i.visible && (
                <NavLink
                  to={`${i.link}`}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : inactiveColor,
                    };
                  }}
                >
                  {i.category}
                </NavLink>
              )}
            </p>
          );
        })}
      </nav>
    </>
  );
}
