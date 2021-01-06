import React from "react";

interface AllChatHeaderProps {}

const AllChatHeader: React.FC<AllChatHeaderProps> = () => {
  const optionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {};

  return (
    <header
      className="w-full flex h-20 items-center justify-between
                          bg-color-white px-4 flex-shrink-0 border-b-2 border-color-gray"
    >
      <p className="text-xl tracking-tight font-bold text-color-black ">
        Inbox
      </p>
      <button>
        <select
          className="font-normal text-sm flex items-center justify-between
                              border-2 border-color-extra px-3 py-1 rounded
                              bg-transparent
          "
          name="filter"
          id="filter"
          onChange={optionChange}
        >
          <option className="bg-color-white" value="All">
            All Chats
          </option>
          <option className="bg-color-white" value="Flagged">
            Flagged
          </option>
          <option className="bg-color-white" value="Unread">
            Unread
          </option>
          <option className="bg-color-white" value="Read">
            Read
          </option>
          <option className="bg-color-white" value="Mentions">
            Mentions
          </option>
          <option className="bg-color-white" value="Archived">
            Archived
          </option>
        </select>
      </button>
    </header>
  );
};
export default AllChatHeader;
