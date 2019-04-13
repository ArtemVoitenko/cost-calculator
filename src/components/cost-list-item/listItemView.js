import React from "react";
import Icon from "../icon/icon";

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
    <li
      id={actionId}
      className={`cost-list__item cost-list__item--${actionType}`}
    >
      <div className={`purpose-image purpose-image--${actionPurpose}`} />
      <div className="cost-list__name">{actionName}</div>

      <div className="cost-list__date">{actionDate}</div>
      <div className={`cost-list__sum cost-list__sum--${actionType}`}>
        {actionSum}&#x20b4;
      </div>
      <div className="cost-list__buttons">
        <button
          className=" cost-list__btn cost-list__edit"
          onClick={() => {
            onEditClick(actionId);
          }}
        >
          <Icon icon="edit" iconClass="cost-list__icon" />
        </button>
        <button
          className=" cost-list__btn cost-list__remove"
          onClick={() => {
            onRemove(actionId);
          }}
        >
          <Icon icon="delete" iconClass="cost-list__icon" />
        </button>
        <button
          className=" cost-list__btn cost-list__more-info"
          onClick={getItemInfo}
        >
          <Icon icon="information" iconClass="cost-list__icon" />
        </button>
      </div>
    </li>
  );
};

export default ListItemView;
