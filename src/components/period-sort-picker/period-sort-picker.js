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
    const defaultFilter = items.filter(item => {
      return this.filterByActionType(item);
    });
    if (this.state.date) {
      const sortedList = items.filter(item => {
        if (purposeValue) {
          console.log("its crush");
          return (
            this.sortByDate(item) &&
            this.sortByPurpose(item) &&
            this.filterByActionType(item)
          );
        } else {
          return (
            this.sortByDate(item, purposeValue) && this.filterByActionType(item)
          );
        }
      });
      changeShownItems(sortedList);
      const filteredByPeriod = items.filter(item => {
        return (
          this.sortByDate(item, purposeValue) && this.filterByActionType(item)
        );
      });
      changePeriodItems(filteredByPeriod);
    } else {
      if (purposeValue) {
        const filteredByPurpose = items.filter(item => {
          return (
            item.actionPurpose === purposeValue && this.filterByActionType(item)
          );
        });
        changeShownItems(filteredByPurpose);
        changePeriodItems(defaultFilter);
      } else {
        changeShownItems(defaultFilter);
        changePeriodItems(defaultFilter);
      }
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
  filterByActionType = item => {
    if (this.props.operationType === "all") {
      return item;
    } else {
      return item.actionType === this.props.operationType;
    }
  };
  componentDidUpdate(prevProps) {
    if (
      this.props.items !== prevProps.items ||
      this.props.operationType !== prevProps.operationType
    ) {
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
const mapStateToProps = ({ data, purposeValue, operationType }) => {
  return {
    items: data,
    purposeValue,
    operationType
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
