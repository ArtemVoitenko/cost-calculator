import React, { Component } from "react";
import "./notes-search.scss";

export default class NotesSearch extends Component {
  onSearch = e => {
    const searchValue = e.target.value;
    console.log(this.props.notes);
    let filteredData = this.props.notes.filter(item => {
      return (
        item.note_description.indexOf(searchValue) > -1 ||
        item.note_title.indexOf(searchValue) > -1
      );
    });
    return this.props.onSearch(filteredData);
  };
  render() {
    console.log(this.props.notes);
    return (
      <div className="search-wrapper">
        <input type="text" onChange={this.onSearch} className="notes-input" />
      </div>
    );
  }
}
