import "./header.scss";
import styles from "./header.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";

const Header = () => {
  return (
    <div className="header">
      <div className="airbnb-logo">
        <a href="https://www.airbnb.it" target="blank">
          <img src="src\assets\Airbnb-Logo.wine.png" alt="airbnb-logo"></img>
        </a>
      </div>

      <div className={`soggiorni ${styles.hoverSectionPointer}`}>
        <h3>Soggiorni</h3>
      </div>
      <div className={`esperienze ${styles.hoverSectionPointer}`}>
        <h3>Esperienze</h3>
      </div>

      <div className={`affittaconairbnb ${styles.hoverSectionPointer}`}>
        <h4>Affitta con Airbnb</h4>
        <LanguageIcon />
      </div>

      <div className={`altra-roba ${styles.hoverSectionPointer}`}>
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
    </div>
  );
};

export default Header;
