import React, { Component, Fragment } from "react";
import NoteCreator from "./components/note-creator";
import NotesGrid from "./components/notes-grid";
import NotesSearch from "./components/notes-search/notes-search";
import "./notes.scss";
export default class Notes extends Component {
  state = {
    items: [],
    notesCreatorVisibility: true
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
  openNotesCreator = () => {
    this.setState({ notesCreatorVisibility: true });
  };
  hideNotesCreator = () => {
    this.setState({ notesCreatorVisibility: false });
  };

  render() {
    const { items, notesCreatorVisibility } = this.state;
    const notesGrid = items ? (
      <NotesGrid items={items} removeNote={this.removeNote} />
    ) : null;
    const notesCreator = notesCreatorVisibility ? (
      <NoteCreator
        onUpdateItemList={this.onUpdateItemList}
        hideNotesCreator={this.hideNotesCreator}
        items={items}
      />
    ) : null;
    return (
      <Fragment>
        <div className="notes-body">
          <div className="notes-menu" />
          <div className="notes-section">
            <div className="notes-topline">
              <NotesSearch
                notes={this.getNotesFromStorage()}
                onSearch={this.onSearch}
              />
              <button onClick={this.openNotesCreator} className="notes__create">
                create note
              </button>
            </div>
            {notesGrid}
          </div>

          {notesCreator}
        </div>
      </Fragment>
    );
  }
}
