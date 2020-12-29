import React, { useContext } from "react";
import AppContext from "../../Model/context";

interface SearchResultsProps {}
interface SearchResultItemProps {
  item: string;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ item }) => {
  return <div>{item}</div>;
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
            results.map((cur) => <SearchResultItem key={cur} item={cur} />)}
        </div>
      ) : null}
    </>
  );
};
export default SearchResults;
