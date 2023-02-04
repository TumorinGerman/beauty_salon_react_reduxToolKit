import React, { useState, useRef, useEffect } from "react";
import { Button, Form, FloatingLabel, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userLogining, addUserInfo } from "../redux/slices/userSlice";
import createUserWithEmail from "../services/firebase/utils/createUserWithEmail";
import sendVerificationEmail from "../services/firebase/utils/sendVerificationEmail";
import addDocToCollectionUser from "../services/firebase/utils/addDocToCollectionUser";

const CreateNewClient = () => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    isUserCreated: false,
    userInfo: {
      email: "",
      password: "",
      nickName: "",
      firstName: "",
      secondName: "",
      phoneNumber: "",
      additional: "",
    },
  });

  const {
    email,
    password,
    nickName,
    firstName,
    secondName,
    phoneNumber,
    additional,
  } = values.userInfo;

  const validationForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Please provide a valid Email.";

    if (!password || password.length < 6)
      newErrors.password =
        "Please enter Password or your password is too short";

    return newErrors;
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    const formErrors = validationForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      e.stopPropagation();
    } else {
      const loginedUser = await createUserWithEmail(email, password);
      await sendVerificationEmail();
      if (loginedUser) {
        if (loginedUser.emailVerified) {
          dispatch(userLogining(loginedUser.uid));
        }
        const infoToSend = { ...values.userInfo };
        delete infoToSend.password;
        dispatch(addUserInfo(infoToSend));
        await addDocToCollectionUser(loginedUser.uid, infoToSend);
        setValues({
          ...values,
          isUserCreated: true,
        });
      }
    }
  };

  const handleChange = (e) => {
    const nameOfProperties = e.target.id;
    const userInfoUpdate = {
      ...values.userInfo,
      [nameOfProperties]: e.target.value,
    };
    const stateUpdate = { ...values, userInfo: userInfoUpdate };
    setValues(stateUpdate);

    if (!!errors[nameOfProperties])
      setErrors({
        ...errors,
        [nameOfProperties]: null,
      });
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
      <Form noValidate onSubmit={submitHandle}>
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
                    isInvalid={!!errors.email}
                    value={email}
                    ref={inputEmail}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="8" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className={!!errors.password && "red_border"}
                    required
                    type="text"
                    min="6"
                    placeholder="Password"
                    isInvalid={!!errors.password}
                    value={password}
                    onChange={handleChange}
                  />
                  <Form.Text id="validationCustom01" muted>
                    Your password must be more then 6 characters, and must not
                    contain spaces, special characters, or emoji.
                  </Form.Text>
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
            </div>
            <div className="user_form_information_additional">
              <h4>Dodatkowe informacje</h4>
              <Form.Group className="mb-3" controlId="nickName">
                <FloatingLabel
                  controlId="nickName"
                  label="Nickname"
                  className="mb-3"
                >
                  <Form.Control
                    type="name"
                    placeholder="Nickname"
                    value={nickName}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <Form.Text muted>
                  Nazwa, która będzie wyświetlana na stronie
                </Form.Text>
              </Form.Group>
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateNewClient;
