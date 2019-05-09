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
              key={note.itemId}
              title={note.title}
              description={note.description}
              itemColor={note.itemColor}
              itemId={note.itemId}
              removeNote={noteId => {
                this.props.removeNote(noteId);
              }}
            />
          );
        })}
      </div>
    );
  }
}
