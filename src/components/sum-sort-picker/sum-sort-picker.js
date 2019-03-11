import React, { Component } from "react";
import { connect } from "react-redux";
import { changeItemsToShow } from "../../actions";

class SumSortPicker extends Component {
  state = {
    sumSortType: ""
  };
  componentDidMount() {
    // this.onSortTypeChange();
  }
  onIncreaseChosen = () => {
    const { items, changeShownItems } = this.props;
    const unsortedList = [...items];
    const listByIncrease = unsortedList.sort((a, b) => {
      const first = parseFloat(a.actionSum);
      const second = parseFloat(b.actionSum);
      if (first < second) return -1;
      if (first > second) return 1;
    });

    changeShownItems(listByIncrease);
  };
  onDecreaseChosen = () => {
    const { items, changeShownItems } = this.props;
    const unsortedList = [...items];
    const listByDecrease = unsortedList.sort((a, b) => {
      const first = parseFloat(a.actionSum);
      const second = parseFloat(b.actionSum);
      console.log(`first:${first}
      second: ${second}`);
      if (first < second) return 1;
      if (first > second) return -1;
    });
    changeShownItems(listByDecrease);
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
