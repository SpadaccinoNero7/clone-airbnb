import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ViewModeContext } from "../../../context/ViewModeContext";
import { useFetch } from "../../../customHook/useFetch";

export default function Prenotazioni() {
  const { data, loading, error } = useFetch("/prenotazioni.json");
  const { viewMode } = useContext(ViewModeContext);
  const inactiveColor = viewMode === "dark-mode" ? "white" : "black";

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h1>Prenotazioni</h1>
      {data.map((i) => {
        return (
          <p key={i.id}>
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
          </p>
        );
      })}
      <Outlet />
    </>
  );
}
