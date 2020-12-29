import React from "react";
import ChatLogs from "../ChatLog/chatLog.component";
import CurrentChat from "../CurrentChat/CurrentChat.component";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="container flex-1 h-fill flex justify-start items-stretch">
      <ChatLogs />
      <CurrentChat />
    </div>
  );
};
export default Home;
