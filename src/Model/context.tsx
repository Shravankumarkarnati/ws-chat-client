import { createContext } from "react";

export interface IAppContext {
  currentPage: "Home" | "Register";
  changeContext?: (newContext: IAppContext) => void;
}

const AppContext = createContext<IAppContext>({
  currentPage: "Home",
});

export default AppContext;
