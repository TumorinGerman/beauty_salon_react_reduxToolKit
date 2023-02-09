import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";

import { fetchServices } from "../redux/slices/servicesSlice";

const Price = () => {
  const [priceList, setPriceList] = useState([]);

  const dispatch = useDispatch();
  const { services, isLoaded, fetchStatus } = useSelector(
    (state) => state.services
  );

  const getPrice = async () => {
    try {
      if (isLoaded) {
        setPriceList(services);
      } else {
        dispatch(fetchServices());
      }
    } catch (error) {
      alert("Error downloading Price!");
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
