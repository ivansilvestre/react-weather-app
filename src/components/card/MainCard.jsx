import React from "react";

const MainCard = (props) => {
  return (
    <div>
      <div className="img-weather">
        <img src={props.img} alt="weather-img" />
      </div>
      <div className="text-muted text-uppercase text-center details">
        <h5 className="my-2">{props.city} </h5>
        <div className="display-4 my-3">
          <span> {props.weather}</span>
          <span>&deg;C</span>
        </div>
        <div className="my-2">{props.description}</div>
      </div>
    </div>
  );
};

export default MainCard;
