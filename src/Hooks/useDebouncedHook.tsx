import AwesomeDebouncePromise from "awesome-debounce-promise";
import { useState } from "react";
import { useAsync } from "react-async-hook";
import useConstant from "use-constant";

export interface IResults {
  loading: Boolean;
  error: string | null;
  data: string[] | null;
}

const useDebouncedSearch = (searchFunction: Function, time: number = 1000) => {
  const [inputText, setInputText] = useState("");

  const [results, setResults] = useState<IResults>({
    loading: false,
    error: null,
    data: null,
  });

  const debouncedSearchFunction = useConstant(() =>
    AwesomeDebouncePromise(searchFunction as any, time)
  );

  useAsync(async () => {
    if (inputText.length !== 0) {
      setResults({ ...results, loading: true });
      const data = await debouncedSearchFunction(inputText);
      setResults({
        loading: false,
        error: null,
        data,
      });
    }
  }, [debouncedSearchFunction, inputText]);

  return {
    inputText,
    setInputText,
    results,
    setResults,
  };
};

export default useDebouncedSearch;
