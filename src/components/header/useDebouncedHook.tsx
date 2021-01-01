import AwesomeDebouncePromise from "awesome-debounce-promise";
import { useState } from "react";
import { useAsync } from "react-async-hook";
import { useDispatch } from "react-redux";
import useConstant from "use-constant";
import {
  setSearchError,
  setSearchLoading,
  setSearchResults,
} from "../../redux/searchResults/actions";

export interface IResults {
  loading: Boolean;
  error: string | null;
  data: string[] | null;
}

const useDebouncedSearch = (searchFunction: Function, time: number = 1000) => {
  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  const debouncedSearchFunction = useConstant(() =>
    AwesomeDebouncePromise(searchFunction as any, time)
  );

  useAsync(async () => {
    if (inputText.length !== 0) {
      dispatch(setSearchLoading(true));
      const data = await debouncedSearchFunction(inputText);
      if (data.status) {
        dispatch(setSearchResults(data.data));
      } else {
        dispatch(setSearchError(data.data));
      }
      dispatch(setSearchLoading(false));
    } else {
      dispatch(setSearchLoading(false));
      dispatch(setSearchError(null));
      dispatch(setSearchResults(null));
    }
  }, [debouncedSearchFunction, inputText]);

  return {
    inputText,
    setInputText,
  };
};

export default useDebouncedSearch;
