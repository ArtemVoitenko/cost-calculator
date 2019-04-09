import React from "react";
import "./date-line.scss";
var moment = require("moment");

const DateLine = () => {
  const day = moment().format("D");
  const dayOfWeek = moment().format("dddd");
  const months = moment().format("MMMM YYYY");
  return (
    <div className="date-line">
      <div className="date">
        <p className="date__day">{day}</p>
        <div className="date__additional">
          <p className="date__week">{dayOfWeek}</p>
          <p className="date__month">{months}</p>
        </div>
      </div>
      <button className="add-btn">
        <span className="add-btn__text d-none d-lg-block">new record</span>{" "}
        <span className="add-btn__plus">+</span>
      </button>
    </div>
  );
};
export default DateLine;
