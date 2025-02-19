import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ViewModeContext } from "../../../context/ViewModeContext";

export default function Prenotazioni() {
  const prenotazioni = [1, 2, 3, 4, 5];
  const { viewMode } = useContext(ViewModeContext);
  const inactiveColor = viewMode === "dark-mode" ? "white" : "black";
  return (
    <>
      <h1>Prenotazioni</h1>
      {prenotazioni.map((i) => {
        return (
          <NavLink
            key={i}
            to={`${i}`}
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : inactiveColor,
              };
            }}
          >
            Prenotazione {i}
          </NavLink>
        );
      })}
      <Outlet />
    </>
  );
}
