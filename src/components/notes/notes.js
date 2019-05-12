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
    searchItems: [],
    notesCreatorVisibility: true,
    editorState: "",
    activeNoteId: ""
  };

  componentDidMount() {
    this.getNotesFromDb();
  }
  getNotesFromDb = () => {
    const notesRef = database.ref("notes");
    notesRef.once("value").then(snapshot => {
      return this.setState({
        items: Object.values(snapshot.val()),
        searchItems: Object.values(snapshot.val())
      });
    });
  };

  onSearch = notes => {
    this.setState({
      searchItems: notes
    });
  };
  removeNote = noteId => {
    let noteRef = database.ref("notes/" + noteId);
    noteRef.remove();
    this.getNotesFromDb();
  };
  openNotesCreator = () => {
    this.setState({ notesCreatorVisibility: true });
  };
  hideNotesCreator = () => {
    this.setState({ notesCreatorVisibility: false });
  };
  // onEditorStateChange = editorState => {
  //   this.setState({
  //     editorState
  //   });
  // };
  editNote = note_id => {
    // const noteRef = database.ref(`notes/${note_id}/`);
    // noteRef.once("value").then(snapshot => {
    //   return this.setState({
    //     editorState: Object.values(snapshot.val())
    //   });
    // });
    this.setState({ activeNoteId: note_id });
  };
  render() {
    const {
      items,
      notesCreatorVisibility,
      searchItems,
      editorState,
      activeNoteId
    } = this.state;
    const notesGrid = items ? (
      <NotesGrid
        items={searchItems}
        removeNote={this.removeNote}
        editNote={this.editNote}
      />
    ) : null;
    const notesCreator = notesCreatorVisibility ? (
      <NoteCreator
        // editorState
        activeNoteId={activeNoteId}
        reloadState={this.getNotesFromDb}
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
                notes={[...this.state.items]}
                onSearch={this.onSearch}
              />
            </div>
            {notesGrid}
          </div>
          {notesCreator}
        </div>
      </Fragment>
    );
  }
}
