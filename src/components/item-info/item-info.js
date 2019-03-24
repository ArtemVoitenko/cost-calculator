import React, { Component } from "react";
import { connect } from "react-redux";
import "./item-info.scss";

class ItemInfo extends Component {
  itemInfoObject() {
    return this.props.itemsList.find(item => {
      return item.actionId === this.props.actionId;
    });
  }
  renderImagesPreview = images => {
    return images.map(image => {
      return <img src={image} data-id="1" />;
    });
  };
  render() {
    const {
      actionType,
      actionName,
      actionPurpose,
      actionSum,
      actionDate,
      actionDescription,
      actionImages
    } = this.itemInfoObject();
    const imageList = () => {
      return actionImages ? (
        <div>{this.renderImagesPreview(actionImages)}</div>
      ) : null;
    };
    return (
      <div>
        <p>{actionName}</p>
        <div className="item-info__description">{actionDescription}</div>
        {imageList()}
      </div>
    );
  }
}

const mapStateToProps = ({ actionId, data }) => {
  return { itemsList: data, actionId };
};
export default connect(mapStateToProps)(ItemInfo);
