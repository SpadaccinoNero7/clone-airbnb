import "./searchbar.scss";
import styles from "./searchbar.module.scss";

const SearchBar = () => {
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
          <input type="date" min="2024-12-17"></input>
        </div>
        <div
          className={`middle-right-search ${styles.hoverSection} ${styles.centerText}`}
        >
          <h4>Check-out</h4>
          <input type="date" min="2024-12-17"></input>
        </div>
        <div className={`right-search ${styles.hoverSection}`}>
          <h4>Chi</h4>
          <p>Aggiungi ospiti</p>
        </div>
        <img
          src="src\assets\lenteingrandimento-airbnb.jpeg"
          alt="lente ingrandimeno"
        />
      </div>
    </div>
  );
};

export default SearchBar;
