import React, { Component } from "react";
import { connect } from "react-redux";
import PurposeDropdown from "../purpose-dropdown";
import { changeItemsToShow, dispatchPurposeValue } from "../../actions";
import "./purpose-sort-picker.scss";
import Icon from "../icon";

class PurposeSortPicker extends Component {
  state = {
    selectVisibiility: false,
    clearPurposeVisibility: false,
    purposeChecked: false
  };
  onPurposeSelect = async purposeValue => {
    const { items, dispatchFilteredData, dispatchPurposeValue } = this.props;
    if (items) {
      const filteredData = items.filter(item => {
        return item.actionPurpose === purposeValue;
      });
      dispatchFilteredData(filteredData);
      dispatchPurposeValue(purposeValue);
      this.setState({
        selectVisibiility: false,
        clearPurposeVisibility: true,
        purposeChecked: true
      });
    }
  };
  togglePurposeSelect = () => {
    this.setState({
      selectVisibiility: !this.state.selectVisibiility
    });
  };
  onPurposeClear = () => {
    const { dispatchPurposeValue, dispatchFilteredData } = this.props;
    dispatchPurposeValue("");
    dispatchFilteredData(this.props.items);
    this.setState({
      clearPurposeVisibility: false,
      purposeChecked: false
    });
  };
  expenseList = () => {
    return [
      "home",
      "food",
      "sport",
      "transport",
      "shopping",
      "family",
      "rest",
      "other"
    ];
  };
  incomeList = () => {
    return ["salary", "business", "premium", "debt", "else"];
  };
  allPurposesList = () => {
    return [...this.expenseList(), ...this.incomeList()];
  };

  render() {
    const purposeNamesList =
      this.props.operationType === "expense"
        ? this.expenseList()
        : this.props.operationType === "income"
        ? this.incomeList()
        : this.allPurposesList();
    const { selectVisibiility, clearPurposeVisibility } = this.state;
    const purposeSelect = selectVisibiility ? (
      <PurposeDropdown
        onPurposeSelect={this.onPurposeSelect}
        purposeNamesList={purposeNamesList}
      />
    ) : null;
    const purposeClearBtn = clearPurposeVisibility ? (
      <button
        className="clear-purpose-btn"
        onClick={this.onPurposeClear}
        type="button"
      >
        <Icon icon="close" iconClass="clear-purpose-icon" />
      </button>
    ) : null;
    return (
      <div className="purpose-sort">
        <button
          className="filter-purpose-btn"
          onClick={this.togglePurposeSelect}
          type="button"
        >
          <Icon icon="purposes" iconClass="filter-purpose-icon" />
        </button>
        {purposeSelect}
        {purposeClearBtn}
      </div>
    );
  }
}

const mapStateToProps = ({ periodItems, operationType }) => {
  return { items: periodItems, operationType };
};
const mapDispatchToProps = dispatch => {
  return {
    dispatchFilteredData: data => {
      dispatch(changeItemsToShow(data));
    },
    dispatchPurposeValue: value => {
      dispatch(dispatchPurposeValue(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurposeSortPicker);
