import React from "react";
import UserProfile from "../components/UserProfile/UserProfile.component";
import AllChat from "./../components/Chats/AllChat.component";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="Dashboard w-full h-full flex items-stretch">
      <UserProfile />
      <AllChat />
      <div className="UserFeed bg-blue-300 w-1/4"></div>
    </div>
  );
};
export default Dashboard;
