import React, { Component } from "react";
import DetailsSection from "../details-section";
import StatisticCompareChart from "../statistic-compare-chart";

export default class InformationPart extends Component {
  render() {
    return (
      <div>
        <DetailsSection />
        <StatisticCompareChart />
      </div>
    );
  }
}
