import axios from "axios";
import React, { useContext } from "react";
import { HiSearch } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import useDebouncedSearch from "../../Hooks/useDebouncedHook";
import AppContext from "../../Model/context";
import SearchResults from "./searchResults.component";

interface ChatLogsProps {}

const ChatLogs: React.FC<ChatLogsProps> = () => {
  const { changeContext, ...context } = useContext(AppContext);

  const useSearchUsernameResults = () =>
    useDebouncedSearch((text: string) => searchUsernameResults(text));

  const { inputText, setInputText } = useSearchUsernameResults();

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
    changeContext!({
      ...context,
      search: {
        ...context.search,
        results: [],
        status: false,
      },
    });
  };

  return (
    <div className=" flex flex-col w-2/5 px-3 border-r-2 border-black">
      <div
        className="full-width flex items-center bg-white 
                    ml-2 mt-2 rounded-xl focus-within:ring-2 focus-within:ring-indigo-600 "
      >
        <HiSearch className="w-6 h-6 fill-current mx-3" />
        <input
          type="text"
          placeholder="Search for a username"
          value={inputText}
          onChange={changeInputText}
          className="full-width p-3 text-md 
                    focus:outline-none focus:border-transparent
          "
        />
        {inputText.length ? (
          <div
            className="w-3 h-6 mx-3 flex items-center justify-center"
            onClick={clearSearchBox}
          >
            <ImCross className="w-3 h-3 fill-current" />
          </div>
        ) : null}
      </div>
      <SearchResults />
    </div>
  );
};
export default ChatLogs;
