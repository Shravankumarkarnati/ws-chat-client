import React, { useContext } from "react";
import AppContext from "../../Model/context";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  const { changeContext, ...context } = useContext(AppContext);

  const onLogoClick = () => {
    changeContext!({
      ...context,
      currentPage: "Home",
    });
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
