import React, { useState, useRef, useEffect } from "react";
import { Button, Form, FloatingLabel, Row, Col } from "react-bootstrap";
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
      const loginedUser = await createUserWithEmail(email, password);
      await sendVerificationEmail();
      if (loginedUser) {
        if (loginedUser.emailVerified) {
          dispatch(userLogining(loginedUser.uid));
        }
        setValues({
          ...values,
          isUserCreated: true,
        });
      }
    }
    setValidated(true);
  };

  const handleChange = (e) => {
    console.log(e.target.id);
    const nameOfProperties = e.target.id;
    setValues({
      ...values,
      [nameOfProperties]: e.target.value,
    });
    console.table(values);
  };

  const inputEmail = useRef(null);
  useEffect(() => {
    inputEmail.current.focus();
  }, []);

  if (values.isUserCreated) {
    return (
      <div className="container">
        <h3>
          Użytkownik został pomyślnie utworzony. Wysłaliśmy Ci link na Twój
          e-mail
        </h3>
        <p>Po potwierdzeniu e-maila przejdź do strony głównej lub odśwież.</p>
        <h6>
          The user has been successfully created. Confirm your email. We have
          sent you a link to your email
        </h6>
        <p>After confirming Email, go to the main page or refresh.</p>
        <br></br>
        <p>
          <a href="/">Wróć do strony głównej</a>
        </p>
        <p>
          <a href="/">Go to home page</a>
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      <Form noValidate validated={validated} onSubmit={submitHandle}>
        <div className="user_form">
          <h3>Nowy klient</h3>
          <div className="user_form_information">
            <div className="user_form_information_main">
              <h4>Obowiązkowe informacje</h4>
              <Row className="mb-3">
                <Form.Group as={Col} md="8" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    required
                    value={values.email}
                    ref={inputEmail}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="8" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <Form.Text id="validationCustom01" muted>
                    Your password must be more then 6 characters, and must not
                    contain spaces, special characters, or emoji.
                  </Form.Text>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
            </div>
            <div className="user_form_information_additional">
              <h4>Dodatkowe informacje</h4>
              <Form.Group className="mb-3" controlId="firstName">
                <FloatingLabel
                  controlId="firstName"
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
              <Form.Group className="mb-3" controlId="secondName">
                <FloatingLabel
                  controlId="secondName"
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
              <Form.Group className="mb-3" controlId="phoneNumber">
                <FloatingLabel
                  controlId="phoneNumber"
                  label="Phone number"
                  pattern="^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$"
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
              <Form.Group className="mb-3" controlId="additional">
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
        </div>
      </Form>
    </div>
  );
};

export default CreateNewClient;
