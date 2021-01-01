import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { logOutAction } from "../../redux/userReducer/actions";
import Button from "../common/button.component";
import Logo from "../common/Logo.component";
import { usePageChangeHandler } from "../../Hooks/usePageChangeHandler";
import { currentChatWithAction } from "../../redux/userReducer/actions";
import SearchBar from "./searchBar.component";
import BtnMinimal from "../common/minimalBtn.component";

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
    dispatch(currentChatWithAction({ id: null, username: null }));
  };

  return (
    <div
      className="w-full h-14 lg:h-14 3xl:h-14 
                  bg-alice-blue
                  flex items-center justify-between
                  px-4 py-2
                  border-b-2 border-nati-blue
    "
    >
      <Logo />
      <SearchBar />
      <div className="flex items-center justify-end">
        {loggedIn ? (
          <Button onclick={LogoutHandler} btnText={`${username} (Logout) `} />
        ) : (
          <>
            {currentPage !== "HOME" && (
              <BtnMinimal onclick={homeChangePageHandler} text={"home"} />
            )}
            {currentPage !== "LOGIN" && (
              <BtnMinimal onclick={loginChangePageHandler} text="Login" />
            )}
            {currentPage !== "REGISTER" && (
              <BtnMinimal onclick={regChangePageHandler} text={"Register"} />
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
