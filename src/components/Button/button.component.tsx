import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
  btnText: string;
  classNames?: string[];
}

const Button: React.FC<ButtonProps> = ({
  onclick,
  btnText,
  classNames,
  ...props
}) => {
  return (
    <div className="flex justify-center items-center">
      <button
        {...props}
        onClick={onclick}
        className={`text-md font-bold border-2 px-6 py-2 rounded-2xl shadow-md
                    uppercase tracking-wider border-black  bg-white
                    opacity-80 hover:opacity-100 active:outline-none focus:outline-none 
                    ${classNames?.join(" ")}`}
      >
        {btnText}
      </button>
    </div>
  );
};
export default Button;
