import React from "react";
import "./notes-item.scss";
import Icon from "../../../icon";
import ReactTimeAgo from "react-time-ago";

var moment = require("moment");
const NotesItem = ({
  note_title,
  note_description,
  note_color,
  note_id,
  note_date,
  removeNote,
  onActiveNote
}) => {
  let itemStyle = {};
  const creationTime = (
    <ReactTimeAgo timeStyle="twitter" date={new Date(note_date)} />
  );
  // const creationTime = "";
  console.log(note_color);
  return (
    <div
      onClick={() => {
        onActiveNote(note_id);
      }}
      className="notes-item"
    >
      <div className="notes-item__additional">
        <div className="notes-item__date">{creationTime}</div>
      </div>
      <div className="notes-item__main">
        <button
          className="notes-item__remove"
          onClick={() => {
            removeNote(note_id);
          }}
        >
          <Icon icon="delete" iconClass="notes-item__icon" />
        </button>
        <p className="notes-item__title">{note_title}</p>
        <p className="notes-item__description">{note_description}</p>
        <div
          style={{ backgroundColor: note_color }}
          className="notes-item__decorator"
        />
      </div>
    </div>
  );
};
export default NotesItem;
