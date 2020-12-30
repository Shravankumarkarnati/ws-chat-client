import { combineReducers } from "@reduxjs/toolkit";
import currentPageReducer from "./currentPageReducer/reducer";
import userReducer from "./userReducer/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  currentPage: currentPageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
