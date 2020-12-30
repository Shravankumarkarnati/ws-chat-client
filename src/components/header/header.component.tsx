import React, { useContext } from "react";
import AppContext from "../../Model/context";
import Button from "../Button/button.component";
import Logo from "../Logo/Logo.component";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { logOutAction } from "../../redux/userReducer/actions";
import { currentChatWithAction } from "./../../redux/userReducer/actions";
import { changeCurrentPageAction } from "../../redux/currentPageReducer/actions";
import { typeOfCurrentPage } from "../../redux/currentPageReducer/reducer";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const dispatch = useDispatch();
  const { loggedIn, username } = useSelector((state: RootState) => state.user);
  const { currentPage } = useSelector((state: RootState) => state.currentPage);

  const changePageHandler = (changePage: typeOfCurrentPage) => {
    dispatch(changeCurrentPageAction({ changeTo: changePage }));
  };

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
              <Button
                onclick={() => changePageHandler("LOGIN")}
                btnText={"Login"}
                classNames={["mr-3"]}
              />
            )}
            {currentPage !== "REGISTER" && (
              <Button
                onclick={() => changePageHandler("REGISTER")}
                btnText={"Register"}
              />
            )}
            {currentPage !== "HOME" && (
              <Button
                onclick={() => changePageHandler("HOME")}
                btnText={"HOME"}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
