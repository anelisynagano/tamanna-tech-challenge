import CurrentWeather from "./CurrentWeather";
import ForecastList from "./ForecastList";

const City = ({ cityInfo, handleDelete, id }) => {
    return (
    <div>
      {cityInfo.cod === "200" && (
        <CurrentWeather
          id={id}
          handleDelete={handleDelete}
          cityName={cityInfo.city.name}
          current={cityInfo.list[0].main}
          cityInfo={cityInfo}
        />
      )}
      {cityInfo.list && <ForecastList daily={cityInfo.list} />}
    </div>
  );
};

export default City;
