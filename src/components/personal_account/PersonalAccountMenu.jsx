import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";

import { useDispatch } from "react-redux";
import LogOut from "../../services/firebase/utils/LogOut";
import { userLogOut } from "../../redux/slices/userSlice";

const PersonalAccountMenu = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const config = {
    name: "Enable both scrolling & backdrop",
    scroll: true,
    backdrop: true,
  };

  const handleLogOut = async () => {
    await LogOut();
    dispatch(userLogOut());
  };

  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        Menu
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...config}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav variant="tabs" className="flex-column">
            <Nav.Link href="/personal_account">Umówić się na wizytę</Nav.Link>
            <Nav.Link href="/user_information" eventKey="link-1">
              Twoje dane
            </Nav.Link>
          </Nav>
          <Button variant="danger" onClick={handleLogOut}>
            <a href="/">LogOut</a>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default PersonalAccountMenu;
