import React, { Component } from "react";
import "./purpose-list.scss";
import PurposeDropdown from "../purpose-dropdown";
export default class PusposeList extends Component {
  state = {
    purpose: "other",
    listVisibility: false
  };
  onOpenClick = () => {
    this.setState({
      listVisibility: !this.state.listVisibility
    });
  };
  onPurposeSelect = purposeValue => {
    this.setState({
      purpose: purposeValue,
      listVisibility: false
    });
    this.props.onPurposeChoose(purposeValue);
  };
  consumptionList = () => {
    return [
      "home",
      "food",
      "sport",
      "transport",
      "shopping",
      "family",
      "rest",
      "other"
    ];
  };
  incomeList = () => {
    return ["salary", "business", "premium", "debt", "else"];
  };
  allPurposesList = () => {
    return [...this.consumptionList(), ...this.incomeList()];
  };

  render() {
    console.log(this.allPurposesList());
    const purposeNamesList =
      this.props.actionType === "consumption"
        ? this.consumptionList()
        : this.props.actionType === "income"
        ? this.incomeList()
        : this.allPurposesList();
    const purposeDropdown = this.state.listVisibility ? (
      <PurposeDropdown
        onPurposeSelect={this.onPurposeSelect}
        purposeNamesList={purposeNamesList}
      />
    ) : null;
    return (
      <div className="purpose">
        <button
          type="button"
          onClick={this.onOpenClick}
          className="purpose__open "
        >
          <div
            className={`purpose-image purpose-image--${this.state.purpose}`}
          />
        </button>
        {purposeDropdown}
      </div>
    );
  }
}
