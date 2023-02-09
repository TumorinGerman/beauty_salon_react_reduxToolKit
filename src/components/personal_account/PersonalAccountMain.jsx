import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Calendar from "react-calendar";
import { useDispatch, useSelector } from "react-redux";

import { fetchServices } from "../../redux/slices/servicesSlice";
import PersonalAccountMenu from "./PersonalAccountMenu";

const PersonalAccountMain = () => {
  const [date, setDate] = useState(new Date());
  const [servicesList, setServicesList] = useState([]);

  const dispatch = useDispatch();
  const { services, isLoaded, fetchStatus } = useSelector(
    (state) => state.services
  );

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

  useEffect(() => {
    getServices();
  }, [isLoaded]);

  return (
    <div className="container">
      <div className="account_container">
        <div className="button_menu">
          <PersonalAccountMenu />
        </div>
        <div className="content">
          <Form>
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
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PersonalAccountMain;
