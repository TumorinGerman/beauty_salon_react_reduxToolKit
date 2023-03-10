import React, { useState, useEffect, useRef } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import PersonalAccountMenu from "./PersonalAccountMenu";
import { addUserInfo } from "../../redux/slices/userSlice";
import addDocToCollectionUser from "../../services/firebase/utils/addDocToCollectionUser";
import ModalInformation from "../ModalInformation";

const UserInformationPage = () => {
  const dispatch = useDispatch();
  const { isLogined, activeUserId, userInformation } = useSelector(
    (state) => state.userAuth
  );
  const [values, setValues] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const nameOfProperties = e.target.id;
    const userInfoUpdate = {
      ...values,
      [nameOfProperties]: e.target.value,
    };
    setValues(userInfoUpdate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(addUserInfo(values));
      await addDocToCollectionUser(activeUserId, values);
      setIsSuccess(true);
    } catch {
      alert("Can't change your data. Sorry.");
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    setValues({ ...values, ...userInformation });
  }, [isLogined, userInformation]);

  return (
    isLogined && (
      <div className="container">
        <div className="centre_container">
          <div className="account_container">
            <div className="button_menu">
              <PersonalAccountMenu />
            </div>
            <div className="content_container">
              <h3>Tutaj możesz zmienić swoje dane</h3>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue={values.email}
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="nickName">
                  <Form.Label column sm="2">
                    nickName:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={values.nickName}
                    onChange={handleChange}
                  />
                  <Form.Text muted>
                    Nazwa, która będzie wyświetlana na stronie
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="firstName">
                  <Form.Label column sm="2">
                    firstName:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={values.firstName}
                    onChange={handleChange}
                  />
                  <Form.Text muted>Imię</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="secondName">
                  <Form.Label column sm="2">
                    secondName:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={values.secondName}
                    onChange={handleChange}
                  />
                  <Form.Text muted>Nazwisko</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="phoneNumber">
                  <Form.Label column sm="2">
                    phoneNumber:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={values.phoneNumber}
                    onChange={handleChange}
                  />
                  <Form.Text muted>Numer telefonu</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="additional">
                  <Form.Label column sm="2">
                    Dodatkowy:
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    maxLength="200"
                    rows={3}
                    defaultValue={values.additional}
                    onChange={handleChange}
                  />
                  <Form.Text muted>maximum 200 characters</Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              {isSuccess && (
                <ModalInformation
                  message={"Twoje dane zostały pomyślnie zaktualizowane."}
                  isDone={setIsSuccess}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default UserInformationPage;
