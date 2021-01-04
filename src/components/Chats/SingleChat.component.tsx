import React, { useState } from "react";
import ChatOptions from "./ChatOptions.component";
import { MoreOptionsButton, MoreOptionStyled } from "./SingleChat.styled";
import { UserProfilePic } from "./UserProfilePic.component";
import { useDispatch } from "react-redux";
import { currentChatWithAction } from "./../../redux/userReducer/actions";

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
  data: IMockDataItem;
}

const SingleChat: React.FC<SingleChatProps> = ({ data }) => {
  const [moreOptionsOpen, setMoreOptionsOpen] = useState(false);
  const changeMoreOptionsOpenState = () => setMoreOptionsOpen(!moreOptionsOpen);
  const dispatch = useDispatch();

  const openChatWithCurrentUser = () => {
    dispatch(currentChatWithAction({ id: data.id.$oid, username: data.user }));
  };

  return (
    <div
      className="singleChat h-20 grid grid-rows-2 grid-master-chat 
                    hover:bg-color-gray-light cursor-pointer
                     bg-color-white "
      onClick={openChatWithCurrentUser}
    >
      <UserProfilePic />
      <div
        className="userName flex justify-between items-center 
                    text-color-black text-md"
      >
        <div>
          <span className="text-lg tracking-tighter lowercase font-semibold">
            {data.user}
          </span>
          <span className="opacity-70 text-xs ml-4">@{"CompanyName"}</span>
        </div>
        <ChatOptions />
      </div>
      <div className="userChat flex justify-between items-center">
        <p className="text-sm text-color-extra opacity-80">
          {data.chat.slice(0, 50) + "..."}
        </p>
        <MoreOptionsButton
          title="More Options"
          onClick={changeMoreOptionsOpenState}
        >
          <MoreOptionStyled />
        </MoreOptionsButton>
      </div>
    </div>
  );
};
export default SingleChat;
