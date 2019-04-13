import React, { Component } from "react";
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
    this.props.changeItemView(this.props.itemId);
  };
  applyChange = () => {
    this.setState({
      editMode: false
    });
  };
  render() {
    const { editMode } = this.state;
    if (editMode && this.props.editItemId === this.props.itemId) {
      return <EditItemView {...this.props} applyChange={this.applyChange} />;
    }
    return <ListItemView {...this.props} onEditClick={this.onEditClick} />;
  }
}
