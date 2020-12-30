import { createAction } from "@reduxjs/toolkit";

interface ILoginActionPayload {
  username: string;
  id: string;
}

interface ICurrentChatPayload {
  id: string | null;
}

export const logInAction = createAction<ILoginActionPayload>("user/logIn");
export const logOutAction = createAction("user/logOut");
export const currentChatWithAction = createAction<ICurrentChatPayload>(
  "user/currentChatWith"
);
