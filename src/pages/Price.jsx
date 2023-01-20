import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Price = () => {
  const [priceList, setPriceList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getPrice = async () => {
    try {
      const { data } = await axios.get(
        "https://beauty-salon-6f4ac-default-rtdb.europe-west1.firebasedatabase.app/price.json?print=pretty"
      );
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
    return <div>Loading</div>;
  }

  return (
    <div className="container">
      <Table bordered hover>
        <thead>
          <tr>
            <th>Zabieg</th>
            <th>Rodzaje zabiegów</th>
            <th>Cena</th>
          </tr>
        </thead>
        <tbody>
          {priceList.map(({ name, services }) => (
            <React.Fragment>
              <tr>
                <td colSpan={3}>{name}</td>
              </tr>
              {services.map(({ name, price }) => (
                <tr>
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
  );
};

export default Price;
