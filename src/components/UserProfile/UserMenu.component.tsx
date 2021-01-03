import React from "react";
import { UserBtn } from "./UserBtn.component";

interface UserMenuProps {
  visible: Boolean;
}

interface MenuOptionsProps {
  text: string;
  open: Boolean;
}

const MenuOptions: React.FC<MenuOptionsProps> = ({ text, open }) => {
  const classes = open ? " open" : "";
  return (
    <div
      className={
        "menu-options text-color-white font-semibold text-lg " +
        " tracking-widest uppercase cursor-pointer hover:underline  " +
        classes
      }
    >
      {text}
    </div>
  );
};

const UserMenu: React.FC<UserMenuProps> = ({ visible }) => {
  const classes = visible ? "visible z-20" : "hidden z-0";
  return (
    <div
      className={
        "UserMenu absolute top-0 left-0 w-full h-full  " +
        "flex flex-col py-8 px-6  " +
        "bg-gradient-to-t to-color-secondary from-color-primary  " +
        classes
      }
    >
      <div className="flex-1 menu-options-container ">
        <MenuOptions text={"Docs"} open={visible} />
        <MenuOptions text={"About"} open={visible} />
        <MenuOptions text={"Contact"} open={visible} />
        <MenuOptions text={"Settings"} open={visible} />
      </div>
      <div className="flex items-center justify-between">
        <UserBtn text="Invite" cta={false} />
        <UserBtn text="Logout" cta={false} />
      </div>
    </div>
  );
};

export default UserMenu;
