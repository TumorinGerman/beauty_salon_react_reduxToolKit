import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import createUserWithEmail from "./utils/createUserWithEmail";
import { auth } from "./firebase_config";

const FirebaseLogin = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const submitHandle = (e) => {
    e.preventDefault();
    const { email, password } = values;
    createUserWithEmail(auth, email, password);
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

  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={values.email}
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

export default FirebaseLogin;
