import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

import getPriceFireStore from "../services/firebase/utils/getPrice";

const Price = () => {
  const [priceList, setPriceList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getPrice = async () => {
    try {
      const data = await getPriceFireStore();
      setPriceList(data);
      setIsLoaded(true);
    } catch (error) {
      alert("Error downloding Price!");
      console.log(error);
    }
  };

  useEffect(() => {
    getPrice();
  }, [isLoaded]);

  if (!isLoaded) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="price">
        <Table bordered hover>
          <thead>
            <tr className="price_header">
              <th>Zabieg</th>
              <th>Rodzaje zabiegów</th>
              <th>Cena</th>
            </tr>
          </thead>
          <tbody>
            {priceList.map(({ title, services }) => (
              <React.Fragment key={title}>
                <tr className="price_title">
                  <td colSpan={3}>{title}</td>
                </tr>
                {services.map(({ id, name, price }) => (
                  <tr key={id}>
                    <td></td>
                    <td>{name}</td>
                    <td>{price}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Price;
