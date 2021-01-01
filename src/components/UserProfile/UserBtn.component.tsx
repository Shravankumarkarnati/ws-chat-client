import React from "react";

interface UserBtnProps {
  text: string;
  dark?: Boolean;
}

export const UserBtn: React.FC<UserBtnProps> = ({ text, dark }) => {
  return (
    <div className="w-2/3 mt-2 p-1">
      <button
        className={
          "w-full px-4 rounded-md text-sm py-1 " +
          "tracking-tighter border-kar-blue shadow-xl " +
          "opacity-90 hover:opacity-100 " +
          (dark
            ? " text-alice-blue bg-kar-blue"
            : " bg-alice-blue text-kar-blue border-2")
        }
      >
        {text}
      </button>
    </div>
  );
};
