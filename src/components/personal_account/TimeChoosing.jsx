import React from "react";
import { ListGroup } from "react-bootstrap";

const TimeChoosing = () => {
  const workTime = [
    "10-11",
    "11-12",
    "12-13",
    "13-14",
    "14-15",
    "15-16",
    "16-17",
    "17-18",
    "18-19",
  ];

  const handleClick = (index, event) => {
    event.preventDefault();
    console.log(workTime[index]);
  };

  return (
    <ListGroup>
      {workTime.map((period, index) => {
        return (
          <ListGroup.Item
            action
            variant="success"
            key={index}
            onClick={(event) => handleClick(index, event)}
          >
            {period}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default TimeChoosing;
