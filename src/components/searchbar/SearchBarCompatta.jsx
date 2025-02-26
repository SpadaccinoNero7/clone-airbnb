import styles from "./searchbarcompatta.module.scss";
import AffittaConAirbnb from "../affittaConAirbnb/AffittaConAirbnb";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBarCompatta() {
  return (
    <div className={styles.searchbarcompatta}>
      <div className={styles.logo}>
        <img
          src="../assets/clone-airbnb\src\assets\Airbnb-Logo.wine.png"
          alt="airbnb-logo"
        />
      </div>
      <div className={styles.search}>
        <p>Ovunque</p>
        <p>Qualunque settimana</p>
        <p>Aggiungi ospiti</p>
        <SearchIcon />
      </div>
      <div className={styles.affitta}>
        <AffittaConAirbnb />
      </div>
    </div>
  );
}
