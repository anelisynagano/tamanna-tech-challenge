import "./App.css";
import { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import ForecastList from "./components/ForecastList";

function App() {
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeatherData = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=38.72487459562428&lon=-9.139775952952833&exclude=hourly,minutely,alerts&units=metric&appid=00b3a5ed16ed1463a44332935c9a8806"
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  };

  useEffect(fetchWeatherData, []);

  return (
    <div className='App'>
      <input type='text' />
      {weatherData.current && <CurrentWeather
        city={weatherData.timezone}
        current={weatherData.current}
      />}
      <ForecastList daily={weatherData.daily} />
    </div>
  );
}

export default App;
