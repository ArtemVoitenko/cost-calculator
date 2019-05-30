import React, { Component } from "react";
import BubbleChart from "@weknow/react-bubble-chart-d3";
import { prepareDataToBubble } from "./prepareDataToBubble";
import { connect } from "react-redux";
class exprensesBubleChart extends Component {
  render() {
    const chartData = prepareDataToBubble(this.props.data);
    return (
      <BubbleChart
        graph={{
          zoom: 0.8
          // offsetX: -0.05,
          // offsetY: -0.01
        }}
        width={1000}
        height={600}
        padding={0} // optional value, number that set the padding between bubbles
        showLegend={true} // optional value, pass false to disable the legend.
        legendPercentage={20} // number that represent the % of with that legend going to use.
        legendFont={{
          family: "Arial",
          size: 12,
          color: "#fff",
          weight: "bold"
        }}
        valueFont={{
          family: "Arial",
          size: 12,
          color: "#fff",
          weight: "bold"
        }}
        labelFont={{
          family: "Arial",
          size: 16,
          color: "#fff",
          weight: "bold"
        }}
        //Custom bubble/legend click functions such as searching using the label, redirecting to other page
        bubbleClickFunc={this.bubbleClick}
        legendClickFun={this.legendClick}
        data={chartData}
      />
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data: data
  };
};

export default connect(mapStateToProps)(exprensesBubleChart);
