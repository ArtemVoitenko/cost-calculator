import React, { Component } from "react";
import { connect } from "react-redux";
import { changeItemsToShow, changePeriodItems } from "../../actions";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

class PeriodSortPicker extends Component {
  state = {
    date: "",
    periodSort: false
  };
  onChange = async date => {
    const {
      purposeValue,
      items,
      changePeriodItems,
      changeShownItems
    } = this.props;
    await this.setState({ date });

    if (this.state.date) {
      const sortedList = items.filter(item => {
        if (purposeValue) {
          return this.sortByDate(item) && this.sortByPurpose(item);
        } else {
          return this.sortByDate(item, purposeValue);
        }
      });
      changeShownItems(sortedList);
      changePeriodItems(sortedList);
    } else {
      if (purposeValue) {
        const filteredByPurpose = items.filter(item => {
          return item.actionPurpose === purposeValue;
        });
        changeShownItems(filteredByPurpose);
      } else {
        changeShownItems(items);
      }
      changePeriodItems(items);
    }
  };
  sortByDate = item => {
    return (
      item.dateMilliseconds >= this.state.date[0] &&
      item.dateMilliseconds <= this.state.date[1]
    );
  };
  sortByPurpose = (item, value) => {
    return item.actionPurpose === value;
  };
  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.onChange(this.state.date);
    }
  }
  render() {
    return (
      <div className="sort-section">
        <div className="sort-section__period">
          <button className="sort-section__btn" type="button">
            sort by period
          </button>
          <DateRangePicker
            showLeadingZeros={true}
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ data, purposeValue }) => {
  return {
    items: data,
    purposeValue
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeShownItems: items => dispatch(changeItemsToShow(items)),
    changePeriodItems: items => dispatch(changePeriodItems(items))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeriodSortPicker);
