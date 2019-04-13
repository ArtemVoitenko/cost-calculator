import React from "react";
import "./date-line.scss";
var moment = require("moment");

const DateLine = ({ toggleItemCreator, opened }) => {
  const today = moment().format("DD");
  const week = moment().format("dddd");
  const months = moment().format("MMMM YYYY");
  const buttonText = opened ? "Close" : "  Add item +";
  return (
    <div className="date-line">
      <div className="date">
        <div className="date__day">{today}</div>
        <div className="date__additional">
          <div className="date__week">{week}</div>
          <div className="date__months">{months}</div>
        </div>
      </div>
      <button onClick={() => toggleItemCreator()} className="add-item-btn">
        {buttonText}
      </button>
    </div>
  );
};
export default DateLine;
