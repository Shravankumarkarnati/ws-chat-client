import React, { useContext } from "react";
import AppContext from "../../Model/context";
import { socket } from "./../../App";
import { IResults } from "./../../Hooks/useDebouncedHook";

interface SearchResultsProps {
  results: IResults;
}
interface SearchResultItemProps {
  item: string;
  cursor: string;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({
  item,
  cursor,
}) => {
  const { changeContext, ...context } = useContext(AppContext);

  const openCurrentChat = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    socket.emit("message", {
      sender: context.loggedIn.username,
      receiver: context.currentChatWith,
    });

    changeContext!({
      ...context,
      search: {
        results: null,
        status: false,
        error: null,
        loadingStatus: false,
      },
      currentPage: "Home",
      currentChatWith: event.currentTarget.dataset.cursor || null,
    });
  };

  return (
    <div
      className="flex items-center justify-center text-lg py-4 
                  border-black border-2 mt-2 hover:bg-gray-400 cursor-pointer"
      onClick={openCurrentChat}
      data-cursor={cursor}
    >
      {item}
    </div>
  );
};

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  const { data, loading, error } = results;
  return (
    <div>
      {loading && <h1>Loading....</h1>}
      {error && <h1>Error: {error}</h1>}
      {data &&
        data.length > 0 &&
        data.map((cur) => (
          <SearchResultItem key={cur[1]} cursor={cur[1]} item={cur[0]} />
        ))}
    </div>
  );
};
export default SearchResults;
