import React from "react";
import UserDetails from "./userDetails.component";
import { TiTick } from "react-icons/ti";
import { UserBtn } from "./UserBtn.component";
import UserFooter from "./UserFooter.component";

interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = () => {
  return (
    <div
      className="UserProfile w-1/5 h-full
                bg-alice-blue border-r-2 border-kar-blue
                flex flex-col items-center justify-start
                pt-10 px-6"
    >
      <UserDetails />
      <div className="buttons w-full flex flex-col items-center justify-start">
        <UserBtn text="Create Group" dark={true} />
      </div>
      <div
        className="info flex flex-col w-full
                        items-center justify-start mt-4
      "
      >
        {/* <div className="pro flex items-center justify-start">
          <TiTick /> <p className="text-sm text-gray-600">Pro Member</p>
        </div> */}
      </div>
      <div className="flex-1 w-full bg-alice-blue-light"></div>
      <UserFooter />
    </div>
  );
};
export default UserProfile;
