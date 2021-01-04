import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { currentChatWithAction } from "../../redux/userReducer/actions";

interface ChatWithHeaderProps {}

const ChatWithHeader: React.FC<ChatWithHeaderProps> = () => {
  const { username } = useSelector(
    (state: RootState) => state.user.currentChatWith
  );

  const dispatch = useDispatch();

  const backToAllChats = () => {
    dispatch(currentChatWithAction({ id: null, username: null }));
  };
  return (
    <div
      className="chatWithHeader w-full flex h-20 items-center justify-between
            bg-color-white px-4 flex-shrink-0 border-b-2 border-color-gray
                "
    >
      <button
        className="backToAllChats flex items-center"
        onClick={backToAllChats}
      >
        <BsArrowLeft className="w-8 h-8 fill-current text-color-extra" />
      </button>
      <div className="flex items-center justify-start">
        <span
          className="onlineStatus w-2 h-2 bg-color-primary 
                                rounded-full mr-3
            "
        ></span>
        <span
          className="text-lg text-color-extra tracking-tighter
                                font-bold
              "
        >
          {username}
        </span>
      </div>
    </div>
  );
};
export default ChatWithHeader;
