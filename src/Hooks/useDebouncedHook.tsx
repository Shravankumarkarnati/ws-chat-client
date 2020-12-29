import AwesomeDebouncePromise from "awesome-debounce-promise";
import { useState } from "react";
import { useAsync } from "react-async-hook";
import useConstant from "use-constant";

const useDebouncedSearch = (searchFunction: Function, time: number = 500) => {
  const [inputText, setInputText] = useState("");

  const debouncedSearchFunction = useConstant(() =>
    AwesomeDebouncePromise(searchFunction as any, time)
  );

  const searchResults = useAsync(async () => {
    if (inputText.length === 0) {
      return [];
    } else {
      return debouncedSearchFunction(inputText);
    }
  }, [debouncedSearchFunction, inputText]);

  return {
    inputText,
    setInputText,
    searchResults,
  };
};

export default useDebouncedSearch;
