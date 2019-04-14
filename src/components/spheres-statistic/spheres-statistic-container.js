import React, { Component } from "react";
import { connect } from "react-redux";
import SpheresStatistic from "./spheres-statistic";

class SpheresStatisticContainer extends Component {
  divideBySpheres = () => {
    const { items } = this.props;
    const resultObject = {};
    for (let i = 0; i < items.length; i++) {
      if (!resultObject[items[i].actionPurpose]) {
        resultObject[items[i].actionPurpose] = items[i].actionSum;
      } else {
        resultObject[items[i].actionPurpose] += items[i].actionSum;
      }
    }
    return resultObject;
  };
  createStatisticObject = () => {
    const { actionType } = this.props;
    const filterTypeData =
      actionType === "income"
        ? this.filterIncomeValues()
        : actionType === "expense"
        ? this.filterExpenseValues()
        : null;
    return actionType === "all" ? this.divideByTypes() : filterTypeData;
  };
  filterIncomeValues = () => {
    return this.props.items.filter(item => {
      return item.actionType === "income";
    });
  };
  divideByTypes = () => {
    return {
      income: this.filterIncomeValues(),
      expense: this.filterExpenseValues()
    };
  };
  filterExpenseValues = () => {
    return this.props.items.filter(item => {
      return item.actionType === "expense";
    });
  };
  renderStatisticSection() {
    const statisticComponent =
      this.props.actionPurpose === "all" ? (
        <div>
          <SpheresStatistic data={this.divideByTypes.income} />
          <SpheresStatistic data={this.divideByTypes.expense} />
        </div>
      ) : (
        <SpheresStatistic data={this.createStatisticObject()} />
      );
    return statisticComponent;
  }
  render() {
    return this.renderStatisticSection();
  }
}
const mapStateToProps = ({ dataToShow, operationType }) => {
  return {
    items: dataToShow,
    actionType: operationType
  };
};

export default connect(mapStateToProps)(SpheresStatisticContainer);
