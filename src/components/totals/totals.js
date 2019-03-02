import React, { Component } from "react";
import { connect } from "react-redux";

class Totals extends Component {
  state = {
    consumptionTotals: 0,
    incomeTotals: 0,
    totalCostSum: 0
  };

  calculateTotals = () => {
    const { data } = this.props.items;
    let minus = 0;
    let plus = 0;
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.actionType === "consumption") {
        minus += parseFloat(item.actionSum);
      } else {
        plus += parseFloat(item.actionSum);
      }
      total += parseFloat(item.actionSum);
    }
    console.log(minus);
    this.setState({
      consumptionTotals: minus,
      incomeTotals: plus,
      totalCostSum: total
    });
  };
  // this.data.forEach(item => {

  componentDidMount() {
    this.calculateTotals();
  }
  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.calculateTotals();
      console.log("Hello");
    }
  }
  render() {
    console.log(this.data);

    const { consumptionTotals, incomeTotals, totalCostSum } = this.state;
    return (
      <div className="totals">
        <p className="totals__income">Income: {incomeTotals}</p>
        <p className="totals__consumption">Comsumption: {consumptionTotals}</p>
        <p className="totals__sum">Total{totalCostSum}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state
  };
};
export default connect(mapStateToProps)(Totals);
