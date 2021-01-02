import React from "react";
import AllChatHeader from "./AllChatHeader.component";

interface AllChatProps {}

const AllChat: React.FC<AllChatProps> = () => {
  return (
    <div className="flex-1 flex flex-col h-full">
      <AllChatHeader />
      <div
        className="flex flex-col w-full divide-y-2 divide-madhuri-green
                      overflow-y-auto scrollbar-master bg-white
      "
      >
        <div className="w-full bg-kar-black">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-alice-blue-light">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-kar-black">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-alice-blue-light">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-kar-black">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-alice-blue-light">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-kar-black">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-alice-blue-light">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-kar-black">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-alice-blue-light">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-kar-black">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-alice-blue-light">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-kar-black">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-alice-blue-light">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-kar-black">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-alice-blue-light">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-kar-black">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-alice-blue-light">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-kar-black">
          <div className="h-16"></div>
        </div>
        <div className="w-full bg-alice-blue-light">
          <div className="h-16"></div>
        </div>
      </div>
    </div>
  );
};
export default AllChat;
