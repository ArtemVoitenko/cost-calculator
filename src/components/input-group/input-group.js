import React, { Component } from "react";
import Calendar from "react-calendar";
import { addItem, changeItemCreatorVisibility } from "../../actions";
import { connect } from "react-redux";
import PurposeList from "../purpose-list";
import ActionImage from "../action-image";
import "./input-group.scss";

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
  state = {
    ...this.props.state,
    actionType: "expense",
    actionPurpose: "other",
    calendarVisibility: false,
    nameError: true,
    sumError: true,
    allInputsValid: false
  };
  componentDidMount() {
    if (!this.state.actionDate) {
      this.setState({
        actionDate: this.convertDate(new Date()),
        dateMilliseconds: new Date().getTime()
      });
    }
  }
  onNameInput = e => {
    const actionName = e.target.value;
    this.setState({
      actionName
    });
  };
  onTypeChange = e => {
    const actionType = e.target.value;
    this.setState({ actionType });
    if (actionType === "expense") {
    } else {
      this.setState({ actionPurpose: "else" });
    }
  };
  onSumInput = e => {
    const value = e.target.value;
    const sum = !isNaN(parseFloat(value)) ? parseFloat(value) : "";
    this.setState({ actionSum: sum });
  };
  onDescriptionInput = e => {
    const description = e.target.value;
    this.setState({
      actionDescription: description
    });
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
      dateMilliseconds: date.getTime(),
      calendarVisibility: false
    });
  };
  onPurposeChoose = async purpose => {
    await this.setState({ actionPurpose: purpose });
  };
  generateId = () => {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };
  addImages = e => {
    var images = e.target.files;
    for (var i = 0, f; (f = images[i]); i++) {
      var reader = new FileReader();
      reader.onload = e => {
        this.setState(({ actionImages = [] }) => {
          return { actionImages: [...actionImages, e.target.result] };
        });
      };
      reader.readAsDataURL(f);
    }
  };
  fileInputImitation = e => {
    e.target.nextSibling.click();
  };
  onImageRemove = idx => {
    this.setState(({ actionImages }) => {
      return {
        actionImages: [
          ...actionImages.slice(0, idx),
          ...actionImages.slice(idx + 1)
        ]
      };
    });
  };
  renderImagesPreview = images => {
    return images.map((image, idx) => {
      return (
        <ActionImage
          url={image}
          onImageRemove={this.onImageRemove}
          key={idx}
          imageId={idx}
        />
      );
    });
  };
  applyChange = async () => {
    this.props.applyChange();
    const data = this.state;
    const prevData = await JSON.parse(localStorage.getItem("items"));

    const editedItemIdx = await prevData.findIndex(item => {
      return item.actionId === this.state.actionId;
    });

    await localStorage.setItem(
      "items",
      JSON.stringify([
        ...prevData.slice(0, editedItemIdx),
        data,
        ...prevData.slice(editedItemIdx + 1)
      ])
    );
    const dataToStore = JSON.parse(localStorage.getItem("items"));
    this.props.addItem(dataToStore);
  };
  applyChangeClick = async () => {
    await this.checkIsValidInput();
    this.state.allInputsValid ? this.applyChange() : alert("You are stupid");
  };
  onSubmitClick = async () => {
    await this.checkIsValidInput();
    this.state.allInputsValid ? this.onSubmit() : alert("You are stupid");
  };
  checkIsValidInput = () => {
    const { actionName, actionSum } = this.state;

    if (actionName && actionSum) {
      this.setState({ allInputsValid: true });
    }
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
    this.setState({
      actionName: "",
      actionSum: "",
      actionType: "expense",
      actionDate: this.convertDate(new Date()),
      actionDescription: "",
      actionPurpose: "other",
      dateMilliseconds: new Date().getTime(),
      actionImages: []
    });
    this.props.changeCreatorVisibility();
  };

  render() {
    const {
      calendarVisibility,
      actionName,
      actionSum,
      actionType,
      actionDate,
      actionDescription,
      actionImages = []
    } = this.state;

    const imageList = () => {
      return actionImages ? (
        <div>{this.renderImagesPreview(actionImages)}</div>
      ) : null;
    };
    const sumInputClass = !actionSum ? "input--error" : "";
    const nameInputClass = !actionName ? "input--error" : "";
    const isVisible = calendarVisibility ? "active" : "";
    const method =
      this.props.view === "edit" ? this.applyChangeClick : this.onSubmitClick;

    return (
      <div>
        <div className="input-panel">
          <div className={`input ${nameInputClass}`}>
            <label class="input__label" htmlFor="title">
              Record
            </label>
            <input
              className="input__field"
              onChange={this.onNameInput}
              value={actionName}
              placeholder="type header"
              type="text"
              id="title"
            />
          </div>
          <div className={`input ${sumInputClass}`}>
            <label class="input__label" htmlFor="sum">
              Sum
            </label>
            <input
              className="input__field"
              onChange={this.onSumInput}
              value={actionSum}
              placeholder="Enter sum"
              type="text"
            />
          </div>
          <select
            name="actionType"
            id="actionTypeSelect"
            onChange={this.onTypeChange}
            value={actionType}
          >
            <option defaultValue="expense">expense</option>
            <option value="income">income</option>
          </select>
          <div className="input-panel__calendar-wrapper">
            <button
              className="btn-show-calendar"
              onClick={this.showCalendar}
              type="button"
            >
              {actionDate}
            </button>
            <div className={`input-panel__calendar ${isVisible}`}>
              <Calendar onChange={this.onCalendarPick} />
            </div>
          </div>
          <PurposeList
            onPurposeChoose={this.onPurposeChoose}
            actionType={actionType}
            purpose={this.state.actionPurpose}
          />
          <button type="button" onClick={this.fileInputImitation}>
            browse
          </button>
          <input type="file" hidden onChange={this.addImages} />

          {imageList()}
          <button
            className="input-panel__submit"
            type="button"
            onClick={method}
          >
            ok
          </button>
        </div>
        <div className="input input--textarea">
          <label class="input__label" htmlFor="description">
            Description
          </label>

          <textarea
            className="input__field"
            value={actionDescription}
            onChange={this.onDescriptionInput}
            id="description"
          />
        </div>
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
    },
    changeCreatorVisibility: () => {
      dispatch(changeItemCreatorVisibility());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputGroup);
