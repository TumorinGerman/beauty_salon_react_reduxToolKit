import React, { useState, useRef, useEffect } from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogining } from "../redux/slices/userSlice";
import createUserWithEmail from "../services/firebase/utils/createUserWithEmail";
import sendVerificationEmail from "../services/firebase/utils/sendVerificationEmail";

const CreateNewClient = () => {
  const dispatch = useDispatch();

  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState({
    isUserCreated: false,
    email: "",
    password: "",
    firstName: "",
    secondName: "",
    phoneNumber: "",
    additional: "",
  });

  const { email, password, firstName, secondName, phoneNumber, additional } =
    values;

  const submitHandle = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      setValidated(true);
      const loginedUser = await createUserWithEmail(email, password);
      await sendVerificationEmail();
      if (loginedUser) {
        dispatch(userLogining(loginedUser.uid));
        setValues({
          ...values,
          isUserCreated: true,
        });
      }
    }
  };

  const handleChange = (e) => {
    console.log(e.target);
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
      <Form className="user_form" validated={validated} onSubmit={submitHandle}>
        <h3>Nowy klient</h3>
        <div className="user_form_information">
          <div className="user_form_information_main">
            <h4>Obowiązkowe informacje</h4>
            <Form.Group className="mb-3" controlId="email">
              <FloatingLabel
                controlId="email"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  value={values.email}
                  ref={inputEmail}
                  onChange={changeEmailHandle}
                />
              </FloatingLabel>
              {!validated ? <p>Please provide a valid email.</p> : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <FloatingLabel
                controlId="password"
                label="Password"
                className="mb-3"
              >
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={changePasswordHandle}
                />
              </FloatingLabel>
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be more then 6 characters, and must not
                contain spaces, special characters, or emoji.
              </Form.Text>
            </Form.Group>
          </div>
          <div className="user_form_information_additional">
            <h4>Dodatkowe informacje</h4>
            <Form.Group className="mb-3" controlId="formFirstName">
              <FloatingLabel
                controlId="formFirstName"
                label="First name"
                className="mb-3"
              >
                <Form.Control
                  type="name"
                  placeholder="FirstName"
                  value={firstName}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <Form.Text muted>Imię</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSecondName">
              <FloatingLabel
                controlId="formSecondName"
                label="Second name"
                className="mb-3"
              >
                <Form.Control
                  placeholder="Second name"
                  value={secondName}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <Form.Text muted>Nazwisko</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhoneNumber">
              <FloatingLabel
                controlId="formPhoneNumber"
                label="Phone number"
                className="mb-3"
              >
                <Form.Control
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <Form.Text muted>Numer telefonu</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="textarea">
              <Form.Label>Dodatkowy</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Write something here… "
                maxLength="200"
                rows={3}
                value={additional}
                onChange={handleChange}
              />
              <Form.Text muted>maximum 200 characters</Form.Text>
            </Form.Group>
          </div>
        </div>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateNewClient;
