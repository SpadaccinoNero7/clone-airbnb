import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFetch } from "../../customHook/useFetch";
import CardResidenze from "../card/cardRedisenze/CardResidenze";
import { getUserEmail, getUserPassword } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [filterData, setFilterData] = useState([]);

  const dispatch = useDispatch();

  const { data } = useFetch("/menu.json");

  const users = useSelector((state) => state.users.users);

  const utente = users.find(
    (user) => user.email === email && user.password === password
  );

  const cardId = data.map((el) => el.id);

  const handleCheck = () => {
    dispatch(getUserEmail(email));
    dispatch(getUserPassword(password));
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      console.log("credenziali uguali");
      setIsLoggedIn(true);
      const starredPlaces = user.starredPlaces.map((place) => place.id);
      const filtered = cardId.filter((id) => starredPlaces.includes(id));
      setFilterData(filtered);
    } else {
      console.log("credenziali differenti");
      setIsLoggedIn(false);
      setFilterData([]);
    }
  };

  return (
    <>
      <h1>Login form</h1>
      <p>
        Email{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        Password{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <button type="submit" onClick={() => handleCheck()}>
        Login
      </button>
      <button onClick={() => navigate("/firstsection")} disabled={!isLoggedIn}>
        Pagina principale
      </button>
      {isLoggedIn && (
        <div>
          <h1>Dettagli utente</h1>
          <p>Nome: {utente.name}</p>
          <p>Cognome: {utente.surname}</p>
          <p>Età: {utente.age}</p>
          <p>Professione: {utente.job}</p>
          <p>Email: {utente.email}</p>
        </div>
      )}
      {isLoggedIn && (
        <div>
          <h1>Residenze preferite</h1>
          {filterData.map((id) => (
            <CardResidenze key={id} card={data.find((el) => el.id === id)} />
          ))}
        </div>
      )}
    </>
  );
}
