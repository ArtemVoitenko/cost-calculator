import React from "react";

const SpheresStatistic = ({ data }) => {
  const renderStatistic = () => {
    const keys = Object.keys(data);
    return keys.map(item => {
      return (
        <div>
          <div className={`purpose-image purpose-image--${item}`} />
          {item}
          <span>{data[item]}</span>
        </div>
      );
    });
  };
  console.log(data);
  return <div>{renderStatistic()}</div>;
};
export default SpheresStatistic;
