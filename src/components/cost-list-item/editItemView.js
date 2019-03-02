import React from "react";
import InputGroup from "../input-group";
const EditItemView = ({ applyChange, ...props }) => {
  return <InputGroup state={props} view="edit" applyChange={applyChange} />;
};
export default EditItemView;
