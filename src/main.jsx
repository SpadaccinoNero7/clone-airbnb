import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import InfoPage from "./components/navbarTemporanea/infoPage/InfoPage.jsx";
import HomePage from "./components/HomePage.jsx";
import Contatti from "./components/navbarTemporanea/contatti/Contatti.jsx";
import Prenotazioni from "./components/navbarTemporanea/prenotazioni/Prenotazioni.jsx";
import Prenotazione from "./components/navbarTemporanea/prenotazioni/Prenotazione.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Navigate to="firstsection" />} />
          <Route path="firstsection" element={<App />} />
          <Route path="infopage" element={<InfoPage />} />
          <Route path="contatti" element={<Contatti />} />
          <Route path="prenotazioni" element={<Prenotazioni />}>
            <Route path=":prenotazioneId" element={<Prenotazione />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
