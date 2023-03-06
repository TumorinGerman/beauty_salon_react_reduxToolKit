import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import OrderForm from "../components/OrderForm";
import OrderFormUser from "../components/OrderFormUser";

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
            <ul className="slogans">
              <li>Uroda zaczyna się tutaj: Twoja droga do doskonałości.</li>
              <li>Piękna skóra to klucz do pewności siebie</li>
              <li>Zapomnij o stresie, pozwól nam zadbać o Twoje piękno</li>
              <li>Odkryj swoją urodę w pełnym blasku z naszym salonem</li>
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
          <div className="order_forms">
            <OrderForm />
            <OrderFormUser />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
