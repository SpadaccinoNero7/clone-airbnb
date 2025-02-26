import "./header.scss";
import styles from "./header.module.scss";
import AffittaConAirbnb from "../affittaConAirbnb/AffittaConAirbnb";

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
        <AffittaConAirbnb />
      </div>
    </div>
  );
};

export default Header;
