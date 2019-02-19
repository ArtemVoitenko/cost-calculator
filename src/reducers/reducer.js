const initialState = {
  test: false,
  error: false,
  data: JSON.parse(localStorage.getItem("items"))
};
console.log(initialState);
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
        data: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
