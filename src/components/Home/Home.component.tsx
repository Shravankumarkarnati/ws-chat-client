import React from "react";
import ChatLogs from "../ChatLog/chatLog.component";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="container flex-1 h-fill flex justify-start items-stretch">
      <ChatLogs />
      <div className="flex flex-col flex-1">Current Chat</div>
    </div>
  );
};
export default Home;
