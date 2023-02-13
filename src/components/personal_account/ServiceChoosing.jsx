import React from "react";
import { Form } from "react-bootstrap";

const ServiceChoosing = ({
  selectedServiceState,
  servicesList,
  handleChangeService,
}) => {
  return (
    <Form.Select
      size="lg"
      value={selectedServiceState.selectedService}
      onChange={handleChangeService}
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
  );
};

export default ServiceChoosing;
