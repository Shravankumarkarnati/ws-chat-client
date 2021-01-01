import axios from "axios";
import useDebouncedSearch from "../../Hooks/useDebouncedHook";

export const searchUsernameResults = async (text: string) => {
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

export const useSearchUsernameResults = () =>
  useDebouncedSearch((text: string) => searchUsernameResults(text));