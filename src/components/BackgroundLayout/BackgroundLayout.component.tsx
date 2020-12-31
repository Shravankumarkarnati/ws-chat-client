import React from "react";

interface BackgroundLayoutProps {}

const BackgroundLayout: React.FC<BackgroundLayoutProps> = () => {
  return (
    <div
      className="backgroundLayout hidden h-full flex-col bg-gray-400 
                    md:flex z-0 absolute top-0 left-0 w-full"
    >
      <div className="lg:h-24 2xl:h-64 bg-mustard w-full"></div>
      <div className="flex-1 bg-gray-200 w-full"></div>
    </div>
  );
};
export default BackgroundLayout;
