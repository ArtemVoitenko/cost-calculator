import React, { Component } from "react";
import ListItemView from "./listItemView";
import EditItemView from "./editItemView";
export default class CostListItem extends Component {
  state = {
    editMode: false
  };
  onEditClick = actionId => {
    this.props.changeItemView(actionId);
    this.setState({
      editMode: true
    });
  };
  componentDidUpdate(prevState) {
    console.log(this.props.editItemId);
    console.log(prevState.itemId);
  }

  applyChange = () => {
    this.setState({
      editMode: false
    });
  };
  render() {
    // console.log(this.props.itemId);
    const { editMode } = this.state;

    if (editMode && this.props.editItemId === this.props.itemId) {
      return <EditItemView {...this.props} applyChange={this.applyChange} />;
    }
    return <ListItemView {...this.props} onEditClick={this.onEditClick} />;
  }
}
