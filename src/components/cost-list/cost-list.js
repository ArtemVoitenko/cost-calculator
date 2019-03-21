import React, { Component } from "react";
import { connect } from "react-redux";
import CostListItem from "../cost-list-item";
import "./cost-list.scss";
import {
  deleteItem,
  initializeItemsList,
  changeItemsToShow,
  setActionId
} from "../../actions";

class CostList extends Component {
  componentDidMount() {
    this.initializeData();
  }

  initializeData() {
    const data = JSON.parse(localStorage.getItem("items"));
    this.props.initializeItemsList(data);
    this.props.changeShownItems(data);
  }
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
  getItemInfo = actionId => {
    this.props.setActionId(actionId);
    console.log(actionId);
  };
  renderList = () => {
    const listData = this.props.items;

    if (listData) {
      return listData.map(item => {
        return (
          <CostListItem
            key={item.actionId}
            {...item}
            onRemove={this.onRemove}
            getItemInfo={() => {
              this.getItemInfo(item.actionId);
            }}
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

const mapStateToProps = ({ dataToShow }) => {
  return {
    items: dataToShow
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: itemList => {
      dispatch(deleteItem(itemList));
    },
    initializeItemsList: data => {
      dispatch(initializeItemsList(data));
    },
    changeShownItems: items => dispatch(changeItemsToShow(items)),
    setActionId: actionId => dispatch(setActionId(actionId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CostList);
