import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  const menuItems = [
    { id: 0, name: "Zabiegi", link: "/services" },
    { id: 1, name: "Promocje", link: "/" },
    { id: 2, name: "Сenniki", link: "/price" },
    { id: 3, name: "Кontakty", link: "/" },
  ];

  return (
    <div className="main_menu">
      <ListGroup horizontal>
        {menuItems.map(({ id, name, link }) => {
          return (
            <ListGroup.Item action="true" href="" variant="success" key={id}>
              <Link to={link}>{name}</Link>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default HeaderMenu;
