import React from "react";
import { HiSearch } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import useInput from "../../Hooks/useInput.hook";

interface ChatLogsProps {}

const ChatLogs: React.FC<ChatLogsProps> = () => {
  const { value, changeValue, resetField } = useInput("");

  const searchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submitted", value);
  };

  const clearSearchBox = () => {
    resetField();
  };

  return (
    <div className=" flex flex-col w-2/5 px-3 border-r-2 border-black">
      <form
        onSubmit={searchSubmit}
        className="full-width flex items-center bg-white 
                    ml-2 mt-2 rounded-xl focus-within:ring-2 focus-within:ring-indigo-600 "
      >
        <HiSearch className="w-6 h-6 fill-current mx-3" />
        <input
          type="text"
          placeholder="Search or Start a New Chat"
          value={value}
          onChange={changeValue}
          className="full-width p-3 text-md 
                    focus:outline-none focus:border-transparent
          "
        />
        {value.length ? (
          <div
            className="w-3 h-6 mx-3 flex items-center justify-center"
            onClick={clearSearchBox}
          >
            <ImCross className="w-3 h-3 fill-current" />
          </div>
        ) : null}
      </form>
    </div>
  );
};
export default ChatLogs;
