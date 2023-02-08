import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Calendar from "react-calendar";

const PersonalAccountMain = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="container">
      <Form>
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} minDate={new Date()} />
          <p className="calendar_text">
            <span className="bold">Selected Date:</span> {date.toDateString()}
          </p>
        </div>
      </Form>
    </div>
  );
};

export default PersonalAccountMain;
