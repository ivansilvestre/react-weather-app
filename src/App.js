import React, { useState } from 'react';
import './App.css';

const api = {
  key: 'a20533974552cd247ba71e4e06c33774',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = ev => {
    if (ev.key === 'Enter') {
      fetch(`${api.base}forecast?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result)
        });
    }
  }

  return (
    <div className={(typeof weather.main != "undefined") ? 'app' : 'app'}>
      <main>
        <div className="container my-5 mx-auto">

          <h1 className="text-muted text-center my-4">Weather App</h1>
          <div
            className="change-location my-4 text-center text-muted">
            <input
              type="text"
              placeholder="City Name"
              className="form-control p-4 my-2"
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
              autoFocus
            />
            <button className="btn btn-primary btn-block mt-2">Get Weather</button>
          </div>

          {(typeof weather.main != 'undefined') ? (
            <div>
              AAAAA
              <div className="card shadow-lg rounded">


                <div className="text-muted text-uppercase text-center details">
                  <h5 className="my-2">City: {weather.city.name} </h5>
                  <div className="display-4 my-3">
                    <span> {Math.round(weather.list[4].main.temp)}</span>
                    <span>&deg;C</span>
                  </div>
                  <div className="my-2">{weather.list[4].weather[0].description}</div>
                </div>

                <div className="text-muted text-uppercase text-center details">
                  <div className="d-flex bd-highlight">
                    <div className="p-2 flex-fill bd-highlight">
                      <div>Tomorrow</div>
                      <div className="display-6 my-2">
                        <span> {weather.list[12].main.temp}</span>
                        <span>&deg;C</span>
                      </div>
                    </div>
                    <div className="p-2 flex-fill bd-highlight">
                      <div>After Tomorrow</div>
                      <div class="display-6 my-2">
                        <span> {weather.list[20].main.temp}</span>
                        <span>&deg;C</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          ) : ('')}
        </div>
      </main>
    </div>
  );
}

export default App;
