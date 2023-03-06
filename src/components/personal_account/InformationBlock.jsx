import React from "react";

const InformationBlock = ({
  selectedServiceState,
  selectedOperationState,
  date,
  time,
}) => {
  return (
    <div className="information_container">
      <h4>Wybrałeś:</h4>
      <p className="calendar_text">
        <span className="bold">Wybrana usługa:</span>{" "}
        {selectedServiceState.selectedService}
      </p>
      <p className="calendar_text">
        <span className="bold">Wybrana procedura:</span>{" "}
        {selectedOperationState.name}, cena: {selectedOperationState.price}zl
      </p>
      <p className="calendar_text">
        <span className="bold">Dzień:</span> {date.toDateString()}
      </p>
      <p className="calendar_text">
        <span className="bold">Godzina:</span> {time}
      </p>
    </div>
  );
};

export default InformationBlock;
