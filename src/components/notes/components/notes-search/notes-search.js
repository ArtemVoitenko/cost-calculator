import React, { Component } from "react";

export default class NotesSearch extends Component {
  onSearch = e => {
    const searchValue = e.target.value;
    console.log(this.props.notes);
    let filteredData = this.props.notes.filter(item => {
      console.log(searchValue);
      console.log(item.description.indexOf(searchValue));
      return (
        item.description.indexOf(searchValue) > -1 ||
        item.title.indexOf(searchValue) > -1
      );
    });
    return this.props.onSearch(filteredData);
  };
  render() {
    return (
      <div className="search-wrapper">
        <input type="text" onChange={this.onSearch} className="input" />
      </div>
    );
  }
}
