import React, { Component, Fragment } from "react";
import NoteCreator from "./components/note-creator";
import NotesGrid from "./components/notes-grid";
export default class Notes extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.setState({
      items: JSON.parse(localStorage.getItem("notes"))
    });
  }

  onUpdateItemList = newItemList => {
    this.setState({
      items: newItemList
    });
    localStorage.setItem("notes", JSON.stringify(this.state.items));
  };

  render() {
    const notesGrid = this.state.items ? (
      <NotesGrid items={this.state.items} />
    ) : null;
    return (
      <Fragment>
        <NoteCreator
          onUpdateItemList={this.onUpdateItemList}
          items={this.state.items}
        />
        {notesGrid}
      </Fragment>
    );
  }
}
