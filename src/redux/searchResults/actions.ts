import { createAction } from "@reduxjs/toolkit";
import { ISearchResult } from "./reducer";

export const setSearchLoading = createAction<Boolean>("user/setSearchLoading");
export const setSearchError = createAction<string | null>(
  "user/setSearchError"
);
export const setSearchResults = createAction<[ISearchResult] | null>(
  "user/setSearchResults"
);
