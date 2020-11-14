import React, { useState } from "react";
import InputBox from "./components/InputBox";
import SearchButton from "./components/SearchButton";
import Card from "./components/card/Card";
import { api } from "./utils/variables";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [iconSource, setIconSource] = useState("");
  let [isClicked] = useState(false);

  const search = (ev) => {
    if (isClicked || ev.key === "Enter") {
      if (query !== "") {
        fetch(`${api.base}forecast?q=${query}&units=metric&appid=${api.key}`)
          .then((res) => res.json())
          .then((result) => {
            if (result.cod !== "200") {
              console.log(`${result.cod} Error`);
              alert("Problem out there... try again!");
            } else {
              setWeather(result);
              setQuery("");
              let icon = result.list[4].weather[0].icon;
              setIconSource(`http://openweathermap.org/img/wn/${icon}@2x.png`);
            }
          });
      } else {
        alert("Please insert some value...");
      }
    }
  };

  const setIsClick = () => {
    isClicked = true;
    search();
  };

  return (
    <main>
      <div className="container my-5 mx-auto">
        <h1 className="text-muted text-center my-4">Weather App</h1>
        <div className="search-location my-4 mx-auto text-center text-muted">
          <InputBox
            type="text"
            placeholder="City Name"
            handleChange={(e) => setQuery(e.target.value)}
            value={query}
            handlePress={search}
          />
          <SearchButton handleClick={setIsClick}>Get Weather</SearchButton>
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
    </main>
  );
}

export default App;
