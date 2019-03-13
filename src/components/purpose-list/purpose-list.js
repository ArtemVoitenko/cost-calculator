import React, { Component } from "react";

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
    console.log(purposeValue);
    this.props.onPurposeChoose(purposeValue);
  };

  render() {
    return (
      <div className="purpose">
        <button onClick={this.onOpenClick} className="purpose__open">
          open
        </button>
        <ul onClick={this.onPurposeSelect} className="purpose-select">
          <li data-value="home" className="purpose-select__item">
            <div className="purpose-select__img-wrapper">
              <img src="#" alt="" className="purpose-select__img" />
            </div>
            Home
          </li>
          <li data-value="food" className="purpose-select__item">
            <div className="purpose-select__img-wrapper">
              <img src="#" alt="" className="purpose-select__img" />
            </div>
            Eat
          </li>
          <li data-value="sport" className="purpose-select__item">
            <div className="purpose-select__img-wrapper">
              <img src="#" alt="" className="purpose-select__img" />
            </div>
            Sport
          </li>
          <li data-value="transport" className="purpose-select__item">
            <div className="purpose-select__img-wrapper">
              <img src="#" alt="" className="purpose-select__img" />
            </div>
            Transport
          </li>
          <li data-value="cloth" className="purpose-select__item">
            <div className="purpose-select__img-wrapper">
              <img src="#" alt="" className="purpose-select__img" />
            </div>
            Cloth
          </li>
          <li data-value="family" className="purpose-select__item">
            <div className="purpose-select__img-wrapper">
              <img src="#" alt="" className="purpose-select__img" />
            </div>
            Family
          </li>
          <li data-value="rest" className="purpose-select__item">
            <div className="purpose-select__img-wrapper">
              <img src="" alt="" className="purpose-select__img" />
            </div>
            Rest
          </li>
          <li data-value="other" className="purpose-select__item">
            <div className="purpose-select__img-wrapper">
              <img src="" alt="" className="purpose-select__img" />
            </div>
            Other
          </li>
        </ul>
      </div>
    );
  }
}
