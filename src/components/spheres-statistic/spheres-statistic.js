import React from "react";
import "./sphere-statistic.scss";

const SpheresStatistic = ({ data, title }) => {
  const renderStatistic = () => {
    const keys = Object.keys(data);
    return keys.map(item => {
      return (
        <div className="sphere-item">
          <div
            className={`purpose-image purpose-image--${item} sphere-item__img`}
          />

          <p className="sphere-item__title">{item}</p>
          <p className="sphere-item__sum">{data[item]}</p>
        </div>
      );
    });
  };

  return (
    <div className="sphere-statistic__row">
      <p className="sphere-statistic__title">{title}</p>
      <div className="sphere-statistic">{renderStatistic()}</div>
    </div>
  );
};
export default SpheresStatistic;
