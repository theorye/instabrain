import { createContext } from "react";
import createReducer from "../helpers/createReducer";

export const types = {
  LOGIN_USER: "LOGIN_USER",
  INCREMENT_FOLLOWING: "INCREMENT_FOLLOWING"
};

export const initialState = {
  isAuthenticated: false,
  id: null,
  username: null,
  following: 0,
  name: null
};

export const actions = {
  loginUser: payload => ({ type: types.LOGIN_USER, payload }),
  incrementFollowing: () => ({ type: types.INCREMENT_FOLLOWING })
};

const loginReducer = (state, action) => ({
  ...state,
  following: action.payload.following,
  username: action.payload.username,
  id: action.payload.id,
  name: action.payload.name,
  isAuthenticated: true
});

const incrementFollowingReducer = (state, action) => ({
  ...state,
  following: state.following++
});

export const reducer = createReducer({
  [types.LOGIN_USER]: loginReducer,
  [types.INCREMENT_FOLLOWING]: incrementFollowingReducer
});

export const AppContext = createContext();

export default AppContext;
