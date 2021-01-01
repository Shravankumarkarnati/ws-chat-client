import { createReducer } from "@reduxjs/toolkit";
import {
  currentChatWithAction,
  logInAction,
  logOutAction,
  setSearchResults,
} from "./actions";

export interface ISearchResult {
  id: string;
  username: string;
}

interface userState {
  loggedIn: Boolean;
  username: string | null;
  id: string | null;
  currentChatWith: {
    flag: Boolean;
    id: string | null;
    username: string | null;
  };
  searchResults: ISearchResult[] | null;
}

const initialState = {
  loggedIn: false,
  username: null,
  id: null,
  currentChatWith: {
    flag: false,
    id: null,
    username: null,
  },
  searchResults: null,
} as userState;

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(logInAction, (state, action) => {
      const { username, id } = action.payload;
      state.username = username;
      state.id = id;
      state.loggedIn = true;
    })
    .addCase(logOutAction, (state, action) => initialState)
    .addCase(currentChatWithAction, (state, action) => {
      const { id, username } = action.payload;
      state.currentChatWith.flag = true;
      state.currentChatWith.username = username;
      state.currentChatWith.id = id;
    })
    .addCase(setSearchResults, (state, action) => {
      state.searchResults = action.payload.results;
    });
});

export default userReducer;
