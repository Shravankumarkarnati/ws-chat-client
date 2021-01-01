import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import Header from "../components/Header/header.component";
import Dashboard from "./Dashboard.layout";

interface AppContainerProps {}

const AppContainer: React.FC<AppContainerProps> = () => {
  const { currentPage } = useSelector((state: RootState) => state.currentPage);
  return (
    <div
      className="AppContainer w-full h-full bg-black
                  md:rounded-sm shadow-2xl
                  flex flex-col
                  overflow-hidden
    "
    >
      <Header />
      {currentPage === "HOME" && <Dashboard />}
    </div>
  );
};
export default AppContainer;
