import React, { useContext } from "react";
import AppContext from "../../Model/context";
import Button from "../Button/button.component";
import Logo from "../Logo/Logo.component";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { changeContext, ...context } = useContext(AppContext);
  const changePageHandler = (changePage: typeof context.currentPage) => {
    changeContext!({
      ...context,
      currentPage: changePage,
    });
  };

  const LogoutHandler = () => {
    changeContext!({
      ...context,
      loggedIn: {
        flag: false,
        username: null,
        id: null,
      },
      currentPage: "Home",
      currentChatWith: null,
    });
  };

  return (
    <div
      className="container h-16 
    bg-indigo-500 rounded-md flex items-center justify-between
      p-2"
    >
      <Logo />
      <div className="flex items-center justify-end">
        {context.loggedIn.flag ? (
          <Button
            onclick={LogoutHandler}
            btnText={`${context.loggedIn.username} (Logout) `}
          />
        ) : context.currentPage === "Home" ? (
          <>
            <Button
              onclick={() => changePageHandler("Login")}
              btnText={"Login"}
              classNames={["mr-3"]}
            />
            <Button
              onclick={() => changePageHandler("Register")}
              btnText={"Register"}
            />
          </>
        ) : (
          <>
            <Button
              onclick={() => changePageHandler("Home")}
              btnText={"Home"}
            />
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
