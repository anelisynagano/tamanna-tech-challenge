const CurrentWeather = ({ current, city }) => {
  return (
    <div className='current'>
      <p>{city}</p>
      <p>Temp: {current.temp}</p>
      <p>Feels Like: {current.feels_like}</p>
    </div>
  );
};

export default CurrentWeather;
