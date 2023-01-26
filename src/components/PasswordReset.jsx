import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import userResetPassword from "../services/firebase/utils/userPasswordReset";

const PasswordReset = () => {
  const [resetState, setResetState] = useState({
    email: "",
    isReset: false,
  });

  const changeEmailHandle = (e) => {
    setResetState({
      ...resetState,
      email: e.target.value,
    });
  };

  const handleUserResetPassword = (email) => {
    setResetState({
      ...resetState,
      isReset: userResetPassword(email),
    });
  };

  if (resetState.isReset) {
    return (
      <div className="container_narrow">
        <h4>We have sent instructions to your email.</h4>
        <Link to="/">Home</Link>
      </div>
    );
  }

  return (
    <div className="container_narrow">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="name@example.com"
            value={resetState.email}
            onChange={changeEmailHandle}
            autoFocus
          />
        </Form.Group>
        <Form.Group>
          <p>If you want to reset you password:</p>
          <Button
            variant="danger"
            onClick={() => handleUserResetPassword(resetState.email)}
          >
            click the Button
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default PasswordReset;
