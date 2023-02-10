import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Calendar from "react-calendar";
import { useDispatch, useSelector } from "react-redux";

import { fetchServices } from "../../redux/slices/servicesSlice";
import PersonalAccountMenu from "./PersonalAccountMenu";

const PersonalAccountMain = () => {
  const [date, setDate] = useState(new Date());
  const [servicesList, setServicesList] = useState([]);
  const [operationsList, setOperationsList] = useState([]);
  const [selectedServiceState, setSelectedServiceState] = useState({
    isSelected: false,
    selectedService: "",
  });

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
    console.log(event.target.value);
    setSelectedServiceState({
      isSelected: true,
      selectedService: event.target.value,
    });
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
      <div className="account_container">
        <div className="button_menu">
          <PersonalAccountMenu />
        </div>
        <div className="content">
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
                  {selectedServiceState.isSelected &&
                  selectedServiceState.selectedService !== "Wybierz usługę"
                    ? operationsList.map(({ id, name }) => (
                        <Button key={id}>{name}</Button>
                      ))
                    : null}
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
                <p className="calendar_text">
                  <span className="bold">Selected Date:</span>{" "}
                  {date.toDateString()}
                </p>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PersonalAccountMain;
