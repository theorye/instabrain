import { createContext } from "react";
import createReducer from "../helpers/createReducer";

export const types = {
  LOGIN_USER: "LOGIN_USER"
};

export const initialState = {
  isAuthenticated: false,
  userId: null,
  username: null,
  following: null
};

export const actions = {
  loginUser: payload => ({ type: types.ADD_USER, payload })
};

const loginReducer = (state, action) => ({ ...state, isAuthenticated: true });


export const reducer = createReducer({ [types.LOGIN_USER]: loginReducer });

export const FeedContext = createContext();

export default AppContext;
