import ForecastCard from "./ForecastCard";

const ForecastList = ({ daily }) => {
  return (
    <div className="cardContainer">
      {daily && daily.map((day) => (
        <ForecastCard key={day.dt} dailyInfo={day} />
      ))}
    </div>
  );
};

export default ForecastList;
