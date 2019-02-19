import React, { Component } from "react";
import { connect } from "react-redux";
import CostListItem from "../cost-list-item";
import "./cost-list.scss";
import { deleteItem } from "../../actions";

class CostList extends Component {
  onRemove = id => {
    const currentData = JSON.parse(localStorage.getItem("items"));
    const elementToRemove = currentData.findIndex(item => {
      return item.actionId === id;
    });
    const newData = [
      ...currentData.slice(0, elementToRemove),
      ...currentData.slice(elementToRemove + 1)
    ];
    localStorage.setItem("items", JSON.stringify(newData));
    this.props.deleteItem(JSON.parse(localStorage.getItem("items")));
  };
  // onEdit() => {}
  renderList = () => {
    const listData = this.props.items.data;
    console.log(listData);
    if (listData) {
      return listData.map(item => {
        return (
          <CostListItem
            key={item.actionId}
            {...item}
            onRemove={this.onRemove}
          />
        );
      });
    } else {
      return <div>Empty</div>;
    }
  };
  render() {
    return <ul className="cost-list">{this.renderList()}</ul>;
  }
}

const mapStateToProps = state => {
  return {
    items: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteItem: itemList => {
      dispatch(deleteItem(itemList));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CostList);
