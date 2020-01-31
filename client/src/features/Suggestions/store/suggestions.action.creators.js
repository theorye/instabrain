import * as types from "./suggestions.action.types";

export const addSuggestionsAction = payload => ({
  type: types.ADD_SUGGESTIONS,
  payload
});