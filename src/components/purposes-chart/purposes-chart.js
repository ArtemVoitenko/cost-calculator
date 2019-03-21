import React, { Component } from "react";
import { connect } from "react-redux";
import fusioncharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import { dataSource } from "./diagram-params";
import { prepareDataToPieChart } from "./diagram-data-constructor";

// Resolves charts dependancy
charts(fusioncharts);

class PurposesChart extends React.Component {
  render() {
    const convertedData = prepareDataToPieChart(
      this.props.data,
      this.props.operationType
    );

    return (
      <ReactFusioncharts
        type="doughnut2d"
        width="100%"
        height="100%"
        containerBackgroundOpacity="0"
        dataFormat="JSON"
        dataSource={dataSource(convertedData)}
      />
    );
  }
}

const mapStateToProps = ({ dataToShow, operationType }) => {
  return { data: dataToShow, operationType };
};
export default connect(mapStateToProps)(PurposesChart);
