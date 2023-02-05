import React, { useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import addDocToCollectionOrder from "../services/firebase/utils/addDocToCollectionOrder";
import moment from "moment";

const OrderForm = () => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    firstName: "",
    phoneNumber: "",
    additional: "",
  });

  const { email, firstName, phoneNumber, additional } = values;

  const validationForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Please provide a valid Email.";
    if (!firstName) newErrors.firstName = "Please provide your Name.";
    if (!phoneNumber)
      newErrors.phoneNumber = "Please provide a valid phone number.";
    return newErrors;
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    const formErrors = validationForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      e.stopPropagation();
    } else {
      const orderObj = {
        ...values,
        orderDate: moment().format(),
        isDone: false,
      };
      console.table(orderObj);
      const addingResult = await addDocToCollectionOrder(orderObj);
      addingResult
        ? console.log("information saved")
        : alert("Wiadomość nie została wysłana");
      //Надо сделать верификацию Емаил, сообщение об отправке (модальное)
    }
  };

  const handleChange = (e) => {
    const nameOfProperties = e.target.id;
    const userInfoUpdate = {
      ...values,
      [nameOfProperties]: e.target.value,
    };
    setValues(userInfoUpdate);
    if (!!errors[nameOfProperties])
      setErrors({
        ...errors,
        [nameOfProperties]: null,
      });
  };

  return (
    <div className="order_form">
      <h4>
        Możesz wypełnić formularz, a my oddzwonimy w celu umówienia wizyty.
      </h4>
      <FloatingLabel controlId="email" label="Email address" className="mb-3">
        <Form.Control
          type="email"
          placeholder="name@example.com"
          required
          isInvalid={!!errors.email}
          value={email}
          onChange={handleChange}
        />
        <Form.Text id="email" muted>
          Wpisz swoje email
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId="firstName" label="Name" className="mb-3">
        <Form.Control
          type="input"
          placeholder="Name"
          required
          isInvalid={!!errors.firstName}
          value={firstName}
          onChange={handleChange}
        />
        <Form.Text id="name" muted>
          Wpisz swoje imię
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors.firstName}
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId="phoneNumber" label="Phone" className="mb-3">
        <Form.Control
          type="input"
          placeholder="Phone"
          required
          isInvalid={!!errors.phoneNumber}
          value={phoneNumber}
          onChange={handleChange}
        />
        <Form.Text id="phone" muted>
          Wpisz numer telefonu
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors.phoneNumber}
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId="additional" label="Comments" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
          value={additional}
          onChange={handleChange}
        />
        <Form.Text id="phone" muted>
          Krótko opisz usługi, których potrzebujesz
        </Form.Text>
      </FloatingLabel>
      <Button variant="primary" type="submit" onClick={submitHandle}>
        Wysłać
      </Button>
    </div>
  );
};

export default OrderForm;
