const initialState = {
  test: false,
  error: false,
  data: [],
  dataToShow: []
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
    default: {
      return state;
    }
  }
};
export default reducer;
