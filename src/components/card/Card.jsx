import React from "react";
import MainCard from "./MainCard";

const Card = (props) => {
  return (
    <div className="card shadow-lg rounded">
      <MainCard
        img={props.img}
        city={props.city}
        weather={props.weather}
        description={props.description}
      />
    </div>
  );
};

export default Card;
