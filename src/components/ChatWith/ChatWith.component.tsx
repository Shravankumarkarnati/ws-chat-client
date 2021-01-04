import React from "react";
import ChatWithHeader from "./ChatWithHeader.component";

interface ChatWithProps {}

const ChatWith: React.FC<ChatWithProps> = () => {
  return (
    <div
      className="chatWithComponent flex-1 
                    flex flex-col h-full bg-color-extra"
    >
      <ChatWithHeader />
    </div>
  );
};
export default ChatWith;
