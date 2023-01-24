import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import createUserWithEmail from "../services/firebase/utils/createUserWithEmail";

const CreateNewClient = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const submitHandle = (e) => {
    e.preventDefault();
    const { email, password } = values;
    createUserWithEmail(email, password);
  };

  const changeEmailHandle = (e) => {
    setValues({
      ...values,
      email: e.target.value,
    });
  };

  const changePasswordHandle = (e) => {
    setValues({
      ...values,
      password: e.target.value,
    });
  };

  const inputEmail = useRef(null);
  useEffect(() => {
    inputEmail.current.focus();
  }, []);

  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={values.email}
            ref={inputEmail}
            onChange={changeEmailHandle}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={changePasswordHandle}
          />
        </Form.Group>
        <Button onClick={submitHandle} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateNewClient;
