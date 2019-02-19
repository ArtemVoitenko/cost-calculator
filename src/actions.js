export const onError = () => {
  return {
    type: "ON_ERROR"
  };
};
export const addItem = item => {
  return {
    type: "ON_ITEM_ADD",
    payload: item
  };
};
export const deleteItem = itemList => {
  return {
    type: "REMOVE_ITEM",
    payload: itemList
  };
};
