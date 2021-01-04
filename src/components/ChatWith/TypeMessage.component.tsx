import React from "react";
import useInput from "../../Hooks/useInput";

interface TypeMessageProps {}

const TypeMessage: React.FC<TypeMessageProps> = () => {
  const { value, changeValue, resetField } = useInput("");
  const onMessageSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    resetField();
  };
  return (
    <form
      className="MessageBox flex items-center 
                          justify-between bg-color-white 
                          border-t-2 border-color-gray
                          "
    >
      <input
        type="text"
        placeholder="Type..."
        value={value}
        onChange={changeValue}
        className="text-lg text-color-black p-3 flex-1 focus:outline-none"
      />
      <button
        className="bg-color-primary text-md text-color-white
                          px-4 py-1 h-full hover:bg-color-secondary
                          transition
                          font-semibold tracking-wide
            "
        onClick={onMessageSubmit}
      >
        Send
      </button>
    </form>
  );
};
export default TypeMessage;
