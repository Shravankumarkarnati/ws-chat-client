import { createContext } from "react";

export interface IAppContext {
  currentPage: "Home" | "Register" | "Login";
  loggedIn: {
    flag: Boolean;
    username: string | null;
    id: string | null;
  };
  search: {
    status: Boolean;
    results: string[] | null;
    loadingStatus: Boolean;
    error: null | string;
  };
  currentChatWith: null | string;
  changeContext?: (newContext: IAppContext) => void;
}

const AppContext = createContext<IAppContext>({
  currentPage: "Home",
  loggedIn: {
    flag: false,
    username: null,
    id: null,
  },
  search: {
    status: false,
    results: null,
    loadingStatus: false,
    error: null,
  },
  currentChatWith: null,
});

export default AppContext;
