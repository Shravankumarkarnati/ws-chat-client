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
          "opacity-90 hover:opacity-100 border-2 " +
          (dark
            ? " text-alice-blue bg-kar-blue hover:bg-alice-blue hover:text-kar-blue"
            : " bg-alice-blue text-kar-blue  hover:text-alice-blue hover:bg-kar-blue")
        }
      >
        {text}
      </button>
    </div>
  );
};
