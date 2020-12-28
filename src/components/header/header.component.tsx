import React, { useContext } from "react";
import AppContext from "../../Model/context";
import Button from "../Button/button.component";
import Logo from "../Logo/Logo.component";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { changeContext, ...context } = useContext(AppContext);
  const registerBtnHandler = () => {
    changeContext!({
      ...context,
      currentPage: context.currentPage === "Home" ? "Register" : "Home",
    });
  };
  return (
    <div
      className="container h-16 
    bg-indigo-500 rounded-md flex items-center justify-between
      p-2"
    >
      <Logo />
      <Button
        onclick={registerBtnHandler}
        btnText={context.currentPage === "Home" ? "Register" : "Home"}
      />
      {/* logo 
        register/login/loggedin
        */}
    </div>
  );
};
export default Header;
