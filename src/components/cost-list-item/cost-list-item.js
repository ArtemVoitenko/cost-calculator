import React, { Component } from "react";
import { connect } from "react-redux";
import ListItemView from "./listItemView";
import EditItemView from "./editItemView";
export default class CostListItem extends Component {
  state = {
    editMode: false
  };
  onEditClick = () => {
    this.setState({
      editMode: true
    });
  };
  applyChange = () => {
    this.setState({
      editMode: false
    });
  };
  render() {
    const { editMode } = this.state;
    if (editMode) {
      return <EditItemView {...this.props} applyChange={this.applyChange} />;
    }
    return <ListItemView {...this.props} onEditClick={this.onEditClick} />;
  }
}
