import React from "react";
import UserProfile from "../components/UserProfile/UserProfile.component";
import AllChat from "./../components/Chats/AllChat.component";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div
      className="Dashboard w-full h-full flex items-stretch divide-x
                    divide-kar-blue-light"
    >
      <UserProfile />
      <AllChat />
      <div className="UserFeed bg-alice-blue w-1/4"></div>
    </div>
  );
};
export default Dashboard;
