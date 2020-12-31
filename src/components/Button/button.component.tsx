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
      className={`font-semibold text-md xl:text-xl 2xl:text-3xl 
                  tracking-wider uppercase text-jade
                  py-3 px-4 xl:py-6 xl:px-8 last:ml-1 2xl:last:ml-4
                  opacity-80 hover:opacity-100 hover:underline 
                  ${classNames?.join(" ")}`}
    >
      {btnText}
    </button>
  );
};
export default Button;

// text-white bg-jade
