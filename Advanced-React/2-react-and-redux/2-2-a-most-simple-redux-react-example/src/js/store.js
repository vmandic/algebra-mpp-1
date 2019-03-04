import rootReducer from "./reducer";
import { createStore } from "redux";

const initialState = {
  calculation: {
    sum: 0,
    sub: 0
  },
  clicked: 0
};

export default createStore(rootReducer, initialState);