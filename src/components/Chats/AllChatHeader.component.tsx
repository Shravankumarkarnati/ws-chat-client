import React from "react";

interface AllChatHeaderProps {}

const AllChatHeader: React.FC<AllChatHeaderProps> = () => {
  const optionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.currentTarget.value);
  };

  return (
    <header
      className="w-full flex h-20 items-center justify-between
                          bg-alice-blue px-4 flex-shrink-0 border-b-2 border-kar-blue"
    >
      <p className="text-lg tracking-tight font-bold text-kar-black">Chats</p>
      <button>
        <select
          className="font-normal text-sm flex items-center justify-between
                              border-2 border-kar-blue px-3 py-1 rounded
                              bg-transparent
          "
          name="filter"
          id="filter"
          onChange={optionChange}
        >
          <option className="bg-gray-300" value="All">
            All Chats
          </option>
          <option className="bg-gray-300" value="Flagged">
            Flagged
          </option>
          <option className="bg-gray-300" value="Unread">
            Unread
          </option>
          <option className="bg-gray-300" value="Read">
            Read
          </option>
          <option className="bg-gray-300" value="Mentions">
            Mentions
          </option>
        </select>
      </button>
    </header>
  );
};
export default AllChatHeader;
