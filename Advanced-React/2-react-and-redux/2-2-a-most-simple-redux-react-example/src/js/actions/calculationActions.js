import ActionTypes from "./actionTypes";

export const AddTwoNumbers = (num1, num2) => ({
  type: ActionTypes.ADD_TWO_NUMS,
  payload: {
    num1,
    num2
  }
});

export const SubtractTwoNumbers = (num1, num2) => ({
  type: ActionTypes.SUBTRACT_TWO_NUMBERS,
  payload: {
    num1,
    num2
  }
});