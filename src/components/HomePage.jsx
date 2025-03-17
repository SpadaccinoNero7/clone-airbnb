import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import SearchBar from "./searchbar/SearchBar";
import NavbarTemporanea from "./navbarTemporanea/NavbarTemporanea";
import Wrapper from "./wrapper/Wrapper";
import ViewModeContextProvider from "../context/ViewModeContext";

export default function HomePage() {
  return (
    <>
      <ViewModeContextProvider>
        <Wrapper>
          <Header />
          <SearchBar />
          <NavbarTemporanea />
          <Outlet />
        </Wrapper>
      </ViewModeContextProvider>
    </>
  );
}
