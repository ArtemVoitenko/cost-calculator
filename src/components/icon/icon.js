import React from "react";
import "./icon.scss";
import sprite from "./sprite.svg";
const Icon = ({ icon, iconClass }) => (
  <i className={iconClass}>
    <svg viewBox="0 0 16 16">
      <use xlinkHref={`${sprite}#${icon}`} />
    </svg>
  </i>
);

export default Icon;
