import React from "react";

interface UserFooterProps {}

const UserFooter: React.FC<UserFooterProps> = () => {
  return (
    <footer className="flex flex-col w-full h-auto order-last">
      <div className="companyInfo w-full text-center my-2">
        <p className="w-full text-xs text-gray-600 hover:underline cursor-pointer">
          &copy; Company Inc.{" "}
        </p>
      </div>
    </footer>
  );
};
export default UserFooter;
