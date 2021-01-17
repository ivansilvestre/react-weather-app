import { useState } from "react";
import InputBox from "./components/InputBox";
import SearchButton from "./components/SearchButton";
import Card from "./components/Card";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [iconSource, setIconSource] = useState("");

  const search = () => {
    if (query !== "") {
      fetch(
        `${process.env.REACT_APP_API_URL}?q=${query}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.cod !== 200) {
            console.log(`${result.cod} Error`);
            alert(
              "Problem out there... try again later or try to insert a valid city!"
            );
          } else {
            const icon = result.weather[0].icon;
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
          <h1 className="text-center text-muted my-4">Weather</h1>
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
                city={weather.name}
                country={weather.sys.country}
                weather={Math.round(weather.main.temp)}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
