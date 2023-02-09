import React, { useState } from "react";
import Meza from "../components/services/Meza";
import Peeling from "../components/services/Peeling";
import Massage from "../components/services/Massage";

const Services = () => {
  const [isOpen, setIsOpen] = useState({
    meza: false,
    peeling: false,
    massage: false,
  });

  const handleClick = (e) => {
    if (e.currentTarget.classList.contains("meza")) {
      setIsOpen({
        ...isOpen,
        meza: !isOpen.meza,
      });
    } else if (e.currentTarget.classList.contains("peeling")) {
      setIsOpen({
        ...isOpen,
        peeling: !isOpen.peeling,
      });
    } else {
      setIsOpen({
        ...isOpen,
        massage: !isOpen.massage,
      });
    }
    console.table(isOpen);
  };

  return (
    <div className="container">
      <div className="services">
        <div className="services_title">
          <h1>Nasze Usługi</h1>
        </div>
        <div className="services_items">
          <button className="item meza" onClick={handleClick}>
            <div className="item_text">
              <h3>Mezoterapia</h3>
            </div>
          </button>
          {isOpen.meza ? <Meza /> : null}
          <button className="item peeling" onClick={handleClick}>
            <div className="item_text">
              <h3>Peeling</h3>
            </div>
          </button>
          {isOpen.peeling ? <Peeling /> : null}
          <button className="item massage" onClick={handleClick}>
            <div className="item_text">
              <h3>Masaż</h3>
            </div>
          </button>
          {isOpen.massage ? <Massage /> : null}
        </div>
      </div>
    </div>
  );
};

export default Services;
