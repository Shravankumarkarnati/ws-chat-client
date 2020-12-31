import React from "react";
import ChatLogs from "../ChatLog/chatLog.component";
import CurrentChat from "../CurrentChat/CurrentChat.component";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="w-full h-full flex items-stretch">
      <ChatLogs />
      <div className="flex-1 bg-black"></div>
      {/* <CurrentChat /> */}
    </div>
  );
};
export default Home;
