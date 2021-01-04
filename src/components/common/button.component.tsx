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
    <button
      {...props}
      onClick={onclick}
      className={`font-semibold text-sm
                  border-jade border-2 
                  p-2 last:ml-2 tracking-wider uppercase
                  bg-color-white
                  rounded-lg
                  hover:bg-jade hover:text-white
                  hover:shadow-2xl
                  opacity-80 hover:opacity-100 hover:underline 
                  ${classNames?.join(" ")}`}
    >
      {btnText}
    </button>
  );
};
export default Button;
