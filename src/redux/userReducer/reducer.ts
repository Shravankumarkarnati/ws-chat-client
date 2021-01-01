import { createReducer } from "@reduxjs/toolkit";
import { currentChatWithAction, logInAction, logOutAction } from "./actions";

interface userState {
  loggedIn: Boolean;
  username: string | null;
  id: string | null;
  currentChatWith: {
    flag: Boolean;
    id: string | null;
    username: string | null;
  };
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
    });
});

export default userReducer;
