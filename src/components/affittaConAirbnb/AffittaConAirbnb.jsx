import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import styles from "./affittaConAirbnb.module.scss";

export default function AffittaConAirbnb({ size }) {
  return (
    <div className={styles.home}>
      <h4>Affitta con Airbnb</h4>
      <LanguageIcon />
      <details>
        <summary>
          <MenuIcon />
          <PersonIcon />
        </summary>
        <ul>
          <li>Registrati</li>
          <li>Accedi</li>
          <li>Gift Card</li>
          <li>Affitta con Airbnb</li>
          <li>Proponi un'esperienza</li>
          <li>Centro Assistenza</li>
        </ul>
      </details>
    </div>
  );
}
