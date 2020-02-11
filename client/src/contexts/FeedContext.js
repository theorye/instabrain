import { createContext } from "react";
import createReducer from "../helpers/createReducer";

export const types = {
  SET_FEED_STATE: "SET_FEED_STATE",
  SET_FEED_LOADING: "SET_FEED_LOADING",
  SET_FEED_NEW_FOLLOWING: "TOGGLE_FEED_NEW_FOLLOWING"
};

export const initialFeedState = {
  loading: true,
  newFollowing: false,
  suggestions: [],
  posts: []
};

export const actions = {
  setFeedState: payload => ({ type: types.SET_FEED_STATE, payload }),
  setFeedLoading: () => ({ type: types.SET_FEED_LOADING }),
  setFeedNewFollowing: () => ({ type: types.SET_FEED_NEW_FOLLOWING })
};

const setFeedReducer = (state, action) => ({
  ...state,
  ...action.payload,
  loading: false,
  newFollowing: false
});

const setLoadingReducer = state => ({ ...state, loading: true });

const setNewFollowing = state => ({
  ...state,
  newFollowing: !state.newFollowing
});

export const reducer = createReducer({
  [types.SET_FEED_STATE]: setFeedReducer,
  [types.SET_FEED_LOADING]: setLoadingReducer,
  [types.SET_FEED_NEW_FOLLOWING]: setNewFollowing
});

export const FeedContext = createContext();

export default FeedContext;
