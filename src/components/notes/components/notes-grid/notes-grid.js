import React, { Component } from "react";
import NotesItem from "../notes-item/notes-item";
import Masonry from "react-masonry-component";
import "./notes-grid.scss";

export default class NotesGrid extends Component {
  render() {
    const masonryOptions = {
      gutter: 20
    };
    const { items } = this.props;
    return (
      <div className="notes-grid">
        <Masonry options={masonryOptions}>
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
        </Masonry>
      </div>
    );
  }
}
