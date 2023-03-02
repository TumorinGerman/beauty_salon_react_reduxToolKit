import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import promoList from "../promo.json";
// import getPromo from "../services/firebase/utils/getPromo";

// import getImgFromStorage from "../services/firebase/utils/getImgFromStorage";

const Promo = () => {
  console.log(promoList);
  // functionality for dowloading images from backend

  // const feachPromoList = async () => {
  //   const promos = await getPromo();
  //   console.log(promos);
  //   if (promos.length > 0) {
  //     promos.map(async (promo) => {
  //       const imgSrc = await getImgFromStorage(promo.imgUrl);
  //       console.log(imgSrc);
  //     });
  //   }
  // };

  return (
    <div className="container">
      <div className="promo">
        <Row xs={1} md={2} xl={3} className="g-4">
          {promoList.map((promo) => (
            <Col key={promo.id}>
              <Card>
                <Card.Img variant="top" src={promo.img} />
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
