import React, { Component } from "react";
import { connect } from "react-redux";
import PurposeDropdown from "../purpose-dropdown";
import { changeItemsToShow, dispatchPurposeValue } from "../../actions";

class PurposeSortPicker extends Component {
  onPurposeSelect = purposeValue => {
    const { items, dispatchFilteredData, dispatchPurposeValue } = this.props;

    const filteredData = items.filter(item => {
      return item.actionPurpose === purposeValue;
    });
    dispatchFilteredData(filteredData);
    dispatchPurposeValue(purposeValue);
  };
  onPurposeClear = () => {
    const { dispatchPurposeValue, dispatchFilteredData } = this.props;
    dispatchPurposeValue("");
    dispatchFilteredData(this.props.items);
  };

  render() {
    return (
      <div>
        <button type="button">purposeFilter</button>
        <button onClick={this.onPurposeClear} type="button">
          clearPurpose
        </button>
        <PurposeDropdown onPurposeSelect={this.onPurposeSelect} />
      </div>
    );
  }
}

const mapStateToProps = ({ periodItems }) => {
  return { items: periodItems };
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
