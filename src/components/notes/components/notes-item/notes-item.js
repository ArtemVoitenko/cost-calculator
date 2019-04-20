import React from "react";

const NotesItem = ({ title, description }) => {
  return (
    <div className="notes-item">
      <p className="notes-item__title">{title}</p>
      <p className="notes-item__description">{description}</p>
    </div>
  );
};
export default NotesItem;
