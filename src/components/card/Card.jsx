import React from "react";
import MainCard from "./MainCard";
import SecondaryCard from "./SecondaryCard";

const Card = (props) => {
  return (
    <div className="card shadow-lg rounded">
      <MainCard
        img={props.img}
        mainCity={props.mainCity}
        mainWeather={props.mainWeather}
        description={props.description}
      />
      <div className="text-muted text-uppercase text-center details">
        <div className="d-flex bd-highlight">
          <SecondaryCard name={"Tomorrow"} day={props.tomorrow} />
          <SecondaryCard name={"After Tomorrow"} day={props.afterTomorrow} />
        </div>
      </div>
    </div>
  );
};

export default Card;
