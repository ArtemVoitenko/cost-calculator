import React, { Component } from "react";
import { connect } from "react-redux";
import "./totals.scss";

class Totals extends Component {
  state = {
    expenseTotals: 0,
    incomeTotals: 0,
    totalCostSum: 0
  };

  calculateTotals = () => {
    const { data } = this.props;
    let minus = 0;
    let plus = 0;
    let total = 0;

    if (data) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.actionType === "expense") {
          minus += parseFloat(item.actionSum);
          total -= parseFloat(item.actionSum);
        } else {
          plus += parseFloat(item.actionSum);
          total += parseFloat(item.actionSum);
        }
      }
    }
    this.setState({
      expenseTotals: -minus,
      incomeTotals: plus,
      totalCostSum: total
    });
  };

  componentDidMount() {
    this.calculateTotals();
  }
  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.calculateTotals();
    }
  }
  render() {
    const { expenseTotals, incomeTotals, totalCostSum } = this.state;
    return (
      <div className="totals">
        <p>
          Income: <span className="totals__income">{incomeTotals}</span>
        </p>
        <p>
          Expense: <span className="totals__expense">{expenseTotals}</span>
        </p>
        <p>
          Total: <span className="totals__sum">{totalCostSum}</span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ dataToShow }) => {
  return {
    data: dataToShow
  };
};
export default connect(mapStateToProps)(Totals);
