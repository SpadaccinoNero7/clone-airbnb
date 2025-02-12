import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlingBall,
  faCampground,
  faChessRook,
  faCity,
  faHouseCircleCheck,
  faHouseFloodWater,
  faHouseFloodWaterCircleArrowRight,
  faIgloo,
  faMeteor,
  faMountain,
  faMugHot,
  faObjectUngroup,
  faPersonShelter,
  faPersonSkiing,
  faPersonSkiingNordic,
  faPersonSwimming,
  faPersonThroughWindow,
  faQuestion,
  faSailboat,
  faTableCellsLarge,
  faTents,
  faTicket,
  faTree,
  faTriangleExclamation,
  faUmbrellaBeach,
  faWarehouse,
  faWater,
  faWheatAwn,
  faWineBottle,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./filterlist.scss";
import { useState, useEffect } from "react";

const FilterList = () => {
  const slides = [
    { icon: faPersonSkiingNordic, text: "sci" },
    { icon: faTicket, text: "icone" },
    { icon: faPersonThroughWindow, text: "vista mozzafiato" },
    { icon: faMeteor, text: "wow!" },
    { icon: faMountain, text: "grotte" },
    { icon: faWater, text: "lago" },
    { icon: faPersonSkiing, text: "sulle piste" },
    { icon: faPersonShelter, text: "baite" },
    { icon: faHouseCircleCheck, text: "minicase" },
    { icon: faHouseCircleCheck, text: "case sull'albero" },
    { icon: faIgloo, text: "cupole" },
    { icon: faWarehouse, text: "ville" },
    { icon: faCampground, text: "campagna" },
    { icon: faHouseFloodWaterCircleArrowRight, text: "sull'acqua" },
    { icon: faTableCellsLarge, text: "luoghi remoti" },
    { icon: faChessRook, text: "castelli" },
    { icon: faPersonSwimming, text: "piscine incredibili" },
    { icon: faTents, text: "agriturismi" },
    { icon: faQuestion, text: "isole" },
    { icon: faSailboat, text: "barche" },
    { icon: faHouseFloodWater, text: "fronte lago" },
    { icon: faQuestion, text: "luxe" },
    { icon: faUmbrellaBeach, text: "spiaggia" },
    { icon: faTree, text: "parchi nazionali" },
    { icon: faObjectUngroup, text: "design" },
    { icon: faWarehouse, text: "dimore storiche" },
    { icon: faMugHot, text: "b&b" },
    { icon: faCampground, text: "camping" },
    { icon: faUmbrellaBeach, text: "tropicali" },
    { icon: faTriangleExclamation, text: "a-frame" },
    { icon: faWineBottle, text: "vigneti" },
    { icon: faCity, text: "città popolari" },
    { icon: faWheatAwn, text: "fienili" },
    { icon: faHouseFloodWater, text: "case galleggianti" },
    { icon: faBowlingBall, text: "spazi per giocare" },
    { icon: faChessRook, text: "torri" },
    { icon: faQuestion, text: "case organiche" },
    { icon: faQuestion, text: "iurte" },
    { icon: faQuestion, text: "stanze" },
    { icon: faQuestion, text: "polo nord" },
    { icon: faQuestion, text: "mulini" },
    { icon: faQuestion, text: "container" },
    { icon: faQuestion, text: "cucine professionali" },
    { icon: faQuestion, text: "in cima al mondo" },
    { icon: faQuestion, text: "pianoforti a coda" },
    { icon: faQuestion, text: "novità" },
    { icon: faQuestion, text: "spazi creativi" },
    { icon: faQuestion, text: "case cicladiche" },
    { icon: faQuestion, text: "dammusi" },
    { icon: faQuestion, text: "trulli" },
    { icon: faQuestion, text: "di tendenza" },
    { icon: faQuestion, text: "riad" },
    { icon: faQuestion, text: "nel deserto" },
    { icon: faQuestion, text: "surf" },
    { icon: faQuestion, text: "hanok" },
    { icon: faQuestion, text: "ryokan" },
    { icon: faQuestion, text: "capanne" },
    { icon: faQuestion, text: "casas particulares" },
    { icon: faQuestion, text: "golf" },
    { icon: faQuestion, text: "minsu" },
    { icon: faQuestion, text: "spazi accessibili" },
    { icon: faQuestion, text: "camper" },
  ];

  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const calculateItemsPerSlide = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1300) {
      setItemsPerSlide(17);
    } else if (screenWidth >= 1000) {
      setItemsPerSlide(10);
    } else if (screenWidth >= 600) {
      setItemsPerSlide(3);
    } else {
      setItemsPerSlide(2);
    }
  };

  useEffect(() => {
    calculateItemsPerSlide();
    window.addEventListener("resize", calculateItemsPerSlide);
    return () => {
      window.removeEventListener("resize", calculateItemsPerSlide);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(slides.length / itemsPerSlide)
    );
  };

  const prevSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(slides.length / itemsPerSlide)) %
        Math.ceil(slides.length / itemsPerSlide)
    );
  };

  const currentSlides = slides.slice(
    currentSlideIndex * itemsPerSlide,
    (currentSlideIndex + 1) * itemsPerSlide
  );

  return (
    <div className="filterList">
      <h1>Filter list</h1>
      <div className="slides">
        {currentSlides.map((slide, index) => (
          <div className="slide" key={index}>
            <FontAwesomeIcon icon={slide.icon} />
            <br />
            <span>{slide.text}</span>
          </div>
        ))}
      </div>
      <div className="arrows">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={prevSlide}
          className="arrow-left"
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          onClick={nextSlide}
          className="arrow-right"
        />
      </div>
    </div>
  );
};

export default FilterList;
