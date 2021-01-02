import React from "react";
import { HiUserCircle } from "react-icons/hi";

export interface IMockDataItem {
  id: {
    $oid: string;
  };
  user: string;
  date: {
    $date: string;
  };
  chat: string;
}

interface SingleChatProps {
  bgColor: Boolean;
  data: IMockDataItem;
}

const UserProfilePic: React.FC = () => {
  return (
    <div className="userProfilePic row-span-2 flex items-center justify-center">
      <HiUserCircle className="h-1/2 w-1/2 fill-current text-kar-blue" />
    </div>
  );
};

const SingleChat: React.FC<SingleChatProps> = ({ bgColor, data }) => {
  return (
    <div
      className="singleChat h-20 grid grid-rows-2 grid-master-chat 
                    hover:bg-alice-blue-light cursor-pointer bg-alice-blue"
    >
      <UserProfilePic />
      <div
        className="userName flex justify-start items-center 
                    text-kar-black text-md font-semibold"
      >
        <span>{data.user}</span>
        <span className="opacity-70">@{data.user}</span>
      </div>
      <div className="userChat flex justify-start items-center text-gray-700">
        {data.chat.slice(0, 50) + "..."}
      </div>
    </div>
  );
};
export default SingleChat;
