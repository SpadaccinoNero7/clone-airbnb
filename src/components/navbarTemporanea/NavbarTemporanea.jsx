import { NavLink } from "react-router-dom";
import { ViewModeContext } from "../../context/ViewModeContext";
import { useContext, useEffect, useState } from "react";

export default function NavbarTemporanea() {
  const { viewMode } = useContext(ViewModeContext);
  const inactiveColor = viewMode === "dark-mode" ? "white" : "black";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <ul>
        {data.map((i) => {
          return (
            <li key={i.id}>
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
            </li>
          );
        })}
      </ul>
      {/* <nav>
        <NavLink
          to="firstsection"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : inactiveColor,
            };
          }}
        >
          Sezione principale
        </NavLink>{" "}
        {""}
        <NavLink
          to="infopage"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : inactiveColor,
            };
          }}
        >
          InfoPage
        </NavLink>
        {""} {""}
        <NavLink
          to="contatti"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : inactiveColor,
            };
          }}
        >
          Contatti
        </NavLink>
      </nav> */}
    </>
  );
}
