import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import SearchBar from "./searchbar/SearchBar";
import NavbarTemporanea from "./navbarTemporanea/NavbarTemporanea";

export default function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <Header />
      <SearchBar />
      <NavbarTemporanea />
      <Outlet />
    </>
  );
}
