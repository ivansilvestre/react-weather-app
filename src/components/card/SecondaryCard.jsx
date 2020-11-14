import React from "react";

const SecondaryCard = (props) => {
  return (
    <div className="p-2 flex-fill bd-highlight">
      <div>{props.name}</div>
      <div className="display-6 my-2">
        <span> {props.day}</span>
        <span>&deg;C</span>
      </div>
    </div>
  );
};

export default SecondaryCard;
