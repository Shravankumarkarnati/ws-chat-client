import React, { useRef } from "react";
import { HiSearch } from "react-icons/hi";
import { ImSpinner2 } from "react-icons/im";
import { useSearchUsernameResults } from "./searchUsernameResults.util";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const inputRef = useRef<any>(null);

  const { inputText, setInputText } = useSearchUsernameResults();

  const clearSearchBox = () => {
    setInputText("");
  };

  const changeInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const onSearchClick = () => {
    inputRef.current.focus();
  };

  return (
    <div
      className="searchBar w-1/2 h-full
                      flex items-center
                      rounded-md
                      tracking-tighter
                      overflow-hidden
                      bg-gray-400
      "
    >
      <div
        className="h-full w-8 bg-transparent mx-3
                        cursor-pointer
                        
        "
        onClick={onSearchClick}
      >
        <HiSearch className="h-full w-full fill-current text-kar-black" />
      </div>
      <input
        ref={inputRef}
        type="text"
        value={inputText}
        onChange={changeInputText}
        placeholder="Search username"
        className="px-2 py-1 text-md w-full h-full bg-transparent
                      focus:outline-none
                      placeholder-gray-600
          "
      />
      {inputText.length ? (
        <div
          className="h-full w-8 bg-transparent mx-3 cursor-pointer"
          onClick={clearSearchBox}
        >
          <ImSpinner2
            className="spinner w-full h-full 
                    fill-current text-madhuri-green
                    animate-spin
                    "
          />
        </div>
      ) : null}
    </div>
  );
};
export default SearchBar;
