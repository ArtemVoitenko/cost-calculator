import React, { Component } from "react";
import NotesItem from "../notes-item/notes-item";

import "./notes-grid.scss";

export default class NotesGrid extends Component {
  state = {
    activeNoteId: ""
  };
  onActiveNote = noteId => {
    this.setState({ activeNoteId: noteId });
  };
  render() {
    const { items } = this.props;
    return (
      <div className="notes-grid">
        {items.map(note => {
          return (
            <NotesItem
              key={note.note_id}
              note_title={note.note_title}
              note_description={note.note_description}
              note_color={note.note_itemColor}
              note_id={note.note_id}
              removeNote={note_id => {
                this.props.removeNote(note_id);
              }}
            />
          );
        })}
      </div>
    );
  }
}
