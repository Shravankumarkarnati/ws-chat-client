import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import Header from "../header/header.component";
import Home from "../Home/Home.component";
import Login from "../Login/Login.component";
import Register from "./../Register/Register.component";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  const { currentPage } = useSelector((state: RootState) => state.currentPage);
  return (
    <div
      className="bg-black w-full h-full 
                      md:rounded-lg shadow-2xl
                      flex flex-col
                      overflow-hidden
    "
    >
      <Header />
      {/* {currentPage === "HOME" && <Home />}
      {currentPage === "REGISTER" && <Register />}
      {currentPage === "LOGIN" && <Login />} */}
    </div>
  );
};
export default Layout;

// container mx-auto h-full py-2 px-2
//                     rounded-lg bg-gray-100 border-black border-2
//                     shadow-2xl z-10
//                     flex flex-col
