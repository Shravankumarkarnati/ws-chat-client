import { createReducer } from "@reduxjs/toolkit";
import { logInAction, logOutAction, currentChatWithAction } from "./actions";

interface userState {
  loggedIn: Boolean;
  username: string | null;
  id: string | null;
  currentChatWith: string | null;
}

const initialState = {
  loggedIn: false,
  username: null,
  id: null,
  currentChatWith: null,
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
      state.currentChatWith = action.payload ? action.payload.id : null;
    });
});

export default userReducer;
