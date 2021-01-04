import React from "react";
import SingleChat from "./SingleChat.component";
import { mockData } from "./../../utils/mockData";
import ScrollableContainer from "../common/ScrollableContainer.component";

interface ChatsProps {}

const Chats: React.FC<ChatsProps> = () => {
  return (
    <ScrollableContainer classNames={["divide-y-2  divide-color-gray "]}>
      <>
        {mockData.map((cur) => (
          <SingleChat key={cur.id.$oid} data={cur} />
        ))}
      </>
    </ScrollableContainer>
  );
};
export default Chats;
