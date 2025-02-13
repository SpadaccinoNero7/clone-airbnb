import { NavLink } from "react-router-dom";
import { ViewModeContext } from "../../context/ViewModeContext";
import { useContext } from "react";

export default function NavbarTemporanea() {
  const { viewMode } = useContext(ViewModeContext);
  const inactiveColor = viewMode === "dark-mode" ? "white" : "black";
  return (
    <>
      <nav>
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
      </nav>
    </>
  );
}
