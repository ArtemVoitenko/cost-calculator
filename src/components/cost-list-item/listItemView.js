import React from "react";

const ListItemView = ({
  actionDate,
  actionName,
  actionType,
  actionSum,
  actionId,
  onRemove,
  onEditClick,
  actionPurpose,
  getItemInfo
}) => {
  return (
    <li id={actionId} className="cost-list__item">
      <div className={`purpose-image purpose-image--${actionPurpose}`} />
      <div className="cost-list__name">{actionName}</div>
      <div className={`cost-list__sum cost-list__sum--${actionType}`}>
        {actionSum}
      </div>
      <div className="cost-list__date">{actionDate}</div>
      <div className="cost-list__buttons">
        <button className="cost-list__edit" onClick={onEditClick}>
          edit
        </button>
        <button
          className="cost-list__remove"
          onClick={() => {
            onRemove(actionId);
          }}
        >
          remove
        </button>
        <button className="cost-list__more-info" onClick={getItemInfo}>
          info
        </button>
      </div>
    </li>
  );
};

export default ListItemView;
