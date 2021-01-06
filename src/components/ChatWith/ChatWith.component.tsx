import React from "react";
import ScrollableContainer from "../common/ScrollableContainer.component";
import ChatWithHeader from "./ChatWithHeader.component";
import TypeMessage from "./TypeMessage.component";
import { mockMessage } from "./../../utils/mockMessage";
import moment from "moment";

interface ChatWithProps {}

interface IMessageData {
  message: string;
  date: string;
  sentOrReceived?: number;
}

const MakeMessage: React.FC<IMessageData> = ({
  message,
  date,
  sentOrReceived,
}) => {
  const formatDate = moment(date).format("hh:mm A");
  const justifyClass = sentOrReceived === 1 ? "justify-end" : "justify-start";
  const bgClass =
    sentOrReceived === 1
      ? "bg-color-grayred-light-1"
      : "bg-color-grayred-light-2";
  return (
    <div className={"flex flex-1 my-2  " + justifyClass}>
      <div
        className={
          "w-auto max-w-1/2 rounded-xl mx-2 px-4 py-2 flex flex-col   " +
          bgClass
        }
      >
        <span className="text-sm">{message}</span>
        <span className="text-xs text-right flex-1">{formatDate}</span>
      </div>
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
          {mockMessage.map((message) => (
            <MakeMessage
              message={message.message}
              date={message.time.$date}
              sentOrReceived={message.sender}
            />
          ))}
        </ScrollableContainer>
      </div>
    </div>
  );
};
export default ChatWith;
