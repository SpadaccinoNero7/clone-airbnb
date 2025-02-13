import "./searchbar.scss";
import styles from "./searchbar.module.scss";
import schema from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    setMinDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  return (
    <div className="external-searchbar">
      <div className="searchbar">
        <div className={`left-search ${styles.hoverSection}`}>
          <h4>Dove</h4>
          <p>Cerca destinazioni</p>
        </div>
        <div
          className={`middle-left-search ${styles.hoverSection} ${styles.centerText}`}
        >
          <h4>Check-in</h4>
          <input type="date" {...register("leaveDate")} min={minDate}></input>
          {errors.leaveDate && <p>{errors.leaveDate.message}</p>}
        </div>
        <div
          className={`middle-right-search ${styles.hoverSection} ${styles.centerText}`}
        >
          <h4>Check-out</h4>
          <input type="date" {...register("returnDate")} min={minDate}></input>
          {errors.returnDate && <p>{errors.returnDate.message}</p>}
        </div>
        <div className={`right-search ${styles.hoverSection}`}>
          <h4>Chi</h4>
          <p>Aggiungi ospiti</p>
        </div>
        <img
          src="src\assets\lenteingrandimento-airbnb.jpeg"
          alt="lente ingrandimeno"
          onClick={() => alert("Cliccato")}
        />
      </div>
    </div>
  );
};

export default SearchBar;
