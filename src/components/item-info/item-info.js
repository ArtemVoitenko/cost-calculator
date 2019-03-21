import React, { Component } from "react";
import { connect } from "react-redux";

class ItemInfo extends Component {
  itemInfoObject() {
    return this.props.itemsList.find(item => {
      return item.actionId === this.props.actionId;
    });
  }

  render() {
    const {
      actionType,
      actionName,
      actionPurpose,
      actionSum,
      actionDate
    } = this.itemInfoObject();
    return (
      <div>
        <p>{actionName}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ actionId, data }) => {
  return { itemsList: data, actionId };
};
export default connect(mapStateToProps)(ItemInfo);
