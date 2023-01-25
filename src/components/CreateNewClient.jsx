import React, { useState, useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogining } from "../redux/slices/userSlice";
import createUserWithEmail from "../services/firebase/utils/createUserWithEmail";

const CreateNewClient = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    isUserCreated: false,
    email: "",
    password: "",
  });

  const submitHandle = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    const loginedUser = await createUserWithEmail(email, password);
    console.log(loginedUser);
    if (loginedUser) {
      dispatch(userLogining(loginedUser.uid));
      setValues({
        ...values,
        isUserCreated: true,
      });
    }
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

  if (values.isUserCreated) {
    return (
      <div className="container">
        <h3>Użytkownik został pomyślnie utworzony.</h3>
        <h6>The user has been successfully created.</h6>
        <Link to="/">
          <p>Wróć do strony głównej</p>
          <p>Go to home page</p>
        </Link>
      </div>
    );
  }

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
