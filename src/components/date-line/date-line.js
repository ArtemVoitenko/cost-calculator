import React from "react";
import "./date-line.scss";
var moment = require("moment");

const DateLine = () => {
  const today = moment().format("DD");
  const week = moment().format("dddd");
  const months = moment().format("MMMM YYYY");
  return (
    <div className="date-line">
      <div className="date">
        <div className="date__day">{today}</div>
        <div className="date__additional">
          <div className="date__week">{week}</div>
          <div className="date__months">{months}</div>
        </div>
      </div>
      <button className="add-item-btn">Add item +</button>
    </div>
  );
};
export default DateLine;
