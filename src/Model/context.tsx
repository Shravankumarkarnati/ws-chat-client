import { createContext } from "react";

export interface IAppContext {
  currentPage: "Home" | "Register" | "Login";
  username: null | string;
  changeContext?: (newContext: IAppContext) => void;
}

const AppContext = createContext<IAppContext>({
  currentPage: "Home",
  username: null,
});

export default AppContext;
