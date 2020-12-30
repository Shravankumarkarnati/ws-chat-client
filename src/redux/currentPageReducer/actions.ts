import { createAction } from "@reduxjs/toolkit";
import { typeOfCurrentPage } from "./reducer";

interface IChangeCurrentPagePayload {
  changeTo: typeOfCurrentPage;
}

export const changeCurrentPageAction = createAction<IChangeCurrentPagePayload>(
  "currentPage/changeCurrentPage"
);
