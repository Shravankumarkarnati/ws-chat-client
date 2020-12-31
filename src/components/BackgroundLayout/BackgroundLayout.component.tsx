import React from "react";

interface BackgroundLayoutProps {}

const BackgroundLayout: React.FC<BackgroundLayoutProps> = () => {
  return (
    <div
      className="backgroundLayout hidden w-full h-full 
                  lg:flex flex-col
                  absolute z-0 top-0 left-0 "
    >
      <div className="h-28 bg-golden-tainoi w-full"></div>
      <div className="flex-1 bg-gray-200 w-full"></div>
    </div>
  );
};
export default BackgroundLayout;
