import React, { Component } from "react";
import { connect } from "react-redux";
import "./item-info.scss";
var moment = require("moment");

class ItemInfo extends Component {
  itemInfoObject() {
    return this.props.itemsList.find(item => {
      return item.actionId === this.props.actionId;
    });
  }
  renderImagesPreview = images => {
    return images.map(image => {
      return (
        <img className="item-images__img" src={image} data-id="1" alt="" />
      );
    });
  };
  render() {
    const {
      actionType,
      actionName,
      actionPurpose,
      actionSum,
      dateMilliseconds,
      actionDescription,
      actionImages
    } = this.itemInfoObject();
    const imageList = () => {
      return actionImages ? (
        <div class="item-images">{this.renderImagesPreview(actionImages)}</div>
      ) : null;
    };

    const getTime = () => {
      return moment(dateMilliseconds).format("h:mm");
    };
    const getFullDate = () => {
      return moment(dateMilliseconds).format("MMMM Do YYYY");
    };

    return (
      <div>
        <div className="item-header">
          <p className="item-header__name">{actionName}</p>
          <div className="item-header__dates">
            <p className="item-header__day">{getFullDate()}</p>
            <p className="item-header__time">{getTime()}</p>
          </div>
        </div>
        <p className="title">description</p>
        <div className="item-info__description">{actionDescription}</div>
        <div className="item-finance">
          <div className="item-finance__sum">
            Money {actionType}:{" "}
            <div
              className={`item-finance__val item-finance__val--${actionType}`}
            >
              {actionSum}₴
            </div>
          </div>

          <div className="item-finance__purpose">
            <div className={`purpose-image purpose-image--${actionPurpose}`} />
            {actionPurpose}
          </div>
        </div>

        {imageList()}
      </div>
    );
  }
}

const mapStateToProps = ({ actionId, data }) => {
  return { itemsList: data, actionId };
};
export default connect(mapStateToProps)(ItemInfo);
