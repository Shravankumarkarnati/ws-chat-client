import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface LoadingSpinnerProps {}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = () => {
  return (
    <div
      className="loadingSpinner w-full h-full 
                    flex flex-col items-center justify-center
                    "
    >
      <div
        className="spinnerContainer
                    w-1/4 h-1/4
                    flex-1
      "
      >
        <AiOutlineLoading3Quarters
          className="spinner w-full h-full 
                    fill-current text-golden-tainoi
                    animate-spin
                    "
        />
      </div>
    </div>
  );
};
export default LoadingSpinner;
