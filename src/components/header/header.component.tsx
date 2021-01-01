import React from "react";
import { BsSun } from "react-icons/bs";
import { GiMoon } from "react-icons/gi";
import Logo from "../common/Logo.component";
import SearchBar from "./searchBar.component";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
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
        <BsSun
          className="fill-current text-kar-blue w-6 h-6"
          title="Light Mode"
        />
        <GiMoon
          className="fill-current text-kar-blue w-6 h-6 ml-4"
          title="Dark Mode"
        />
      </div>
    </div>
  );
};
export default Header;
