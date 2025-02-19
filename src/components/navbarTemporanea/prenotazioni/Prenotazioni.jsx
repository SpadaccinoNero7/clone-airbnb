import { NavLink, Outlet } from "react-router-dom";

export default function Prenotazioni() {
  const prenotazioni = [1, 2, 3, 4, 5];
  return (
    <>
      <h1>Prenotazioni</h1>
      {prenotazioni.map((i) => {
        return (
          <NavLink key={i} to={`${i}`}>
            Prenotazione {i}
          </NavLink>
        );
      })}
      <Outlet />
    </>
  );
}
