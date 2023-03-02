import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import getPromo from "../services/firebase/utils/getPromo";

import getImgFromStorage from "../services/firebase/utils/getImgFromStorage";

const Promo = () => {
  const [promoList, setPromoList] = useState([]);
  // const promoList = [
  //   {
  //     id: 0,
  //     title: "first",
  //     text: "First Promo for test",
  //     img: "gs://beauty-salon-6f4ac.appspot.com/img/promo/promo_boxes.jpg",
  //   },
  // ];

  const feachPromoList = async () => {
    const promos = await getPromo();
    if (promos.length > 0) {
      promos.map(async (promo) => {
        const imgSrc = await getImgFromStorage(promo.imgUrl);
        console.log(imgSrc);
      });
    }
  };

  useEffect(() => {
    feachPromoList();
  }, []);

  return (
    <div className="container">
      <div className="promo">
        <Row xs={1} md={2} className="g-4">
          {promoList.map((promo) => (
            <Col key={promo.id}>
              <Card>
                <Card.Img variant="top" src="{imgSrc}" />
                <Card.Body>
                  <Card.Title>{promo.title}</Card.Title>
                  <Card.Text>{promo.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Promo;
