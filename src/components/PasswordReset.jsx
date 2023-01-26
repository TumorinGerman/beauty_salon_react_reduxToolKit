import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import userResetPassword from "../services/firebase/utils/userPasswordReset";

const PasswordReset = () => {
  const [email, setEmail] = useState("");

  const changeEmailHandle = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="container_narrow">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={changeEmailHandle}
            autoFocus
          />
        </Form.Group>
        <Form.Group>
          <p>If you want to reset you password:</p>
          <Button variant="danger" onClick={() => userResetPassword(email)}>
            click the Button
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default PasswordReset;
