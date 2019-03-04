import ActionTypes from "../actions/actionTypes";

const calculationReducer = (state = { sum: 0, sub: 0 }, action) => {
  const { num1, num2 } = action.payload || {};

  switch (action.type) {
    case ActionTypes.ADD_TWO_NUMS:
      return {
        ...state,
        sum: num1 + num2
      };

    case ActionTypes.SUBTRACT_TWO_NUMBERS:
      return {
        ...state,
        sub: num1 - num2
      };

    default:
      return state;
  }
};

export default calculationReducer;
