import { SET_AUTHORS } from "../actions/actionType";

const initialState = {
  authors: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
