import React from "react";
import NotesItem from "../notes-item/notes-item";

const NotesGrid = ({ items }) => {
  return (
    <div className="notes-grid">
      {items.map(note => {
        return <NotesItem title={note.title} description={note.description} />;
      })}
    </div>
  );
};
export default NotesGrid;
