import { combineReducers } from "redux";
import calculationReducer from "./reducers/calculationReducer";
import clickedReducer from "./reducers/clickedReducer";

// ! WARN: must reflect the state type structure
const rootReducer = combineReducers({
  calculation: calculationReducer,
  clicked: clickedReducer
});

export default rootReducer;
