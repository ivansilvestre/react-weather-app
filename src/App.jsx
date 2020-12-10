import React, { useState } from "react";
import InputBox from "./components/InputBox";
import SearchButton from "./components/SearchButton";
import Card from "./components/card/Card";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [iconSource, setIconSource] = useState("");

  const search = () => {
    if (query !== "") {
      fetch(`${process.env.REACT_APP_URL}forecast?q=${query}&units=metric&appid=${process.env.REACT_APP_KEY}`)
        .then((res) => res.json())
        .then((result) => {
          if (result.cod !== "200") {
            console.log(`${result.cod} Error`);
            alert("Problem out there... try again!");
          } else {
            const icon = result.list[4].weather[0].icon;
            setWeather(result);
            setQuery("");
            setIconSource(`http://openweathermap.org/img/wn/${icon}@2x.png`);
          }
        });
    } else {
      alert("Please insert some city...");
    }
  };

  return (
    <main>
      <div className="container" style={{ maxWidth: "600px" }}>
        <div className="d-flex flex-column">
          <h1 className="text-center text-muted my-4">Weather App</h1>
          <div className="text-center text-muted my-4 mx-auto">
            <InputBox
              type="text"
              placeholder="City Name"
              handleChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <SearchButton onClick={search}>Get Weather</SearchButton>
          </div>
          {weather && (
            <div>
              <Card
                img={iconSource}
                mainCity={weather.city.name}
                mainWeather={Math.round(weather.list[4].main.temp)}
                description={weather.list[4].weather[0].description}
                tomorrow={Math.round(weather.list[12].main.temp)}
                afterTomorrow={Math.round(weather.list[20].main.temp)}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
