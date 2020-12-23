const Card = (props) => {
  return (
    <div className="card shadow-lg rounded">
      <div className="img-weather">
        <img src={props.img} alt="weather-img" />
      </div>
      <div className="text-muted text-uppercase text-center details">
        <h5 className="my-2">
          {props.city}, {props.country}{" "}
        </h5>
        <div className="display-4 my-3">{props.weather}&deg;C</div>
        <div className="display-4 my-3" style={{ fontSize: "10px" }}>
          <span className="text-lowercase">min: </span>
          {props.minTemp}&deg;C | <span className="text-lowercase">max: </span>
          {props.maxTemp}&deg;C
        </div>
      </div>
    </div>
  );
};

export default Card;
