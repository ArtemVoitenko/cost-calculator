import React, { Component } from "react";
import { connect } from "react-redux";
import { changeItemsToShow } from "../../actions";

class SumSortPicker extends Component {
  state = {
    sumSortType: ""
  };
  onIncreaseChosen = () => {
    this.setState({ sumSortType: "increase" });
  };
  onDecreaseChosen = () => {
    this.setState({ sumSortType: "decrease" });
  };
  componentDidUpdate(prevState) {
    if (this.state.sumSortType !== prevState.sumSortType) {
      this.onSortTypeChange();
      console.log(this.props.items);
    }
  }
  onSortTypeChange = () => {
    const { items, changeShownItems } = this.props;
    if (this.state.sumSortType === "increase") {
      const listByIncrease = items.sort((a, b) => {
        const first = a.actionSum;
        const second = b.actionSum;
        if (first < second) return -1;
        if (first > second) return 1;
      });

      changeShownItems(listByIncrease);
    } else if (this.state.sumSortType === "decrease") {
      const listByDecrease = items.sort((a, b) => {
        const first = a.actionSum;
        const second = b.actionSum;
        if (first < second) return 1;
        if (first > second) return -1;
      });
      changeShownItems(listByDecrease);
    } else {
      changeShownItems(items);
    }
  };
  render() {
    return (
      <div className="sort-sum">
        <button
          onClick={this.onIncreaseChosen}
          className="sort-sum__btn sort-sum__btn--increase"
        >
          increase
        </button>
        <button
          onClick={this.onDecreaseChosen}
          className="sort-sum__btn sort-sum__btn--decrease"
        >
          decrease
        </button>
      </div>
    );
  }
}
const mapStateToProps = ({ dataToShow }) => {
  return {
    items: dataToShow
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
)(SumSortPicker);
