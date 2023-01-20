import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const HeaderMenu = () => {
  const [activeLink, setActiveLink] = useState("/");
  const menuItems = [
    { id: 0, name: "Informacja", link: "/" },
    { id: 1, name: "Zabiegi", link: "/" },
    { id: 2, name: "Promocje", link: "/" },
    { id: 3, name: "Сenniki", link: "/price" },
    { id: 4, name: "Кontakty", link: "/" },
  ];

  const changePage = (id) => {
    const currMenu = menuItems.filter((obj) => {
      return obj.id === id;
    });
    setActiveLink(currMenu[0].link);
  };

  return (
    <div className="main_menu">
      <ListGroup horizontal>
        {menuItems.map(({ id, name }) => {
          return (
            <ListGroup.Item
              action="true"
              href={activeLink}
              variant="success"
              key={id}
              onClick={() => changePage(id)}
            >
              {name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default HeaderMenu;
