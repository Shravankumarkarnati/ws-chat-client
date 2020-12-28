import React from "react";

interface ButtonProps {
  onclick: React.MouseEventHandler<HTMLButtonElement>;
  btnText: string;
}

const Button: React.FC<ButtonProps> = ({ onclick, btnText }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={onclick}
        className="text-md font-bold border-2 px-6 py-2 rounded-2xl shadow-md
                    uppercase tracking-wider border-black  bg-white
                    opacity-80 hover:opacity-100 active:outline-none focus:outline-none"
      >
        {btnText}
      </button>
    </div>
  );
};
export default Button;
