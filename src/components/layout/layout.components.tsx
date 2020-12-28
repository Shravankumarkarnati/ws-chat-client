import React, { useContext } from "react";
import AppContext from "../../Model/context";
import Header from "../header/header.component";
import Register from "./../Register/Register.component";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  const context = useContext(AppContext);
  return (
    <div
      className="container mx-auto h-full py-2 px-2
                    rounded-lg bg-gray-100 border-black border-2
                    shadow-2xl z-10"
    >
      <Header />
      {context.currentPage === "Register" ? <Register /> : <h1>HomePage</h1>}
    </div>
  );
};
export default Layout;
