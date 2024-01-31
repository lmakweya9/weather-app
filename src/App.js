/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const api = {
  key: '9e043a82db3edc5336e6d0b1cec16dbd',
  base: 'https://api.openweathermap.org/data/2.5/',
}

function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      // console.log(result);
      setWeather(result);
    });
  };


  return (
    <div className="App">
      <header className="App-header">
        {/* Header */}
        <h1>The Weather App</h1>
        {/* Search bar */}
        <div>
          <input 
          type = 'text' 
          placeholder = 'Enter your city/town...' 
          onChange = {(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {/* if weather is not undefined */}
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location */}
            <p>{weather.name}</p>

            {/* Tempreture C/F */}
            <p>{weather?.main?.temp}°C</p>

            {/* Conditions (Sunny, Cloudy, Partly Cloudy, Rain) */}
            <p>{weather?.weather?.[0].main}</p>
            <p>{weather?.weather?.[0].description}</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;
