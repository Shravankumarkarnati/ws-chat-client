import React from "react";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="Dashboard w-full h-full flex items-stretch">
      <div className="currentUser bg-red-300 w-1/5"></div>
      <div className="Activity bg-green-300 flex-1"></div>
      <div className="Feed bg-blue-300 w-1/4"></div>
    </div>
  );
};
export default Dashboard;
