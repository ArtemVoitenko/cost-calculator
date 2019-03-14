import React, { Component } from "react";
import { connect } from "react-redux";
import { changeItemsToShow } from "../../actions";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

class PeriodSortPicker extends Component {
  state = {
    date: "",
    periodSort: false
  };
  onChange = async date => {
    await this.setState({ date });
    if (this.state.date) {
      const sortedList = this.props.items.filter(item => {
        return (
          item.dateMilliseconds >= this.state.date[0] &&
          item.dateMilliseconds <= this.state.date[1]
        );
      });
      this.props.changeShownItems(sortedList);
    } else {
      this.props.changeShownItems(this.props.items);
    }
  };
  componentDidUpdate(prevProps) {
    console.log("Period-sort-picker-update");
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
const mapStateToProps = ({ data }) => {
  return {
    items: data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeShownItems: items => dispatch(changeItemsToShow(items))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeriodSortPicker);
