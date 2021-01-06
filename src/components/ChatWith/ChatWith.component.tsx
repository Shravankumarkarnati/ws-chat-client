import React, { useEffect, useRef } from "react";
import ScrollableContainer from "../common/ScrollableContainer.component";
import { mockMessage } from "./../../utils/mockMessage";
import ChatWithHeader from "./ChatWithHeader.component";
import MakeSingleMessage from "./MakeSingleMessage.component";
import TypeMessage from "./TypeMessage.component";

interface ChatWithProps {}

const ChatWith: React.FC<ChatWithProps> = () => {
  const scrollToBottomHelperDivRef = useRef<any>(null);
  useEffect(() => {
    scrollToBottomHelperDivRef.current.scrollIntoView(true);
  }, []);
  return (
    <div
      className="chatWithComponent flex-1 
                    flex flex-col h-full bg-color-black-light"
    >
      <ChatWithHeader />
      <div className="flex-1 flex flex-col-reverse bg-color-white">
        <TypeMessage />
        <ScrollableContainer>
          {mockMessage.map((message) => (
            <MakeSingleMessage
              message={message.message}
              date={message.time.$date}
              sentOrReceived={message.sender}
            />
          ))}
          <div className="max-h-0" ref={scrollToBottomHelperDivRef}></div>
        </ScrollableContainer>
      </div>
    </div>
  );
};
export default ChatWith;
