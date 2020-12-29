import { createContext } from "react";

export interface IAppContext {
  currentPage: "Home" | "Register" | "Login";
  username: null | string;
  search: {
    status: Boolean;
    results: string[] | null;
    loadingStatus: Boolean;
    error: null | string;
  };
  currentChat: null | number;
  changeContext?: (newContext: IAppContext) => void;
}

const AppContext = createContext<IAppContext>({
  currentPage: "Home",
  username: null,
  search: {
    status: false,
    results: null,
    loadingStatus: false,
    error: null,
  },
  currentChat: null,
});

export default AppContext;
