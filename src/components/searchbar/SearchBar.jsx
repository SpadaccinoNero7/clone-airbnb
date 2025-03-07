import "./searchbar.scss";
import styles from "./searchbar.module.scss";
import schema from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    setMinDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            <input
              type="date"
              {...register("returnDate")}
              min={minDate}
            ></input>
            {errors.returnDate && <p>{errors.returnDate.message}</p>}
          </div>
          <div className={`right-search ${styles.hoverSection}`}>
            <h4>Chi</h4>
            <p>Aggiungi ospiti</p>
          </div>
          <div className={`${styles.lenteingrandimento}`}>
            <SearchIcon />
          </div>
        </div>
      </div>
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default SearchBar;
