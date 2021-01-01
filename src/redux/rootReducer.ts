import { combineReducers } from "@reduxjs/toolkit";
import currentPageReducer from "./currentPageReducer/reducer";
import searchResultsReducer from "./searchResults/reducer";
import userReducer from "./userReducer/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  currentPage: currentPageReducer,
  searchResults: searchResultsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
