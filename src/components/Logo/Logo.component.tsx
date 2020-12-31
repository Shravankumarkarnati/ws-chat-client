import React from "react";
import { ReactComponent as LogoSvg } from "../../images/logo.svg";
import { usePageChangeHandler } from "./../../Hooks/usePageChangeHandler";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  const { homeChangePageHandler } = usePageChangeHandler();

  return (
    <div
      className="flex items-center justify-center 
                 w-10 h-10
                 md:w-12 md:h-12 
                 lg:w-16 lg:h-16 
                 2xl:w-24 2xl:h-24"
      onClick={homeChangePageHandler}
    >
      <LogoSvg className="w-full h-full" />
    </div>
  );
};
export default Logo;
