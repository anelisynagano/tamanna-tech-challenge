const ForecastCard = ({ dailyInfo }) => {
  return (
    <div className="forecastCard">
      <p>{dailyInfo.temp.max}</p>
      <p>{dailyInfo.temp.min}</p>
    </div>
  );
};

export default ForecastCard;
