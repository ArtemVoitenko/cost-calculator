const initialState = {
  test: false,
  error: false,
  data: [],
  dataToShow: [],
  periodItems: [],
  purposeValue: ""
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
      console.log("data change");
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
    default: {
      return state;
    }
  }
};
export default reducer;
