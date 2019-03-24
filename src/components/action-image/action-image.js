import React from "react";

const ActionImage = ({ url, onImageRemove, imageId }) => {
  return (
    <div className="action-image__wrapper">
      <img src={url} alt="" />
      <button
        type="button"
        className="onImageRemove"
        onClick={() => {
          onImageRemove(imageId);
        }}
      />
    </div>
  );
};
export default ActionImage;
