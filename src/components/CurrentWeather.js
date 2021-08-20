import { useState } from "react";

const CurrentWeather = ({ current, cityName, handleDelete, id, cityInfo }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className='current'>
      <div className='top'>
        <p className='primarySize'>{cityName}</p>
        <div className='menu'>
          <img
            onClick={() => setHidden(!hidden)}
            src={hidden ? 'https://bit.ly/3mdVKyP' : "https://bit.ly/3iYUr4C"}
            alt='menu'
            className="menuIcon"
          />
          <div
            className={hidden ? "hide" : "show"}
            onClick={() => handleDelete(id)}
          >
            Delete
          </div>
        </div>
      </div>
      <p>{Date().toLocaleString().substring(0, 16)}</p>
      <p className='currentTemp'>
        {current.temp.toFixed()} <span className='primarySize'>°C</span>
      </p>
      <p>Feels Like: {current.feels_like.toFixed()} °C</p>
      <div>
        <div>{current.humidity}% Humidity</div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default CurrentWeather;
