import React, { useContext } from "react";
import AppContext from "../../Model/context";

interface SearchResultsProps {}
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
    changeContext!({
      currentChat: event.currentTarget.dataset.cursor,
      ...context,
      search: {
        results: null,
        status: false,
        error: null,
        loadingStatus: false,
      },
      currentPage: "Home",
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

const SearchResults: React.FC<SearchResultsProps> = () => {
  const {
    search: { results, loadingStatus, status, error },
  } = useContext(AppContext);

  return (
    <>
      {status ? (
        <div>
          {loadingStatus && <h1>Loading....</h1>}
          {error && <h1>Error: {error}</h1>}
          {results &&
            results.length > 0 &&
            results.map((cur) => (
              <SearchResultItem key={cur[1]} cursor={cur[1]} item={cur[0]} />
            ))}
        </div>
      ) : null}
    </>
  );
};
export default SearchResults;
