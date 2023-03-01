import React from "react";
import Map from "../components/Map";
import OrderForm from "../components/OrderForm";

const Contact = () => {
  return (
    <div className="container">
      <div className="contacts">
        <OrderForm />
        <Map />
      </div>
    </div>
  );
};

export default Contact;
