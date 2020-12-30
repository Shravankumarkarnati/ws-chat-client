import React from "react";
import { useDispatch } from "react-redux";
import { changeCurrentPageAction } from "../../redux/currentPageReducer/actions";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  const dispatch = useDispatch();

  const onLogoClick = () => {
    dispatch(changeCurrentPageAction({ changeTo: "HOME" }));
  };

  return (
    <div className="flex items-center justify-center">
      <span
        className="text-2xl font-bold text-white cursor-pointer"
        onClick={onLogoClick}
      >
        WS-CHAT
      </span>
    </div>
  );
};
export default Logo;
