import React, { useContext } from "react";
import useInput from "../../Hooks/useInput.hook";
import AppContext from "../../Model/context";

interface CurrentChatProps {}

const CurrentChat: React.FC<CurrentChatProps> = () => {
  const { value, changeValue, resetField } = useInput("");
  const { currentChatWith } = useContext(AppContext);

  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("message Sent: " + value + "currentChat: ", currentChatWith);
    resetField();
  };

  return (
    <div
      className="h-full w-full p-2 rounded-xl overflow-hidden
                     flex flex-col-reverse justify-between items-stretch"
    >
      <form
        className="h-16 flex justify-between items-center bg-blue-200 p-1"
        onSubmit={sendMessage}
      >
        <input
          placeholder="Type..."
          type="text"
          value={value}
          onChange={changeValue}
          className="p-4 h-full flex-1 mr-3 rounded-xl text-lg"
        />
        <button
          className="mx-3 border-2 p-3 rounded-xl
                    bg-blue-500 text-white shadow-lg
                    hover:opacity-80
        "
        >
          SEND
        </button>
      </form>
      <div className="flex-1 flex flex-col bg-red-300"></div>
    </div>
  );
};
export default CurrentChat;
