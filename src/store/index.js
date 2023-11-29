import { createStore, combineReducers } from "redux";
import { cashReducer } from "./cashReducer";
import { customersReducer } from "./customersReducer";

const rootReducer = combineReducers({
  cashReducer,
  customersReducer,
});

export const store = createStore(rootReducer);
