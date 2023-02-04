import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import OrderForm from "../components/OrderForm";

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
          <Link to="/services">
            <h2>Nasze Usługi</h2>
          </Link>
          <Carousel />
        </div>
      </section>
      <section className="order">
        <div className="container">
          <Link to="/">
            <h2>Umówić się</h2>
          </Link>
          <OrderForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
