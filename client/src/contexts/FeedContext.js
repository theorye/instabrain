import { createContext } from "react";
import createReducer from "../helpers/createReducer";

export const types = {
  SET_INITIAL_FEED_STATE: "SET_INITIAL_FEED_STATE"
};

export const initialFeedState = {
  loading: true,
  suggestions: [],
  posts: []
};

export const actions = {
  setFeedState: payload => ({ type: types.SET_INITIAL_FEED_STATE, payload })
};

const initialFeedReducer = (state, action) => ({
  ...state,
  ...action.payload,
  loading: false
});

export const reducer = createReducer({
  [types.SET_INITIAL_FEED_STATE]: initialFeedReducer
});

export const FeedContext = createContext();

export default FeedContext;
