import * as types from "./suggestions.action.types";

const suggestionsReducer = (state, action) => {
  return {
    ...state,
    suggestions: action.payload
  };
};

export default {
  [types.ADD_SUGGESTIONS]: suggestionsReducer
};
