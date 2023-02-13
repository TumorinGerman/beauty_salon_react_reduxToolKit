import React from "react";
import { ListGroup } from "react-bootstrap";

const OperationChoosing = ({
  selectedServiceState,
  operationsList,
  handleClickOperation,
}) => {
  return (
    <div className="operations">
      <ListGroup>
        {selectedServiceState.isSelected &&
        selectedServiceState.selectedService !== "Wybierz usługę"
          ? operationsList.map(({ id, name }) => (
              <ListGroup.Item
                action
                variant="success"
                key={id}
                onClick={(event) => handleClickOperation(id, event)}
              >
                {name}
              </ListGroup.Item>
            ))
          : null}
      </ListGroup>
    </div>
  );
};

export default OperationChoosing;
