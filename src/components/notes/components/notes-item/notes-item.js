import React from "react";
import "./notes-item.scss";
import Icon from "../../../icon";
const NotesItem = ({ title, description, itemColor, itemId, removeNote }) => {
  let itemStyle = { backgroundColor: itemColor };
  return (
    <div className="notes-item" style={itemStyle}>
      <button
        className="notes-item__remove"
        onClick={() => {
          removeNote(itemId);
        }}
      >
        <Icon icon="delete" iconClass="notes-item__icon" />
      </button>
      <p className="notes-item__title">{title}</p>
      <p className="notes-item__description">{description}</p>
    </div>
  );
};
export default NotesItem;