import React from "react";
import "./purpose-dropdown.scss";
const PurposeDropdown = ({ onPurposeSelect }) => {
  return (
    <ul
      onClick={e => {
        onPurposeSelect(e);
      }}
      className="purpose-dropdown"
    >
      <li data-value="home" className="purpose-dropdown__item">
        <div className="purpose-image purpose-image--home" />
        Home
      </li>
      <li data-value="food" className="purpose-dropdown__item">
        <div className="purpose-image purpose-image--food" />
        Eat
      </li>
      <li data-value="sport" className="purpose-dropdown__item">
        <div className="purpose-image purpose-image--sport" />
        Sport
      </li>
      <li data-value="transport" className="purpose-dropdown__item">
        <div className="purpose-image purpose-image--transport" />
        Transport
      </li>
      <li data-value="shopping" className="purpose-dropdown__item">
        <div className="purpose-image purpose-image--shopping" />
        Shopping
      </li>
      <li data-value="family" className="purpose-dropdown__item">
        <div className="purpose-image purpose-image--family" />
        Family
      </li>
      <li data-value="rest" className="purpose-dropdown__item">
        <div className="purpose-image purpose-image--rest" />
        Rest
      </li>
      <li data-value="other" className="purpose-dropdown__item">
        <div className="purpose-image purpose-image--other" />
        Other
      </li>
    </ul>
  );
};
export default PurposeDropdown;
