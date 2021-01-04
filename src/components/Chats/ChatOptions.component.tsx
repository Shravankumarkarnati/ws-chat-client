import React, { useState } from "react";
import { BiFlag, BiPin } from "react-icons/bi";
import { BsArchive } from "react-icons/bs";
import { VscMute, VscUnmute } from "react-icons/vsc";

interface ChatOptionsProps {}

const ChatOptions: React.FC<ChatOptionsProps> = () => {
  const [mute, setMute] = useState(false);
  const changeMuteStatus = (
    event: React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    event?.stopPropagation();
    setMute(!mute);
  };

  return (
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
      {mute ? (
        <VscMute
          onClick={changeMuteStatus}
          title="Archive Chat"
          className="h-5 w-5 mx-1 fill-current text-red-500 hover:text-color-primary"
        />
      ) : (
        <VscUnmute
          title="Archive Chat"
          className="h-5 w-5 mx-1 fill-current text-color-extra hover:text-red-500"
          onClick={changeMuteStatus}
        />
      )}
    </div>
  );
};
export default ChatOptions;
