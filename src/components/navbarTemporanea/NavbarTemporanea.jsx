import { NavLink } from "react-router-dom";

export default function NavbarTemporanea() {
  return (
    <>
      <nav>
        <NavLink
          to="firstsection"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "black",
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
              color: isActive ? "red" : "black",
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
              color: isActive ? "red" : "black",
            };
          }}
        >
          Contatti
        </NavLink>
      </nav>
    </>
  );
}
