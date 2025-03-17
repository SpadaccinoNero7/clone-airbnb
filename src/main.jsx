import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import InfoPage from "./components/navbarTemporanea/infoPage/InfoPage.jsx";
import HomePage from "./components/HomePage.jsx";
import Contatti from "./components/navbarTemporanea/contatti/Contatti.jsx";
import Prenotazioni from "./components/navbarTemporanea/prenotazioni/Prenotazioni.jsx";
import Prenotazione from "./components/navbarTemporanea/prenotazioni/Prenotazione.jsx";
import NotFound from "./components/notFound/notFound.jsx";
import SingleCard from "./components/card/singelCard/SingleCard.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import LoginForm from "./components/loginForm/LoginForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginForm />} />
          <Route index element={<Navigate to="login" />} />
          <Route path="/" element={<HomePage />}>
            <Route path="firstsection" element={<App />} />
            <Route path="infopage" element={<InfoPage />} />
            <Route path="contatti" element={<Contatti />} />
            <Route path="prenotazioni" element={<Prenotazioni />}>
              <Route path=":prenotazioneId" element={<Prenotazione />} />
            </Route>
          </Route>
          <Route path="singlecard/:cardId" element={<SingleCard />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
