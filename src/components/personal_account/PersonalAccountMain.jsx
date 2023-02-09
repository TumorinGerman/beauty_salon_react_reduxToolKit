import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Calendar from "react-calendar";
import { useDispatch, useSelector } from "react-redux";

import LogOut from "../../services/firebase/utils/LogOut";
import { userLogOut } from "../../redux/slices/userSlice";
import { fetchServices } from "../../redux/slices/servicesSlice";

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

  const handleLogOut = async () => {
    await LogOut();
    dispatch(userLogOut());
  };

  useEffect(() => {
    getServices();
  }, [isLoaded]);

  return (
    <div className="container">
      <Button onClick={handleLogOut}>LogOut</Button>
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
            <span className="bold">Selected Date:</span> {date.toDateString()}
          </p>
        </div>
      </Form>
    </div>
  );
};

export default PersonalAccountMain;
