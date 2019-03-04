import ActionTypes from "../actions/actionTypes";

const clickedReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_CLICKED:
      return state + 1;

    case ActionTypes.DECREMENT_CLICKED:
      return state - 1;

    default:
      return state;
  }
};

export default clickedReducer;
