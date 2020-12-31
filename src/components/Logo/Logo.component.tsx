import React from "react";
import { ReactComponent as LogoSvg } from "../../images/logo.svg";
import { usePageChangeHandler } from "./../../Hooks/usePageChangeHandler";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  const { homeChangePageHandler } = usePageChangeHandler();

  return (
    <div
      className="flex items-center justify-center 
                h-full w-14 ml-8
                 "
      onClick={homeChangePageHandler}
    >
      <LogoSvg className="w-full h-full" />
    </div>
  );
};
export default Logo;
