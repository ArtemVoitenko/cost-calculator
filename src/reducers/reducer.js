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
  itemEditId: "",
  actualWeather: "",
  loading: true,
  city: "",
  isCorrectCity: true
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
    case "SUBMIT_INPUT": {
      return {
        ...state,
        actualWeather: action.payload
      };
    }
    case "AUTO_WEATHER": {
      return {
        ...state,
        actualWeather: action.payload,
        loading: false
      };
    }
    case "GET_CITY": {
      console.log("reducer");
      return {
        ...state,
        city: action.payload
      };
    }
    case "INCORRECT_CITY_INPUT": {
      return {
        ...state,
        isCorrectCity: false
      };
    }
    case "CORRECT_CITY_INPUT": {
      return {
        ...state,
        isCorrectCity: true
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
