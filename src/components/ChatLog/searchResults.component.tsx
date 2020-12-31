import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { currentChatWithAction } from "../../redux/userReducer/actions";
import { socket } from "./../../App";
import { IResults } from "./../../Hooks/useDebouncedHook";
import { usePageChangeHandler } from "./../../Hooks/usePageChangeHandler";
import LoadingSpinner from "./../LoadingSpinner/LoadingSpinner.component";

interface SearchResultsProps {
  results: IResults;
  setResults: React.Dispatch<React.SetStateAction<IResults>>;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}
interface SearchResultItemProps {
  item: string;
  cursor: string;
  setResults: React.Dispatch<React.SetStateAction<IResults>>;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({
  item,
  cursor,
  setResults,
  setInputText,
}) => {
  const dispatch = useDispatch();
  const { homeChangePageHandler } = usePageChangeHandler();
  const { id, username } = useSelector((state: RootState) => state.user);

  const openCurrentChat = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const receiver_id = event.currentTarget.dataset.cursor;
    const receiver_username = event.currentTarget.dataset.username;

    socket.emit("message", {
      sender: { id, username },
      receiver: { id: receiver_id, username: receiver_username },
    });

    receiver_id && dispatch(currentChatWithAction({ id: receiver_id }));
    setResults({
      loading: false,
      data: null,
      error: null,
    });
    setInputText("");
    homeChangePageHandler();
  };

  return (
    <div
      className="w-full flex p-4 items-stretch 
                hover:bg-hawkes-blue
                cursor-pointer          
      "
      onClick={openCurrentChat}
      data-cursor={cursor}
      data-username={item}
    >
      <span className="w-6 h-6">
        <FaRegUserCircle className="w-full h-full fill-current text-gray-500" />
      </span>
      <span
        className="flex-1 w-full text-center
            text-md font-semibold
            tracking-wide
      "
      >
        {item}
      </span>
    </div>
  );
};

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  setResults,
  setInputText,
}) => {
  const { data, loading, error } = results;
  return (
    <div className="flex-1">
      {loading && <LoadingSpinner />}
      {error && <h1>Error: {error}</h1>}
      {data && (
        <div className="resultsContainer grid grid-cols-1 divide-y divide-gossip">
          {data.length > 0 &&
            data.map((cur) => (
              <SearchResultItem
                key={cur[1]}
                cursor={cur[1]}
                item={cur[0]}
                setResults={setResults}
                setInputText={setInputText}
              />
            ))}
        </div>
      )}
    </div>
  );
};
export default SearchResults;
