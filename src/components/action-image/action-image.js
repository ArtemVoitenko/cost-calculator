import React from "react";
import Icon from "../icon";

const ActionImage = ({ url, onImageRemove, imageId }) => {
  return (
    <div className="image-list__item">
      <img className="image-list__img" src={url} alt="" />
      <button
        type="button"
        className="image-list__remove"
        onClick={() => {
          onImageRemove(imageId);
        }}
      >
        <Icon icon="close" iconClass="image-list__icon" />
      </button>
    </div>
  );
};
export default ActionImage;
