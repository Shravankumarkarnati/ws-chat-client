import { createReducer } from "@reduxjs/toolkit";
import { changeCurrentPageAction } from "./actions";

export type typeOfCurrentPage = "HOME" | "REGISTER" | "LOGIN";

interface ICurrentPageState {
  currentPage: typeOfCurrentPage;
}

const initialState = {
  currentPage: "HOME",
} as ICurrentPageState;

const currentPageReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCurrentPageAction, (state, action) => {
    const { changeTo } = action.payload;
    state.currentPage = changeTo;
  });
});

export default currentPageReducer;
