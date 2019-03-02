import React, { Component } from "react";
import "./input-panel.scss";
import InputGroup from "../input-group";
class ItemCreator extends Component {
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
    actionName: "",
    actionType: "consumption",
    actionSum: "",
    actionDate: this.convertDate(new Date()),
    actionId: ""
  };

  render() {
    const emptyState = this.state;
    return <InputGroup state={emptyState} view="item-creator" />;
  }
}

export default ItemCreator;
