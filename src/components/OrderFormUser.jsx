import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import FirebaseLogin from "./FirebaseLogin";

const OrderFormUser = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const { isLogined, userInformation } = useSelector((state) => state.userAuth);

  const handleShowLoginForm = () => setShowLoginForm(true);

  return (
    <>
      <Form className="order_form_user">
        <h4>Jeśli masz konto - możesz wybrać dzień i godzinę nagrania.</h4>
        <p>Kliknij „Moje konto” lub „Zaloguj się”</p>
        {isLogined ? (
          <Button variant="outline-primary">
            <Link to="/create_new_client">
              <span>Moje konto</span> {userInformation.nickName}
            </Link>
          </Button>
        ) : (
          <Button onClick={handleShowLoginForm}>
            <span>Zaloguj się</span>
          </Button>
        )}
        <p>Jeśli nie masz konta - kliknij "Utwórz nowego klienta"</p>
        <Link to="/create_new_client">Utwórz nowego klienta</Link>
      </Form>
      {showLoginForm ? (
        <FirebaseLogin
          show={showLoginForm}
          setShowLoginForm={setShowLoginForm}
        />
      ) : null}
    </>
  );
};

export default OrderFormUser;
