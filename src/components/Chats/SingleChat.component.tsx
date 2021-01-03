import React from "react";
import { getRandomBoolean, getRandomNumber } from "./../../utils/getRandom";
import people1 from "../../images/people/1.jpg";
import people2 from "../../images/people/2.jpg";
import people3 from "../../images/people/3.jpg";
import people4 from "../../images/people/4.jpg";
import people5 from "../../images/people/5.jpg";

import { BiPin, BiFlag } from "react-icons/bi";
import { BsArchive } from "react-icons/bs";
import styled from "styled-components";

const getRandomImage = (n: number) => {
  switch (n) {
    case 1:
      return people1;
    case 2:
      return people2;
    case 3:
      return people3;
    case 4:
      return people4;
    case 5:
      return people5;
  }
};

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

const MoreOptionsButton = styled.button`
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  &::hover,
  &::active,
  &::focus {
    background: #a1a1a1;
  }
`;

const MoreOptionStyled = styled.span`
  position: relative;
  height: 5px;
  width: 5px;
  background-color: #292f36ff;
  border-radius: 1px;
  &::before,
  &::after {
    content: " ";
    position: absolute;
    height: 5px;
    width: 5px;
    background-color: #292f36ff;
    border-radius: 1px;
  }

  &::before {
    left: -7px;
  }
  &::after {
    left: 7px;
  }
`;

const UserProfilePic: React.FC = () => {
  const randomImage = getRandomImage(getRandomNumber(4) + 1);
  const randomBoolean = getRandomBoolean();
  const isUserOnline = randomBoolean
    ? "  border-4 border-color-secondary "
    : "  ";
  console.log(randomImage);
  return (
    <div className="userProfilePic row-span-2 flex items-center justify-center">
      <img
        src={randomImage}
        alt="Person's Name"
        className={
          "h-2/3 w-2/3 fill-current text-color-extra rounded-full  " +
          isUserOnline
        }
        title={randomBoolean ? "Online" : "Offline"}
      />
    </div>
  );
};

const SingleChat: React.FC<SingleChatProps> = ({ bgColor, data }) => {
  return (
    <div
      className="singleChat h-20 grid grid-rows-2 grid-master-chat 
                    hover:bg-color-gray-light cursor-pointer bg-color-white"
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
        <div
          className="chatOptions h-full flex 
                        flex-1 justify-end items-center
                        "
        >
          <BiFlag
            title="Flag Chat"
            className="h-5 w-5 mx-1 fill-current text-color-extra hover:text-color-primary"
          />
          <BiPin
            title="Pin Chat"
            className="h-5 w-5 mx-1 fill-current text-color-extra hover:text-color-primary"
          />
          <BsArchive
            title="Archive Chat"
            className="h-5 w-5 mx-1 fill-current text-color-extra hover:text-color-primary"
          />
        </div>
      </div>
      <div className="userChat flex justify-between items-center text-gray-700">
        <p>{data.chat.slice(0, 50) + "..."}</p>
        <MoreOptionsButton title="More Options">
          <MoreOptionStyled />
        </MoreOptionsButton>
      </div>
    </div>
  );
};
export default SingleChat;
