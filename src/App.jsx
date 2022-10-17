import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "./components/Card";
import InputBox from "./components/InputBox";
import SearchButton from "./components/SearchButton";

const App = () => {
  const queryRef = useRef();
  const [weather, setWeather] = useState(null);
  const [iconSource, setIconSource] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `${import.meta.env.VITE_API_URL}?q=${
        queryRef.current.value
      }&units=metric&appid=${import.meta.env.VITE_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.cod !== 200) {
          alert(
            "Problem out there... try again later or try to insert a valid city!"
          );
        } else {
          setWeather(result);
          setIconSource(
            `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
          );
        }
      });
  };

  return (
    <main>
      <div className="container" style={{ maxWidth: "600px" }}>
        <div className="d-flex flex-column">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center text-muted my-4">Weather</h1>
            <div className="text-center text-muted my-4 mx-auto w-50">
              <InputBox ref={queryRef} />
              <SearchButton>Get Weather</SearchButton>
            </div>
          </form>
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
