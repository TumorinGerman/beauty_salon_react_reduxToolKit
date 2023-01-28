import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import createUserWithEmail from "../services/firebase/utils/createUserWithEmail";
import { useDispatch } from "react-redux";
import { userLogining } from "../redux/slices/userSlice";

function FormExample() {
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const { email, password } = values;

  const handleSubmit = async (e) => {
    console.log(validated);
    console.table(values);

    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const loginedUser = await createUserWithEmail(email, password);
      //      await sendVerificationEmail();
      if (loginedUser) {
        dispatch(userLogining(loginedUser.uid));
        setValues({
          ...values,
          isUserCreated: true,
        });
      }
    }
    setValidated(true);
  };

  const changePasswordHandle = (e) => {
    setValues({
      ...values,
      password: e.target.value,
    });
  };

  const changeEmailHandle = (e) => {
    setValues({
      ...values,
      email: e.target.value,
    });
  };

  const inputEmail = useRef(null);
  useEffect(() => {
    inputEmail.current.focus();
  }, []);

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>password</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="password"
            value={values.password}
            onChange={changePasswordHandle}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            required
            value={values.email}
            ref={inputEmail}
            onChange={changeEmailHandle}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default FormExample;
