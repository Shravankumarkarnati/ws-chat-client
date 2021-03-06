import axios from "axios";
import useDebouncedSearch from "../../Hooks/useDebounced";

export const searchUsernameResults = async (text: string) => {
  const apiUrl = `${process.env.REACT_APP_API_URL as string}/search`;
  return axios
    .post(apiUrl, {
      data: {
        searchKeyWord: text,
      },
    })
    .then((results) => {
      if (results.data.success) {
        return {
          status: true,
          data: results.data.results,
        };
      } else {
        return {
          status: false,
          data: "Server Error",
        };
      }
    })
    .catch((err: Error) => {
      return {
        status: false,
        data: err.message,
      };
    });
};

export const useSearchUsernameResults = () =>
  useDebouncedSearch((text: string) => searchUsernameResults(text));
