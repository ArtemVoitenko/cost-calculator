import React, { Component } from "react";
import Calendar from "react-calendar";
import { addItem } from "../../actions";
import { connect } from "react-redux";
class InputGroup extends Component {
  convertDate = date => {
    const day = () => {
      if (date.getDate() < 10) {
        return `0${date.getDate()}`;
      }
      return date.getDate();
    };
    const month = () => {
      if (date.getMonth() < 10) {
        return `0${date.getMonth() + 1}`;
      }
      return date.getMonth() + 1;
    };
    const year = date.getFullYear();
    return `${day()}.${month()}.${year}`;
  };
  state = { ...this.props.state, calendarVisibility: false };
  onNameInput = e => {
    const actionName = e.target.value;
    this.setState({
      actionName
    });
  };
  onTypeChange = e => {
    const actionType = e.target.value;
    this.setState({ actionType });
  };
  onSumInput = e => {
    const sum = e.target.value;
    this.setState({ actionSum: sum });
  };
  showCalendar = () => {
    this.setState({
      calendarVisibility: !this.state.calendarVisibility
    });
  };
  onCalendarPick = date => {
    var convertedData = this.convertDate(date);
    this.setState({
      actionDate: convertedData,
      calendarVisibility: false
    });
  };
  generateId = () => {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };
  applyChange = () => {
    console.log("Success");
    this.props.applyChange();
  };
  onSubmit = async () => {
    await this.setState({
      actionId: this.generateId()
    });
    const data = this.state;
    if (localStorage.getItem("items")) {
      const prevData = JSON.parse(localStorage.getItem("items"));
      localStorage.setItem("items", JSON.stringify([...prevData, data]));
    } else {
      localStorage.setItem("items", JSON.stringify([data]));
    }
    const dataToStore = JSON.parse(localStorage.getItem("items"));
    this.props.addItem(dataToStore);
  };

  render() {
    console.log(this.state);
    const {
      calendarVisibility,
      actionName,
      actionSum,
      actionType,
      actionDate
    } = this.state;
    const isVisible = calendarVisibility ? "active" : "";
    console.log(this.props.view);
    const method =
      this.props.view === "edit" ? this.props.applyChange : this.onSubmit;
    return (
      <div className="input-panel">
        <form action="#" className="input-panel__form">
          <input
            className="input-panel__input"
            onChange={this.onNameInput}
            value={actionName}
            placeholder="type header"
            type="text"
          />
          <input
            className="input-panel__input"
            onChange={this.onSumInput}
            value={actionSum}
            placeholder="Enter sum"
            type="text"
          />
          <select
            name="actionType"
            id="actionTypeSelect"
            onChange={this.onTypeChange}
            value={actionType}
          >
            <option defaultValue="consumption">consumption</option>
            <option value="income">income</option>
          </select>
          <div className="input-panel__calendar-wrapper">
            <button
              className="btn btn-primary input-panel__button"
              onClick={this.showCalendar}
            >
              {actionDate}
            </button>
            <div className={`input-panel__calendar ${isVisible}`}>
              <Calendar onChange={this.onCalendarPick} />
            </div>
          </div>

          <button
            className="input-panel__submit"
            type="button"
            onClick={method}
          >
            ok
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addItem: item => {
      dispatch(addItem(item));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputGroup);
