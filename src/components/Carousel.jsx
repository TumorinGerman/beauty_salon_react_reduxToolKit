import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselOfServices() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/services/mezaterapia.jpg"
          alt="mezaterapia"
        />

        <Carousel.Caption>
          <h3>Mezoterapia</h3>
          <p>igłowa, microigłowa</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/services/piling.jpg"
          alt="piling"
        />
        <Carousel.Caption>
          <h3>Peeling</h3>
          <p>chemiczny, kawitacyjny</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/services/massage.jpg"
          alt="massage"
        />

        <Carousel.Caption>
          <h3>Masaż klasyczny</h3>
          <p>twarz, szyja, dekolt</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselOfServices;
