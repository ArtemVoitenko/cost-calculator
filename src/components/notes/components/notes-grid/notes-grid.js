import React, { Component } from "react";
import NotesItem from "../notes-item/notes-item";

import "./notes-grid.scss";

export default class NotesGrid extends Component {
  state = {
    activeNoteId: ""
  };
  // onActiveNote = note_id => {
  //   this.props.editNote(note_id);
  // };
  render() {
    const { items } = this.props;
    return (
      <div className="notes-grid">
        {items.map(note => {
          return (
            <NotesItem
              key={note.note_id}
              note_title={note.note_title}
              note_date={note.note_date}
              note_description={note.note_description}
              note_color={note.note_color}
              note_id={note.note_id}
              removeNote={note_id => {
                this.props.removeNote(note_id);
              }}
              onActiveNote={note_id => {
                this.props.editNote(note_id);
              }}
            />
          );
        })}
      </div>
    );
  }
}
