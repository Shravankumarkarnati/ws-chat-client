import React from "react";
import ScrollableContainer from "../common/ScrollableContainer.component";
import ChatWithHeader from "./ChatWithHeader.component";
import TypeMessage from "./TypeMessage.component";
import { mockMessage } from "./../../utils/mockMessage";

interface ChatWithProps {}

interface IMessageData {
  message: string;
}

const MessageSent: React.FC<IMessageData> = ({ message }) => {
  return (
    <div className="flex justify-end flex-1 my-2">
      <span className="w-auto max-w-1/2 bg-color-gray-light-2 rounded-xl mx-2 px-4 py-2">
        {message}
      </span>
    </div>
  );
};

const MessageReceived: React.FC<IMessageData> = ({ message }) => {
  return (
    <div className="flex justify-start flex-1 my-2">
      <span className="w-auto max-w-1/2 bg-color-gray-light mx-2 rounded-xl px-4 py-2">
        {message}
      </span>
    </div>
  );
};

const ChatWith: React.FC<ChatWithProps> = () => {
  return (
    <div
      className="chatWithComponent flex-1 
                    flex flex-col h-full bg-color-extra"
    >
      <ChatWithHeader />
      <div className="flex-1 flex flex-col-reverse bg-color-white">
        <TypeMessage />
        <ScrollableContainer>
          {mockMessage.map((message) =>
            message.sender === 1 ? (
              <MessageSent message={message.message} />
            ) : (
              <MessageReceived message={message.message} />
            )
          )}
        </ScrollableContainer>
      </div>
    </div>
  );
};
export default ChatWith;
