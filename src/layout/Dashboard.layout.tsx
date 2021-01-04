import React from "react";
import UserProfile from "../components/UserProfile/UserProfile.component";
import AllChat from "./../components/Chats/AllChat.component";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import ChatWith from "../components/ChatWith/ChatWith.component";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const { isChatting } = useSelector(
    (state: RootState) => state.user.currentChatWith
  );
  return (
    <div
      className="Dashboard w-full h-full flex items-stretch divide-x
                    divide-color-gray"
    >
      <UserProfile />
      {isChatting ? <ChatWith /> : <AllChat />}
      <div className="UserFeed bg-color-white w-1/4"></div>
    </div>
  );
};
export default Dashboard;
