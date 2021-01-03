import React, { useState } from "react";
import HamburgerStyled from "./Hamburger.styled";
import { UserBtn } from "./UserBtn.component";
import UserDetails from "./UserDetails.component";
import UserFooter from "./UserFooter.component";
import UserMenu from "./UserMenu.component";
import UserWorkspaces from "./UserWorkspaces.component";

interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = () => {
  const [close, setClose] = useState<Boolean>(false);

  return (
    <div
      className="UserProfile w-1/5 h-full
                bg-color-white
                flex flex-col items-center justify-start
                pt-10 px-6 relative"
    >
      <HamburgerStyled close={close} setClose={setClose} />
      <UserMenu visible={close} />
      <UserDetails />
      <div className="buttons w-full flex flex-col items-center justify-start">
        <UserBtn text="New Chat" cta={true} />
        <UserBtn text="Create Group" cta={true} />
      </div>
      <div
        className="info flex flex-col w-full
                        items-center justify-start mt-4
      "
      ></div>
      <UserWorkspaces />
      <UserFooter />
    </div>
  );
};
export default UserProfile;
