import React from "react";
import { UserBtn } from "./UserBtn.component";

interface UserFooterProps {}

const UserFooter: React.FC<UserFooterProps> = () => {
  return (
    <footer className="flex flex-col w-full h-auto order-last">
      <div className="flex flex-col-reverse items-center">
        <UserBtn text="Invite" dark={true} />
      </div>
      <div className="flex">
        <UserBtn text="Help" dark={false} />
        <UserBtn text="Logout" dark={false} />
      </div>
      <div className="companyInfo w-full text-center my-2">
        <p className="w-full text-xs text-gray-600">&copy; Company Inc. </p>
      </div>
    </footer>
  );
};
export default UserFooter;
