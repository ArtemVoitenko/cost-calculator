import React, { Component } from "react";
import { connect } from "react-redux";
import { operationTypeFilterChange } from "../../actions";
class OperationTypeFilter extends Component {
  state = {
    activeFilter: "all"
  };
  changeOperationTypeFilter = e => {
    const value = e.target.value;
    this.setState({ activeFilter: value });
    const { dispatchOperationFilterValue } = this.props;
    dispatchOperationFilterValue(value);
  };
  buttonValues = ["all", "income", "expense"];
  render() {
    return (
      <div className="operation-filter">
        {this.buttonValues.map(item => {
          const isActive = this.state.activeFilter === item ? "active" : null;
          return (
            <button
              onClick={e => {
                this.changeOperationTypeFilter(e);
              }}
              className={`operation-filter__btn ${isActive}`}
              value={item}
            >
              {item}
            </button>
          );
        })}
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
