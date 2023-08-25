import { combineReducers } from "redux";
import serviceDateSlice from "./serviceDateSlice";

const rootReducer = combineReducers({
  service: serviceDateSlice,
  // Add more reducers here if needed
});

export default rootReducer;
