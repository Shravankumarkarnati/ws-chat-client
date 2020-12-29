import AwesomeDebouncePromise from "awesome-debounce-promise";
import { useContext, useState } from "react";
import { useAsync } from "react-async-hook";
import useConstant from "use-constant";
import AppContext from "../Model/context";

const useDebouncedSearch = (searchFunction: Function, time: number = 1000) => {
  const [inputText, setInputText] = useState("");

  const { changeContext, ...context } = useContext(AppContext);

  const debouncedSearchFunction = useConstant(() =>
    AwesomeDebouncePromise(searchFunction as any, time)
  );

  useAsync(async () => {
    if (inputText.length === 0) {
      changeContext!({
        ...context,
        search: {
          ...context.search,
          loadingStatus: false,
          results: [],
          status: false,
        },
      });
    } else if (inputText.length !== 0) {
      changeContext!({
        ...context,
        search: {
          ...context.search,
          loadingStatus: true,
          status: true,
        },
      });
      const results = await debouncedSearchFunction(inputText);
      changeContext!({
        ...context,
        search: {
          ...context.search,
          status: true,
          results,
          loadingStatus: false,
        },
      });
    }
  }, [debouncedSearchFunction, inputText]);

  return {
    inputText,
    setInputText,
  };
};

export default useDebouncedSearch;
