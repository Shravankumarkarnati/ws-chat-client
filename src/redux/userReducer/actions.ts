import { createAction } from "@reduxjs/toolkit";
import { ISearchResult } from "./reducer";

interface ILoginActionPayload {
  username: string;
  id: string;
}

interface ICurrentChatPayload {
  id: string | null;
  username: string | null;
}

interface ISearchResults {
  results: ISearchResult[] | null;
}

export const logInAction = createAction<ILoginActionPayload>("user/logIn");
export const logOutAction = createAction("user/logOut");
export const currentChatWithAction = createAction<ICurrentChatPayload>(
  "user/currentChatWith"
);
export const setSearchResults = createAction<ISearchResults>(
  "user/setCurrentResults"
);
