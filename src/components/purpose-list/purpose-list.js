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
  onPurposeSelect = e => {
    let purposeValue = e.target.dataset.value;
    this.setState({
      purpose: purposeValue,
      listVisibility: false
    });
    this.props.onPurposeChoose(purposeValue);
  };

  render() {
    const purposeDropdown = this.state.listVisibility ? (
      <PurposeDropdown onPurposeSelect={this.onPurposeSelect} />
    ) : null;
    return (
      <div className="purpose">
        <button onClick={this.onOpenClick} className="purpose__open ">
          <div
            className={`purpose-image purpose-image--${this.state.purpose}`}
          />
        </button>
        {purposeDropdown}
      </div>
    );
  }
}
