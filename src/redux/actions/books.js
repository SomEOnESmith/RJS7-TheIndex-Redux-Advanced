import axios from "axios";
import { SET_BOOKS } from "./actionType";

export const getBooks = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        "https://the-index-api.herokuapp.com/api/books/"
      );
      const authors = response.data;
      dispatch({
        type: SET_BOOKS,
        payload: authors
      });
    } catch (err) {
      console.log(err);
    }
  };
};
