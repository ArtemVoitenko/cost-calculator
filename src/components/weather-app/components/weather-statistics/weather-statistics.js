import React from "react";

const WeatherStatistics = ({
  dailyStatistic: { cloudCover, uvIndex, windSpeed, pressure, humidity }
}) => {
  console.log(humidity);
  return <div className="d-flex">{windSpeed}</div>;
};
export default WeatherStatistics;
