import "./header.scss";
import styles from "./header.module.scss";

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
        <img src="src\assets\sfera-lingue-airbnb.jpeg" alt="language sphere" />
      </div>

      <div className={`altra-roba ${styles.hoverSectionPointer}`}>
        <details>
          <summary>
            <img src="src\assets\menu-airbnb.jpg" alt="menu" />
            <img src="src\assets\person-icon-airbnb.jpeg" alt="icon person" />
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
