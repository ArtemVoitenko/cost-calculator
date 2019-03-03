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
export const initializeItemsList = data => {
  return {
    type: "INITIALIZE_ITEMS_LIST",
    payload: data
  };
};
export const changeItemsToShow = data => {
  return {
    type: "CHANGE_ITEMS_TO_SHOW",
    payload: data
  };
};
