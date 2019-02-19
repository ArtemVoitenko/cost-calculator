import React from "react";

const ListItemView = ({
  actionDate,
  actionName,
  actionType,
  actionSum,
  actionId,
  onRemove,
  onEditClick
}) => {
  return (
    <li id={actionId} className="cost-list__item">
      <div className="cost-list__name">{actionName}</div>
      <div className="cost-list__sum">{actionSum}</div>
      <div className="cost-list__date">{actionDate}</div>
      <div className="cost-list__type">{actionType}</div>
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
      </div>
    </li>
  );
};

export default ListItemView;
