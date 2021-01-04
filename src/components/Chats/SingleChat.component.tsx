import React, { useState } from "react";
import styled from "styled-components";
import ChatOptions from "./ChatOptions.component";
import { MoreOptionsButton, MoreOptionStyled } from "./SingleChat.styled";
import { UserProfilePic } from "./UserProfilePic.component";

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

interface DropDownProps {
  show: Boolean;
}

const DropDown = styled.div<DropDownProps>`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: white;
  z-index: ${(props) => (props.show === false ? -20 : 100)};
  opacity: ${(props) => (props.show === false ? 0 : 1)};
  visibility: ${(props) => (props.show === false ? "hidden" : "visible")};
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: max-content;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;

  & span {
    /* visibility: inherit; */
    /* opacity: inherit; */
    padding: 5px;
  z-index: ${(props) => (props.show === false ? -20 : 100)};
  }
`;

const SingleChat: React.FC<SingleChatProps> = ({  data }) => {
  const [dropDown, setDropDown] = useState(false);
  const changeDropDownState = () => setDropDown(!dropDown);
  return (
    <div
      className="singleChat h-20 grid grid-rows-2 grid-master-chat 
                    hover:bg-color-gray-light cursor-pointer bg-color-white overflow-visible"
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
        <MoreOptionsButton title="More Options" onClick={changeDropDownState}>
          <MoreOptionStyled />
          <DropDown show={dropDown}>
            <span>Delete</span>
            <span>Delete</span>
            <span>Delete</span>
          </DropDown>
        </MoreOptionsButton>
      </div>
    </div>
  );
};
export default SingleChat;
