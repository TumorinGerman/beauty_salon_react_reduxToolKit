import React, { useState, useEffect } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
import Calendar from "react-calendar";
import { useDispatch, useSelector } from "react-redux";

import { fetchServices } from "../../redux/slices/servicesSlice";
import PersonalAccountMenu from "./PersonalAccountMenu";
import TimeChoosing from "./TimeChoosing";

const PersonalAccountMain = () => {
  const [date, setDate] = useState(new Date());
  const [servicesList, setServicesList] = useState([]); //full list from backend
  const [operationsList, setOperationsList] = useState([]); //just list of operation
  const [selectedServiceState, setSelectedServiceState] = useState({
    isSelected: false,
    selectedService: "",
  }); //currently selected service
  const [selectedOperationState, setSelectedOperationState] = useState({}); //currently selected operation

  const dispatch = useDispatch();
  const { services, isLoaded } = useSelector((state) => state.services);

  const getServices = async () => {
    try {
      if (isLoaded) {
        setServicesList(services);
      } else {
        dispatch(fetchServices());
      }
    } catch (error) {
      alert("Error downloading Price!");
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setSelectedServiceState({
      isSelected: true,
      selectedService: event.target.value,
    });
  };

  const handleClick = (id, event) => {
    event.preventDefault();
    const selectedOperation = operationsList.filter(
      (operation) => operation.id === id
    );
    if (selectedOperation.length > 0) {
      setSelectedOperationState(selectedOperation[0]);
    }
  };

  useEffect(() => {
    getServices();
  }, [isLoaded]);

  useEffect(() => {
    const currService = servicesList.filter(
      (service) => service.title === selectedServiceState.selectedService
    );
    if (currService.length > 0) {
      setOperationsList(currService[0].services);
    }
  }, [selectedServiceState]);

  return (
    <div className="container">
      <div className="centre_container">
        <div className="account_container">
          <div className="button_menu">
            <PersonalAccountMenu />
          </div>
          <div className="content_container">
            <Form>
              <div className="common_container">
                <div className="check-services_container">
                  <Form.Select
                    size="lg"
                    value={selectedServiceState.selectedService}
                    onChange={handleChange}
                  >
                    <option>Wybierz usługę</option>
                    {servicesList.map((service, index) => {
                      return (
                        <option key={index} value={service.title}>
                          {service.title}
                        </option>
                      );
                    })}
                  </Form.Select>
                  <div className="operations">
                    <ListGroup>
                      {selectedServiceState.isSelected &&
                      selectedServiceState.selectedService !== "Wybierz usługę"
                        ? operationsList.map(({ id, name }) => (
                            <ListGroup.Item
                              action
                              variant="success"
                              key={id}
                              onClick={(event) => handleClick(id, event)}
                            >
                              {name}
                            </ListGroup.Item>
                          ))
                        : null}
                    </ListGroup>
                  </div>
                </div>
                <div className="calendar-container">
                  <Calendar
                    onChange={setDate}
                    value={date}
                    minDate={new Date()}
                    minDetail={"month"}
                    locale={"pl-PL"}
                  />
                </div>
                <div className="time_container">
                  <TimeChoosing />
                </div>
              </div>
              <div className="information_container">
                <h4>Wybrałeś:</h4>
                <p className="calendar_text">
                  <span className="bold">Wybrana usługa:</span>{" "}
                  {selectedServiceState.selectedService}
                </p>
                <p className="calendar_text">
                  <span className="bold">Wybrana procedura:</span>{" "}
                  {selectedOperationState.name}, cena:{" "}
                  {selectedOperationState.price}zl
                </p>
                <p className="calendar_text">
                  <span className="bold">Date:</span> {date.toDateString()}
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAccountMain;
