import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const Menu = () => {
  const menuItems = [
    { id: 0, name: "Informacja" },
    { id: 1, name: "Zabiegi" },
    { id: 2, name: "Promocje" },
    { id: 3, name: "Сenniki" },
    { id: 4, name: "Кontakty" },
  ];
  return (
    <div className="main_menu">
      <ListGroup horizontal>
        {menuItems.map((item) => {
          return (
            <ListGroup.Item action variant="success" key={item.id}>
              {item.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Menu;
