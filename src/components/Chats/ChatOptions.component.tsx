import React from "react";
import { BiFlag, BiPin } from "react-icons/bi";
import { BsArchive } from "react-icons/bs";

interface ChatOptionsProps {}

const ChatOptions: React.FC<ChatOptionsProps> = ({}) => {
  return (
    <div
      className="chatOptions h-full flex 
                          flex-1 justify-end items-center
                          "
    >
      <BiFlag
        title="Flag Chat"
        className="h-5 w-5 mx-1 fill-current text-color-extra hover:text-color-primary"
      />
      <BiPin
        title="Pin Chat"
        className="h-5 w-5 mx-1 fill-current text-color-extra hover:text-color-primary"
      />
      <BsArchive
        title="Archive Chat"
        className="h-5 w-5 mx-1 fill-current text-color-extra hover:text-color-primary"
      />
    </div>
  );
};
export default ChatOptions;
