import React from "react";

interface WrapperBgProps {}

const WrapperBg: React.FC<WrapperBgProps> = () => {
  return (
    <div
      className="WrapperBg hidden w-full h-full 
                  lg:flex flex-col
                  absolute z-0 top-0 left-0 "
    >
      <div
        className="h-28 w-full bg-gradient-to-r 
                  from-color-primary to-color-secondary "
      ></div>
      <div className="flex-1 bg-color-white w-full"></div>
    </div>
  );
};
export default WrapperBg;
