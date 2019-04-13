const initialState = {
  test: false,
  error: false,
  data: [],
  dataToShow: [],
  periodItems: [],
  purposeValue: "",
  operationType: "all",
  actionId: "",
  itemCreatorVisibility: false,
  itemEditId: ""
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST_CASE": {
      return {
        ...state,
        test: true
      };
    }
    case "ON_ERROR":
      return {
        ...state,
        error: true
      };
    case "ON_ITEM_ADD": {
      return {
        ...state,
        data: action.payload
      };
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        data: action.payload,
        dataToShow: action.payload
      };
    }
    case "INITIALIZE_ITEMS_LIST": {
      return {
        ...state,
        data: action.payload,
        dataToShow: action.payload
      };
    }
    case "CHANGE_ITEMS_TO_SHOW": {
      return {
        ...state,
        dataToShow: action.payload
      };
    }
    case "CHANGE_PERIOD_ITEMS": {
      return {
        ...state,
        periodItems: action.payload
      };
    }
    case "CHANGE_PURPOSE_VALUE": {
      return {
        ...state,
        purposeValue: action.payload
      };
    }
    case "CHANGE_OPERATION_TYPE_FILTER": {
      return {
        ...state,
        operationType: action.payload
      };
    }
    case "SET_ACTION_ID": {
      return {
        ...state,
        actionId: action.payload
      };
    }
    case "CHANGE_ITEM_CREATOR_VISIBILITY": {
      return {
        ...state,
        itemCreatorVisibility: !state.itemCreatorVisibility
      };
    }
    case "CHANGE_ITEM_VIEW": {
      return {
        ...state,
        itemEditId: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
