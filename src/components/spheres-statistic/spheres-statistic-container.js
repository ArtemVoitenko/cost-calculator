import React, { Component } from "react";
import { connect } from "react-redux";
import SpheresStatistic from "./spheres-statistic";

class SpheresStatisticContainer extends Component {
  createStatisticObject = () => {
    const { items } = this.props;
    const resultObject = {};
    for (let i = 0; i < items.length; i++) {
      if (!resultObject[items[i].actionPurpose]) {
        resultObject[items[i].actionPurpose] = items[i].actionSum;
      } else {
        resultObject[items[i].actionPurpose] = items[i].actionSum;
      }
    }
    console.log(resultObject);
  };

  render() {
    this.createStatisticObject();
    return <SpheresStatistic />;
  }
}
const mapStateToProps = ({ dataToShow }) => {
  return {
    items: dataToShow
  };
};

export default connect(mapStateToProps)(SpheresStatisticContainer);
