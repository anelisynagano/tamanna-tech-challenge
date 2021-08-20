import moment from "moment";

const ForecastCard = ({ dailyInfo }) => {
  return (
    <div className='forecastCard'>
      <p>{moment(dailyInfo.dt_txt).format('ddd')}</p>
      <p>{dailyInfo.averageTemp} °C</p>
      <img src={`https://openweathermap.org/img/wn/${dailyInfo.weather[0].icon.substring(0,2)}d@2x.png`} alt="" />
    </div>
  );
};

export default ForecastCard;
