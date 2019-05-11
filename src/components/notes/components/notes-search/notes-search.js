import React, { Component } from "react";
import "./notes-search.scss";

export default class NotesSearch extends Component {
  onSearch = e => {
    const searchValue = e.target.value.toLowerCase();

    let filteredData = this.props.notes.filter(item => {
      return (
        item.note_description.toLowerCase().indexOf(searchValue) > -1 ||
        item.note_title.toLowerCase().indexOf(searchValue) > -1
      );
    });
    return this.props.onSearch(filteredData);
  };
  render() {
    return (
      <div className="search-wrapper">
        <input type="text" onChange={this.onSearch} className="notes-input" />
      </div>
    );
  }
}
