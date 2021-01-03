import React from "react";
import { getRandomBoolean, getRandomNumber } from "./../../utils/getRandom";
import people1 from "../../images/people/1.jpg";
import people2 from "../../images/people/2.jpg";
import people3 from "../../images/people/3.jpg";
import people4 from "../../images/people/4.jpg";
import people5 from "../../images/people/5.jpg";

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
        <span className="text-lg tracking-tighter lowercase font-semibold">
          {data.user}
        </span>
        <span className="opacity-70 text-xs">@{data.user}</span>
      </div>
      <div className="userChat flex justify-start items-center text-gray-700">
        {data.chat.slice(0, 50) + "..."}
      </div>
    </div>
  );
};
export default SingleChat;
