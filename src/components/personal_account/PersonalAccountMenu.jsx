import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import PersonalAccountMain from "./PersonalAccountMain";
import UserInformationPage from "./UserInformationPage";
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
          <Nav variant="tabs" defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
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
