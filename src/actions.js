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
export const changePeriodItems = data => {
  return {
    type: "CHANGE_PERIOD_ITEMS",
    payload: data
  };
};
export const dispatchPurposeValue = value => {
  return {
    type: "CHANGE_PURPOSE_VALUE",
    payload: value
  };
};
export const operationTypeFilterChange = value => {
  return {
    type: "CHANGE_OPERATION_TYPE_FILTER",
    payload: value
  };
};
export const setActionId = actionId => {
  return {
    type: "SET_ACTION_ID",
    payload: actionId
  };
};
export const changeItemCreatorVisibility = () => {
  return {
    type: "CHANGE_ITEM_CREATOR_VISIBILITY"
  };
};
export const changeItemView = itemId => {
  return {
    type: "CHANGE_ITEM_VIEW",
    payload: itemId
  };
};
export const submit = weather => {
  return {
    type: "SUBMIT_INPUT",
    payload: weather
  };
};
export const autoWeather = weather => {
  return {
    type: "AUTO_WEATHER",
    payload: weather
  };
};
export const getCity = city => {
  return {
    type: "GET_CITY",
    payload: city
  };
};
export const setIncorrectCity = () => {
  return {
    type: "INCORRECT_CITY_INPUT"
  };
};
export const setCorrectCity = () => {
  return {
    type: "CORRECT_CITY_INPUT"
  };
};
