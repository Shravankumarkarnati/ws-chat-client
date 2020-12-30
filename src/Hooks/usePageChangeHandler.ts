import { useDispatch } from "react-redux";
import { typeOfCurrentPage } from "../redux/currentPageReducer/reducer";
import { changeCurrentPageAction } from "./../redux/currentPageReducer/actions";

export const usePageChangeHandler = () => {
  const dispatch = useDispatch();
  const changePageHandler = (changePage: typeOfCurrentPage) => {
    dispatch(changeCurrentPageAction({ changeTo: changePage }));
  };

  return {
    loginChangePageHandler: () => changePageHandler("LOGIN"),
    regChangePageHandler: () => changePageHandler("REGISTER"),
    homeChangePageHandler: () => changePageHandler("HOME"),
  };
};
