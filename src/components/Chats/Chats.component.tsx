import React from "react";
import SingleChat from "./SingleChat.component";
import { mockData } from "./../../utils/mockData";

interface ChatsProps {}

const Chats: React.FC<ChatsProps> = () => {
  return (
    <section className="chatsContainer flex-1 relative">
      <div
        className="outerContainer absolute top-0 
                    left-0 w-full h-full z-40 flex flex-col"
      >
        <div
          className="innerContainer flex
                        flex-col flex-grow min-h-0"
        >
          <div
            className="scrollableContainer scrollbar-master 
          flex-grow overflow-y-auto min-h-0 divide-y-2 divide-color-gray "
          >
            {mockData.map((cur, index) => (
              <SingleChat
                key={cur.id.$oid}
                bgColor={index % 2 === 0}
                data={cur}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Chats;
