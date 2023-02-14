import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

const TimeChoosing = ({ setTime }) => {
  const { orders } = useSelector((state) => state.orders);

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
    setTime(workTime[index]);
  };

  const isTimeBusy = (time) => {
    if (orders.length > 0) {
      const busyTime = orders.map((order) => order.orderTime);
      return busyTime.includes(time) ? true : false;
    } else {
      return false;
    }
  };

  return (
    <ListGroup>
      {workTime.map((period, index) => {
        return (
          <ListGroup.Item
            disabled={isTimeBusy(period)}
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
