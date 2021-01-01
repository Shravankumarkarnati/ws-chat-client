import React from "react";

interface BtnMinimalProps {
  text: string;
  onclick: any;
}

const BtnMinimal: React.FC<BtnMinimalProps> = ({ text, onclick }) => {
  return (
    <div
      className="btnMinial
                    cursor-pointer hover:underline
                    text-md capitalize font-semibold
                    last:ml-4
                    text-kar-blue
                    hover:text-kar-black
  "
      onClick={onclick}
    >
      {text}
    </div>
  );
};
export default BtnMinimal;
