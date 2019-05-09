import React, { Component, Fragment } from "react";
import NoteCreator from "./components/note-creator";
import NotesGrid from "./components/notes-grid";
import NotesSearch from "./components/notes-search/notes-search";
import { database } from "../../firebase";
import "./notes.scss";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default class Notes extends Component {
  state = {
    items: [],
    notesCreatorVisibility: true
  };

  componentDidMount() {
    this.getNotesFromStorage();
    console.log("hello");
    // this.setState({
    //   items: this.getNotesFromStorage()
    // });
  }
  getNotesFromStorage = () => {
    const notesRef = database.ref("notes");
    notesRef.once("value").then(snapshot => {
      this.setState({ items: Object.values(snapshot.val()) });
    });
    console.log(this.state.items);
    // console.log("hello");

    // return database.ref("notes");
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
  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };
  render() {
    const { items, notesCreatorVisibility, editorState } = this.state;
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
