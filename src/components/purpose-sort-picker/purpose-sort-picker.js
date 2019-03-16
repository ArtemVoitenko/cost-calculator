import React, { Component } from "react";
import { connect } from "react-redux";
import PurposeDropdown from "../purpose-dropdown";
import { changeItemsToShow, dispatchPurposeValue } from "../../actions";

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

  render() {
    const { selectVisibiility, clearPurposeVisibility } = this.state;
    const purposeSelect = selectVisibiility ? (
      <PurposeDropdown onPurposeSelect={this.onPurposeSelect} />
    ) : null;
    const purposeClearBtn = clearPurposeVisibility ? (
      <button onClick={this.onPurposeClear} type="button">
        clearPurpose
      </button>
    ) : null;
    return (
      <div>
        <button onClick={this.togglePurposeSelect} type="button">
          purposeFilter
        </button>
        {purposeSelect}
        {purposeClearBtn}
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
