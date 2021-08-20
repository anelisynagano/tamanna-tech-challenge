import moment from "moment";
import { useEffect, useState } from "react";
import ForecastCard from "./ForecastCard";

const ForecastList = ({ daily }) => {
  const [dailyAverage, setDailyAverage] = useState([]);
  const averagePerDay = () => {
    // generate array of dates for next 5 days
    let days = [];
    let daysRequired = 5;
    let avg = [];
    for (let i = 1; i <= daysRequired; i++) {
      days.push(moment().add(i, "days").format());
    }

    // iterate over created array
    days.forEach((day) => {
      let total = 0;
      let input = 0;
      let dayInfo = {}
      // iterate over full array from props
      daily.forEach((dayForecast) => {
        // condition to match date created with date received from props
        if (dayForecast.dt_txt.substring(0, 10) === day.substring(0, 10)) {
          total = total + dayForecast.main.temp;
          input++;
          dayInfo = dayForecast
        }
      });
      avg.push({...dayInfo, averageTemp: (total / input).toFixed()})
    });
    setDailyAverage(avg);
  };

  useEffect(averagePerDay, [daily]);

  return (
    <div className='cardContainer'>
      {dailyAverage.length > 0 &&
        dailyAverage.map((day) => <ForecastCard key={day.dt} dailyInfo={day} />)}
    </div>
  );
};

export default ForecastList;
