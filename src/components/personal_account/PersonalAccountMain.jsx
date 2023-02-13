import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Calendar from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { fetchServices } from "../../redux/slices/servicesSlice";
import PersonalAccountMenu from "./PersonalAccountMenu";
import TimeChoosing from "./TimeChoosing";
import OperationChoosing from "./OperationChoosing";
import InformationBlock from "./InformationBlock";
import ServiceChoosing from "./ServiceChoosing";

const PersonalAccountMain = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
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

  const handleChangeService = (event) => {
    setSelectedServiceState({
      isSelected: true,
      selectedService: event.target.value,
    });
  };

  const handleClickOperation = (id, event) => {
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

  const inMoment = moment(date, "MM-DD-YYYY")
    .format("ddd MMM D YYYY")
    .toString();
  console.log(inMoment);
  console.log(date.toDateString());
  console.log(date.toDateString() === inMoment);

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
                  <ServiceChoosing
                    selectedServiceState={selectedServiceState}
                    servicesList={servicesList}
                    handleChangeService={handleChangeService}
                  />
                  <OperationChoosing
                    selectedServiceState={selectedServiceState}
                    operationsList={operationsList}
                    handleClickOperation={handleClickOperation}
                  />
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
                  <TimeChoosing setTime={setTime} />
                </div>
              </div>
              <InformationBlock
                selectedServiceState={selectedServiceState}
                selectedOperationState={selectedOperationState}
                date={date}
                time={time}
              />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAccountMain;
