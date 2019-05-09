import React from "react";
import "./notes-item.scss";
import Icon from "../../../icon";
const NotesItem = ({
  note_title,
  note_description,
  note_color,
  note_id,
  removeNote
}) => {
  let itemStyle = { backgroundColor: note_color };
  return (
    <div className="notes-item">
      <div className="notes-item__additional" />
      <div className="notes-item__main">
        <div className="notes-item__color" style={itemStyle} />
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
      </div>
    </div>
  );
};
export default NotesItem;
