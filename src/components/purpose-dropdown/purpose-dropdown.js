import React from "react";
import "./purpose-dropdown.scss";
const PurposeDropdown = ({ onPurposeSelect, purposeNamesList }) => {
  return (
    <ul
      onClick={e => {
        let purposeValue = e.target.dataset.value;
        onPurposeSelect(purposeValue);
      }}
      className="purpose-dropdown"
    >
      {purposeNamesList.map(purposeName => {
        return (
          <li
            data-value={purposeName}
            key={purposeName}
            className="purpose-dropdown__item"
          >
            <div className={`purpose-image purpose-image--${purposeName}`} />
            {purposeName}
          </li>
        );
      })}
    </ul>
  );
};
export default PurposeDropdown;
