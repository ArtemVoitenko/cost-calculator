import React, { Component, Fragment } from "react";
import NoteCreator from "./components/note-creator";
import NotesGrid from "./components/notes-grid";
import NotesSearch from "./components/notes-search/notes-search";
export default class Notes extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.setState({
      items: this.getNotesFromStorage()
    });
  }
  getNotesFromStorage = () => {
    return JSON.parse(localStorage.getItem("notes"));
  };
  onUpdateItemList = async newItemList => {
    await this.setState({
      items: newItemList
    });
    await localStorage.setItem("notes", JSON.stringify(this.state.items));
  };
  onSearch = notes => {
    this.setState({
      items: notes
    });
  };
  removeNote = noteId => {
    const { items } = this.state;
    const idxToRemove = items.findIndex(element => {
      return element.itemId === noteId;
    });

    const newNotesList = [
      ...items.slice(0, idxToRemove),
      ...items.slice(idxToRemove + 1)
    ];
    this.onUpdateItemList(newNotesList);
  };

  render() {
    const notesGrid = this.state.items ? (
      <NotesGrid items={this.state.items} removeNote={this.removeNote} />
    ) : null;
    return (
      <Fragment>
        <NotesSearch
          notes={this.getNotesFromStorage()}
          onSearch={this.onSearch}
        />
        }
        <NoteCreator
          onUpdateItemList={this.onUpdateItemList}
          items={this.state.items}
        />
        {notesGrid}
      </Fragment>
    );
  }
}
