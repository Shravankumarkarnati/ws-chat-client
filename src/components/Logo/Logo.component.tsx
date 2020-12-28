import React from "react";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="flex items-center justify-center">
      <span className="text-2xl font-bold text-white">WS-CHAT</span>
    </div>
  );
};
export default Logo;
