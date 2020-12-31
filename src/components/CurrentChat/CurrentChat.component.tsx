import React from "react";
import useInput from "../../Hooks/useInput.hook";
import Button from "../Button/button.component";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { BsArrowLeft } from "react-icons/bs";

interface CurrentChatProps {}

const CurrentChat: React.FC<CurrentChatProps> = () => {
  const { value, changeValue, resetField } = useInput("");
  const { username } = useSelector(
    (state: RootState) => state.user.currentChatWith
  );

  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    resetField();
    console.log(value);
  };

  return (
    <div
      className="h-full w-full
                    flex flex-col-reverse
    "
    >
      <div className="input h-12 bg-gray-300">
        <form
          className="h-full flex justify-between items-center"
          onSubmit={sendMessage}
        >
          <input
            placeholder="Type your message..."
            type="text"
            value={value}
            onChange={changeValue}
            className="p-4 h-full flex-1 text-lg bg-gray-300"
          />
          <Button
            btnText="Send"
            classNames={["h-full", "px-4", "rounded-full"]}
          />
        </form>
      </div>
      <div className="messages bg-red-500 flex-1"></div>
      <div
        className="header border-2 border-gray-500 h-12
                      flex items-center justify-between
                      px-4 py-1
      "
      >
        <div className="w-8 h-full">
          <BsArrowLeft className="h-full w-full cursor-pointer" title="Back" />
        </div>
        <p className="text-lg text-black font-semibold">{username}</p>
      </div>

      {/* <div className="flex-1 flex flex-col bg-red-300"></div> */}
    </div>
  );
};
export default CurrentChat;
