import axios from "axios";
import React from "react";
import { HiSearch } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import useDebouncedSearch from "../../Hooks/useDebouncedHook";
import SearchResults from "./searchResults.component";

interface ChatLogsProps {}

const ChatLogs: React.FC<ChatLogsProps> = () => {
  const useSearchUsernameResults = () =>
    useDebouncedSearch((text: string) => searchUsernameResults(text));

  const {
    inputText,
    setInputText,
    results,
    setResults,
  } = useSearchUsernameResults();

  const changeInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const searchUsernameResults = async (text: string) => {
    const apiUrl = `${process.env.REACT_APP_API_URL as string}/search`;
    return axios
      .post(apiUrl, {
        data: {
          searchKeyWord: text,
        },
      })
      .then((results) => {
        if (results.data.success) return results.data.results;
        return [];
      });
  };

  const clearSearchBox = () => {
    setInputText("");
    setResults({
      loading: false,
      data: null,
      error: null,
    });
  };

  return (
    <div className="w-1/4">
      <div
        className="searchContainer w-full h-12 bg-gray-300
                      flex items-center
                      px-2 py-1
                      border-alice-blue border-2
                      rounded-md
      "
      >
        <div className="h-full w-6 bg-transparent">
          <HiSearch className="h-full w-full fill-current text-gray-700" />
        </div>
        <input
          type="text"
          placeholder="Search for a Username"
          value={inputText}
          onChange={changeInputText}
          className="flex-1 px-1 pl-3 h-full
                        bg-transparent
                      placeholder-gray-500
                      focus:outline-none
                      text-xl            
                      "
        />

        {inputText.length ? (
          <div
            className="h-full w-4 bg-transparent cursor-pointer"
            onClick={clearSearchBox}
          >
            <ImCross className="h-full w-full fill-current text-gray-700" />
          </div>
        ) : null}
      </div>
      {(inputText.length && <SearchResults results={results} />) || null}
    </div>
  );
};
export default ChatLogs;
