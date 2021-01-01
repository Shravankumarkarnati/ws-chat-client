import { createReducer } from "@reduxjs/toolkit";
import { setSearchError, setSearchLoading, setSearchResults } from "./actions";

export interface ISearchResult {
  id: string;
  username: string;
}

interface ISearchResults {
  loading: Boolean;
  error: string | null;
  results: ISearchResult[] | null;
}

const initialState = {
  loading: false,
  error: null,
  results: null,
} as ISearchResults;

const searchResultsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSearchLoading, (state, action) => {
      state.loading = action.payload;
    })
    .addCase(setSearchError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setSearchResults, (state, action) => {
      state.results = action.payload;
    });
});

export default searchResultsReducer;
