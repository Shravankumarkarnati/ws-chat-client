import React from "react";
import AllChatHeader from "./AllChatHeader.component";
import Chats from "./Chats.component";

interface AllChatProps {}

const AllChat: React.FC<AllChatProps> = () => {
  return (
    <div className="allChatComponent flex-1 flex flex-col h-full ">
      <AllChatHeader />
      <Chats />
    </div>
  );
};
export default AllChat;
