import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { logOutAction } from "../../redux/userReducer/actions";
import Button from "../Button/button.component";
import Logo from "../Logo/Logo.component";
import { usePageChangeHandler } from "./../../Hooks/usePageChangeHandler";
import { currentChatWithAction } from "./../../redux/userReducer/actions";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const dispatch = useDispatch();
  const { loggedIn, username } = useSelector((state: RootState) => state.user);
  const { currentPage } = useSelector((state: RootState) => state.currentPage);

  const {
    regChangePageHandler,
    homeChangePageHandler,
    loginChangePageHandler,
  } = usePageChangeHandler();

  const LogoutHandler = () => {
    dispatch(logOutAction());
    dispatch(currentChatWithAction({ id: null }));
  };

  return (
    <div
      className="container h-16 
    bg-indigo-500 rounded-md flex items-center justify-between
      p-2"
    >
      <Logo />
      <div className="flex items-center justify-end">
        {loggedIn ? (
          <Button onclick={LogoutHandler} btnText={`${username} (Logout) `} />
        ) : (
          <>
            {currentPage !== "LOGIN" && (
              <Button onclick={loginChangePageHandler} btnText={"Login"} />
            )}
            {currentPage !== "REGISTER" && (
              <Button onclick={regChangePageHandler} btnText={"Register"} />
            )}
            {currentPage !== "HOME" && (
              <Button onclick={homeChangePageHandler} btnText={"HOME"} />
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
