import React from "react";

interface UserBtnProps {
  text: string;
  cta?: Boolean;
}

export const UserBtn: React.FC<UserBtnProps> = ({ text, cta }) => {
  const btnCTA =
    "text-color-white bg-color-primary hover:bg-color-white hover:text-color-primary";
  const btnNoCTA =
    "bg-color-white text-color-primary hover:text-color-white hover:bg-color-primary";
  return (
    <div className="w-2/3 mt-2 p-1">
      <button
        className={
          "w-full px-4 rounded-md text-md py-1 border-2 " +
          "tracking-tight border-color-secondary shadow-xl transition-all " +
          (cta ? btnCTA : btnNoCTA)
        }
      >
        {text}
      </button>
    </div>
  );
};
