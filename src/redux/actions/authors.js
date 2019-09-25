import axios from "axios";
import { SET_AUTHORS } from "./actionType";

export const getAuthors = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        "https://the-index-api.herokuapp.com/api/authors/"
      );
      const authors = response.data;
      dispatch({
        type: SET_AUTHORS,
        payload: authors
      });
    } catch (err) {
      console.log(err);
    }
  };
};
