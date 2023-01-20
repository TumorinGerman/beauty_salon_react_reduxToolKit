import React from "react";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div className="main">
      <section className="banner_top">
        <div className="container">
          <div className="text-box">
            <h1>
              Dbamy o Twoją urodę i zdrowie z najwyższym profesjonalizmem i
              uwagą
            </h1>
            <ul>
              <li>Что-нибудь умное</li>
              <li>Что-нибудь умное</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="our_service">
        <div className="container">
          <h2 align="center">Nasze Usługi</h2>
          <Carousel />
        </div>
      </section>
    </div>
  );
};

export default Home;
