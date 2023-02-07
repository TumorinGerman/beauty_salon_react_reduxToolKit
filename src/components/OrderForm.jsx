import React, { useState, useRef } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import addDocToCollectionOrder from "../services/firebase/utils/addDocToCollectionOrder";
import moment from "moment";
import ModalInformation from "./ModalInformation";
import sendMail from "../utils/sendMail";

const OrderForm = () => {
  const [modalShow, setModalShow] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    firstName: "",
    phoneNumber: "",
    additional: "",
  });

  const { email, firstName, phoneNumber, additional } = values;
  const form = useRef();
  const message =
    "Twoja wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce. Dziękuję.";

  const validationForm = () => {
    const regexEmail = new RegExp("^[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[.][a-z]+$");
    const regexPhone = new RegExp(
      "^(\\s*)?(\\+)?([- _():=+]?\\d[- _():=+]?){10,14}(\\s*)?$",
      ""
    );
    const newErrors = {};
    if (!email) newErrors.email = "Email is empty.";
    else if (!regexEmail.test(email))
      newErrors.email = "Please provide a valid Email.";
    if (!firstName) newErrors.firstName = "Please provide your Name.";
    if (!phoneNumber) newErrors.phoneNumber = "Phone number is empty.";
    else if (!regexPhone.test(phoneNumber))
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
      const addingResult = await addDocToCollectionOrder(orderObj);
      addingResult
        ? console.log("information saved")
        : alert("Wiadomość nie została wysłana");
      setModalShow(true);
      sendMail(form.current);
      setValues({
        email: "",
        firstName: "",
        phoneNumber: "",
        additional: "",
      });
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
    <Form className="order_form_guest" ref={form} onSubmit={submitHandle}>
      {modalShow ? <ModalInformation message={message} /> : null}
      <h4>
        Możesz wypełnić formularz, a my oddzwonimy w celu umówienia wizyty.
      </h4>
      <FloatingLabel controlId="email" label="Email address" className="mb-3">
        <Form.Control
          type="email"
          name="email"
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
          name="name"
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
          name="phone"
          placeholder="Phone"
          required
          isInvalid={!!errors.phoneNumber}
          value={phoneNumber}
          onChange={handleChange}
        />
        <Form.Text id="phone" muted>
          Wpisz swój numer telefonu w formacie +48 NUMBER
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors.phoneNumber}
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId="additional" label="Comments" className="mb-3">
        <Form.Control
          as="textarea"
          name="message"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
          value={additional}
          onChange={handleChange}
        />
        <Form.Text id="additional" muted>
          Krótko opisz usługi, których potrzebujesz
        </Form.Text>
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Wysłać
      </Button>
    </Form>
  );
};

export default OrderForm;
