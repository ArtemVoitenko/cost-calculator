import React, { Component } from "react";
import { connect } from "react-redux";
import { operationTypeFilterChange } from "../../actions";
class OperationTypeFilter extends Component {
  changeOperationTypeFilter = e => {
    const value = e.target.value;
    const { dispatchOperationFilterValue } = this.props;
    dispatchOperationFilterValue(value);
  };
  render() {
    return (
      <div className="operation-filter">
        <button
          onClick={e => {
            this.changeOperationTypeFilter(e);
          }}
          className={`operation-filter__btn`}
          value="all"
        >
          all
        </button>
        <button
          onClick={e => {
            this.changeOperationTypeFilter(e);
          }}
          className="operation-filter__btn "
          value="income"
        >
          income
        </button>{" "}
        <button
          onClick={e => {
            this.changeOperationTypeFilter(e);
          }}
          className="operation-filter__btn "
          value="expense"
        >
          expense
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dispatchOperationFilterValue: value => {
      dispatch(operationTypeFilterChange(value));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(OperationTypeFilter);
