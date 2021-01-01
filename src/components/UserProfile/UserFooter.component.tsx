import React from "react";
import { UserBtn } from "./UserBtn.component";
import { IoIosHelpCircle, IoMdSettings } from "react-icons/io";

interface UserFooterProps {}

const UserFooter: React.FC<UserFooterProps> = () => {
  return (
    <footer className="flex flex-col w-full h-auto order-last">
      <div className="flex flex-col-reverse items-center">
        <UserBtn text="Invite" dark={true} />
      </div>
      <div className="flex items-center justify-between">
        <IoIosHelpCircle
          className="h-6 w-6 fill-current text-kar-blue "
          title="Help"
        />
        <IoMdSettings
          className="h-6 w-6 fill-current text-kar-blue hover:animate-spin-once"
          title="Settings"
        />
        <UserBtn text="Logout" dark={false} />
      </div>
      <div className="companyInfo w-full text-center my-2">
        <p className="w-full text-xs text-gray-600 hover:underline cursor-pointer">
          &copy; Company Inc.{" "}
        </p>
      </div>
    </footer>
  );
};
export default UserFooter;
